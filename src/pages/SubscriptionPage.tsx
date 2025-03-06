import React, { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers'; // 引入 ethers
import { BigNumber } from 'ethers'; // 添加 BigNumber 导入
import CryptoJS from 'crypto-js'; // 引入 crypto-js
import { useEarlyBirdContract } from '../hooks/useEarlyBirdContract';

import { useMemo } from 'react'
import { type Config, useConnectorClient } from 'wagmi'
// import { type Config, useClient } from 'wagmi'
import { clientToSigner } from '../utils/provider'; // 引入公共模块
import CustomModal from '../components/CustomModal'; // 引入自定义弹窗组件
import { useAnalytics } from '../hooks/useAnalytics';

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}

const { sendEvent } = useAnalytics();

const SALT = 'ethereum_address_salt'; // 固定盐值

const formatAddress = (address: string) => {
  if (address.length <= 8) return address;
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

const SubscriptionPage = () => {
  const { t } = useTranslation();
  const { isConnected, address } = useAccount();
  const signer = useEthersSigner();
  const navigate = useNavigate();
  const [inviterAddress, setInviterAddress] = useState<string | null>(null); // New state management
  const [isModalOpen, setIsModalOpen] = useState(false); // 控制弹窗显示
  const [inviterInput, setInviterInput] = useState(''); // 输入框状态
  const [isInviterBound, setIsInviterBound] = useState(false); // 新增状态管理
  const [errorMessage, setErrorMessage] = useState(''); // 新增状态管理
  const [inviterList, setInviterList] = useState<string[]>([]); // 新增状态管理
  const [isEarlyBird, setIsEarlyBird] = useState<boolean>(false); // 新增状态管理

  const [registrationStatus, setRegistrationStatus] = useState<Record<string, boolean>>({});
  const { checkRegistrationStatus } = useEarlyBirdContract(signer);


  const inviteLinkPrefix = t('subscription.inviteLinkPrefix');
  const inviteErr = t('subscription.BindInviterErr');
  // const inviteLink = `https://thegenesis.cc/mywallet?refer=${address}`;
  const encryptedAddress = CryptoJS.AES.encrypt(address, SALT).toString(); // 加密地址
  // const newInviteLink = `https://thegenesis.cc/mywallet?refer=${encryptedAddress}`; // 使用加密后的地址生成
  const newInviteLink = `https://thegenesis.cc/mywallet?refer=${encodeURIComponent(encryptedAddress)}`; // 使用加密后的地址生成新的邀请链接新的邀请链接

  const copyToClipboard = () => {
    navigator.clipboard.writeText(newInviteLink).then(() => {
      alert(t('subscription.copySuccess'));
    });
    sendEvent('button_click', {
      button_name: 'copy_invite_link_button',
      page_location: 'subscription_page'
    });
  };

  const handleMoreDetailsClick = () => {
    navigate('/earlybirds'); //
    sendEvent('button_click', {
      button_name: 'earlybirds_button',
      button_location: 'subscription_page'
    });
  };

  const handleBindInviterClick = () => {
    setIsModalOpen(true); // 打开弹窗
    sendEvent('button_click', {
      button_name: 'bind_inviter_button',
      page_location: 'subscription_page'
    });
  };

  const handleModalClose = () => {
    setInviterInput(''); // 清空输入框
    setIsModalOpen(false); // 关闭弹窗
    setErrorMessage(''); // 清空错误消息
  };

  const fetchInviterAddress = async () => {
    if (isConnected && address && signer) {
      const contract = new ethers.Contract(
        '0x636B03c4f2885E341E9bEE0512Fc0061cC5BAb5b',
        ['function getCurrentInviter(address _user) external view returns (address)'],
        signer
      );

      const inviter = await contract.getCurrentInviter(address);
      setInviterAddress(inviter);
       const urlParams = new URLSearchParams(window.location.search);
      //  const referAddress = urlParams.get('refer');
      const referAddressParam = urlParams.get('refer');
      const referAddress = referAddressParam ? decodeURIComponent(referAddressParam) : null; // 进行更严格的检查
      if (referAddress && !isInviterBound) {
        if (!inviter || inviter === '0x0000000000000000000000000000000000000000') {
           setInviterInput(referAddress); 
           setIsModalOpen(true);
        
          }
       }else{
        console.log('referAddress', 'referAddress');
       }
    }
  };

  const fetchInviterList = async () => {
    if (isConnected && address && signer) {
      const contract = new ethers.Contract(
        '0x636B03c4f2885E341E9bEE0512Fc0061cC5BAb5b',
        ['function getInviteInfo(address _invitee) external view returns (address[] memory)'],
        signer
      );

      const inviteInfo = await contract.getInviteInfo(address); 
      setInviterList(inviteInfo);
      checkAllAddresses();
    }
  };

  const checkEarlyBirdStatus = async () => {
    if (isConnected && address && signer) {
      const registered = await checkRegistrationStatus(address);
      setIsEarlyBird(registered);
    }
  };
  const checkAllAddresses = async () => {
    for (const inviter of inviterList) {
      const status = await checkRegistrationStatus(inviter);
      setRegistrationStatus(prev => ({
        ...prev,
        [inviter]: status
      }));
    }
  };

  useEffect(() => {
    fetchInviterAddress();
    fetchInviterList(); // 新增调用
    checkEarlyBirdStatus(); // 新增调用
    // if (signer) {
    //   checkAllAddresses();
    // }
  }, [isConnected, address, signer]);

  const handleConfirm = async () => {
    try {
      if (!signer) {
        throw new Error("Provider is not available");
      }

      // 解密 referAddress
      const decryptedBytes = CryptoJS.AES.decrypt(inviterInput, SALT);
      const decryptedAddress = decryptedBytes.toString(CryptoJS.enc.Utf8); // 获取解密后的地址
      // 检查 decryptedAddress 是否为有效的以太坊地址
      if (!ethers.isAddress(decryptedAddress)) {
        alert(t('subscription.invalidInviteCode')); // 提示错误信息
        return; // 退出函数
      }
      console.log('decryptedAddress', decryptedAddress);

      const contract = new ethers.Contract(
        '0x636B03c4f2885E341E9bEE0512Fc0061cC5BAb5b',
        ['function bindInvitation(address _inviter) external'],
        signer // 使用 signer 而不是 provider
      );

      const tx = await contract.bindInvitation(decryptedAddress); // 调用合约方法
      await tx.wait(); // 等待交易确认

      setIsInviterBound(true); // 隐藏绑定邀请人按钮
      setInviterInput(''); // 清空输入框
      setIsModalOpen(false); // 关闭弹窗
      fetchInviterAddress(); // 重新获取邀请人地址
      fetchInviterList(); // 重新获取邀请人列表
      setErrorMessage(''); // 清空错误消息
      sendEvent('button_click', {
        button_name: 'bind_inviter_button',
        page_location: 'subscription_page'
      });
    } catch (error) {
      console.error('Error binding inviter:', error);
      setErrorMessage(inviteErr); // 设置错误消息
    }
  };

  const handleRegister = async () => {
    try {
      if (!signer) {
        throw new Error("Provider is not available");
      }

      // 获取用户的地址
      const userAddress = await signer.getAddress();
      const provider = signer.provider;
      
      // 检查用户的余额
      // const balance = await signer.getProvider().getBalance(); // 直接调用 getBalance
      const balance = await provider.getBalance(userAddress);
      console.log('balance', balance);
      const requiredAmount = ethers.parseEther("0.01"); // 需要的金额 0.01 BNB
      console.log('requiredAmount', requiredAmount);
      if (balance<(requiredAmount)) {
        alert(t('subscription.insufficientBalance')); // 弹出提示
        return; // 退出函数
      }

      const contract = new ethers.Contract(
        '0x7374b6bb72d09a7bf3d9cac249552d5005a5f0c1',
        ['function register() external payable'],
        signer
      );

      console.log(contract);

      const tx = await contract.register({
        value: requiredAmount // 支付 0.01 BNB
      });
      await tx.wait(); // 等待交易确认

      // 成功调用后，重新查询 earlyBirds 状态
      checkEarlyBirdStatus(); // 更新页面
      sendEvent('button_click', {
        button_name: 'register_button',
        page_location: 'subscription_page'
      });
    } catch (error) {
      console.error('Error registering as early bird:', error);
      setErrorMessage(t('subscription.registerError')); // 设置错误消息
    }
  };

  const handleShareClick = () => {
    // 发送分享事件到 Google Analytics
    sendEvent('share_click', {
      share_platform: 'twitter',
      share_location: 'subscription_page'
    });
    
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(t('subscription.shareMessage', { inviteLink: newInviteLink }))}`,
      '_blank'
    );
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ConnectButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex pt-24 justify-center overflow-x-hidden">
      <div className="max-w-[1120px] w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-start px-4 py-8">
          {/* Avatar and wallet address section */}
          <div className="flex items-start mb-4 flex-wrap">
            {/* Avatar section */}
            <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mr-4 overflow-hidden">
              <img 
                src={isEarlyBird ? "/assets/images/earlybrids.jpg" : "/assets/images/genesis_r.jpg"} 
                className="w-full h-full object-cover" 
              />
              {/* earlybrids.jpg */}
            </div>
            {/* Wallet address */}
            <div className="flex flex-col w-full">
              <span className="font-medium mb-2 pt-4 text-base md:text-lg ">{t('subscription.walletAddress')}</span>
              <p className="font-medium mb-4 text-base md:text-lg  break-all">{address}</p>
            </div>
            <p className="font-medium mb-2">
            {t('subscription.inviter')} {inviterAddress === '0x0000000000000000000000000000000000000000' ? '--' : inviterAddress}
            </p>
          </div>

          {/* Share link */}
          <p className="font-medium mb-2 break-words w-full">
            {inviteLinkPrefix}
          </p>
          <p className="font-medium mb-2 break-words w-full">
            <span 
              onClick={copyToClipboard} 
              className="text-blue-500 cursor-pointer whitespace-normal break-all"
            >
              {newInviteLink}
            </span>
          </p>
          <p 
            className="text-orange-300 w-full mb-4 font-medium mb-1" 
            onClick={handleShareClick}
          >
            {t('subscription.share')} 
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mb-4">
            {!isEarlyBird && ( // 根据 isEarlyBird 状态决定按钮是否显示
              <button 
                className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80"
                onClick={handleRegister} // 点击按钮时调用 handleRegister
              >
                {t('subscription.timeStart')}
              </button>
            )}
          </div>

          {/* Description text */}
          <p className="font-medium mb-5">
            {t('subscription.presaleContent')}
          </p>
          <p className="text-orange-300 w-full mb-4 font-medium mb-5" onClick={handleMoreDetailsClick}>
            {t('subscription.moreinfo')}
          </p>
         
        </div>

        {/* Right content - My invite list */}
        <div className="w-full md:w-1/2 px-4 py-8">
          <h2 className="text-xl font-bold mb-2 text-left">{t('subscription.myInviteList')}</h2>
          {inviterAddress === '0x0000000000000000000000000000000000000000' && !isInviterBound && ( // Check inviter address
            <button 
              className="bg-gradient-to-r mb-2 from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80"
              onClick={handleBindInviterClick} // 
            >
              {t('subscription.BindInviter')}
            </button>
          )}
          <p className="text-gray-400 w-full mb-2">{t('subscription.description')}</p>
          {inviterList.length === 0 && (
            <p className=" mb-4">{t('subscription.listdefualt')}</p>
          )}
          {inviterList.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b border-orange-200">
                    <th className="px-4 py-2 text-left text-orange-300">{t('subscription.invitaddress')}</th>
                    <th className="px-4 py-2 text-left text-orange-300">{t('subscription.invitearlybirdsbum')}</th>
                    <th className="px-4 py-2 text-left text-orange-300">{t('subscription.invitboxnum')}</th>
                  </tr>
                </thead>
                <tbody>
                  {inviterList.map((inviter, index) => (<tr key={index} className="border-b border-orange-200">
                    <td className="px-4 py-2">{formatAddress(inviter)}</td>
                    <td className="px-4 py-2">{registrationStatus[inviter] ? '1' : '0'}</td>
                    <td className="px-4 py-2">0</td>
                  </tr>))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {/* 自定义弹窗 */}
      {isModalOpen && (
        <CustomModal onClose={handleModalClose} onConfirm={handleConfirm} errorMessage={errorMessage}>
          <input 
            type="text" 
            value={inviterInput} 
            onChange={(e) => setInviterInput(e.target.value)} // 这里会实时更新 inviterInput
            placeholder={t('subscription.placeholder')} 
            className="border p-2 w-full mb-4 text-white placeholder-white bg-transparent"
          />
        </CustomModal>
      )}
    </div>
  );
};

export default SubscriptionPage; 