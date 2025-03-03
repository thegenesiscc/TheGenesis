import React, { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers'; // 引入 ethers

import { useMemo } from 'react'
import { type Config, useConnectorClient } from 'wagmi'
// import { type Config, useClient } from 'wagmi'
import { clientToSigner } from '../utils/provider'; // 引入公共模块
import CustomModal from '../components/CustomModal'; // 引入自定义弹窗组件

/** Action to convert a viem Client to an ethers.js Provider. */
// export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
//   const client = useClient<Config>({ chainId })
//   return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
// }
/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}

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

  const inviteLinkPrefix = t('subscription.inviteLinkPrefix');
  const inviteErr = t('subscription.BindInviterErr');
  const inviteLink = `https://thegenesis.cc/mywallet?refer=${address}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert(t('subscription.copySuccess'));
    });
  };

  const handleMoreDetailsClick = () => {
    navigate('/earlybirds'); //
  };

  const handleBindInviterClick = () => {
    setIsModalOpen(true); // 打开弹窗
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
    }
  };

  useEffect(() => {
    fetchInviterAddress();
    fetchInviterList(); // 新增调用
  }, [isConnected, address, signer]);

  const handleConfirm = async () => {
    try {
      if (!signer) {
        throw new Error("Provider is not available");
      }

      const contract = new ethers.Contract(
        '0x636B03c4f2885E341E9bEE0512Fc0061cC5BAb5b',
        ['function bindInvitation(address _inviter) external'],
        signer // 使用 signer 而不是 provider
      );

      const tx = await contract.bindInvitation(inviterInput); // 调用合约方法
      await tx.wait(); // 等待交易确认

      setIsInviterBound(true); // 隐藏绑定邀请人按钮
      setInviterInput(''); // 清空输入框
      setIsModalOpen(false); // 关闭弹窗
      fetchInviterAddress(); // 重新获取邀请人地址
      fetchInviterList(); // 重新获取邀请人列表
      setErrorMessage(''); // 清空错误消息
    } catch (error) {
      console.error('Error binding inviter:', error);
      setErrorMessage(inviteErr); // 设置错误消息
    }
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
              <img src="/assets/images/genesis_r.jpg" className="w-full h-full object-cover" />
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
              {inviteLink}
            </span>
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mb-4">
            <button className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80">
              {t('subscription.timeNotStart')}
            </button>
            {/* <button className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80">
              Participate in subscription
            </button> */}
            {/* <button className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80">
              Subscribed
            </button> */}
          </div>

          {/* Description text */}
          <p className="font-medium mb-5">
            {t('subscription.presaleContent')}
          </p>
          <p className="text-blue-500 w-full mb-4 font-medium mb-5" onClick={handleMoreDetailsClick}>
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
            <ul>
              {inviterList.map((inviter, index) => (
                <li key={index}>{inviter}</li> 
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* 自定义弹窗 */}
      {isModalOpen && (
        <CustomModal onClose={handleModalClose} onConfirm={handleConfirm} errorMessage={errorMessage}>
          <input 
            type="text" 
            value={inviterInput} 
            onChange={(e) => setInviterInput(e.target.value)} 
            placeholder={t('subscription.placeholder')} 
            className="border p-2 w-full mb-4 text-white placeholder-white bg-transparent"
          />
        </CustomModal>
      )}
    </div>
  );
};

export default SubscriptionPage; 