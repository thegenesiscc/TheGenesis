import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const SubscriptionPage = () => {
  const { t } = useTranslation();
  const { isConnected, address } = useAccount();
  const navigate = useNavigate();

  const inviteLinkPrefix = t('subscription.inviteLinkPrefix');
  const inviteLink = `https://thegenesis.cc/invite?refer=${address}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert(t('subscription.copySuccess'));
    });
  };

  const handleMoreDetailsClick = () => {
    navigate('/earlybrids'); // 跳转到 earlybirds 路由
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ConnectButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex pt-24 justify-center">
      <div className="max-w-[1120px] w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-start px-4 py-8">
          {/* 头像和钱包地址部分 */}
          <div className="flex items-start mb-4">
            {/* 头像部分 */}
            <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mr-4 overflow-hidden">
              <img src="/assets/images/genesis_r.jpg"  className="w-full h-full object-cover" />
            </div>
            {/* 钱包地址 */}
            <div className="flex flex-col">
              <span className="font-medium mb-4 pt-4">{t('subscription.walletAddress')}</span>
              <p className="font-medium mb-4">{address}</p>
            </div>
            
          </div>

          {/* 分享链接 */}
          <p className="font-medium mb-5">
            {inviteLinkPrefix}
            <span 
              onClick={copyToClipboard} 
              className="text-blue-500 cursor-pointer"
            >
              {inviteLink}
            </span>
          </p>

          {/* 按钮 */}
          <div className="flex space-x-4 mb-4">
            <button className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80">
              参与认购
            </button>
            {/* <button className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80">
              已认购
            </button> */}
          </div>

          {/* 说明文字 */}
          <p className="font-medium mb-5">
            {t('subscription.presaleContent')}
          </p>
          <p className="text-blue-500 w-full mb-4 font-medium mb-5" onClick={handleMoreDetailsClick}>
            {t('subscription.moreinfo')}
          </p>
        </div>

        {/* 右侧内容 - 我的邀请列表 */}
        <div className="w-full md:w-1/2 px-4 py-8">
          <h2 className="text-xl font-bold mb-2 text-left">{t('subscription.myInviteList')}</h2>
          <p className="text-gray-400 w-full mb-4">{t('subscription.description')}</p>
          <p className=" mb-4">{t('subscription.listdefualt')}</p>
          {/* 
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-right">邀请人</th>
                <th className="border border-gray-300 px-4 py-2 text-right">状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-right">用户1</td>
                <td className="border border-gray-300 px-4 py-2 text-right">已认购</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-right">用户2</td>
                <td className="border border-gray-300 px-4 py-2 text-right">待认购</td>
              </tr>
            </tbody>
          </table>
          */}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage; 