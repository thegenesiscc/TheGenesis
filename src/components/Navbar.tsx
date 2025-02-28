import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi'; // 
import { useLocation, useNavigate } from 'react-router-dom'; // 


export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); 
  const [walletText, setWalletText] = useState('链接钱包'); 
  const { isConnected } = useAccount();
  const location = useLocation();
  const navigate = useNavigate(); // 

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {

    if (location.pathname !== '/') {
      navigate('/'); //
    }
  };

  const handleNavigation = (path) => {

    if (location.pathname !== path) {
      navigate(path); // 
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#31205c] bg-opacity-40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0" onClick={handleLogoClick}>
              <img 
                src="/assets/images/genesis_logo_t.png" 
                alt="The Genesis Logo" 
                className="h-16 cursor-pointer"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a onClick={() => handleNavigation('/')} className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.home')}</a>
              <a onClick={() => handleNavigation('/about')} className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.about')}</a>
              <a onClick={() => handleNavigation('/gameplay')} className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.how')}</a>
              {/* <a href="/subscription" className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.presale')}</a> */}
              {/* <a href="/docs" className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.docs')}</a>  */}
              <div>
                {isConnected ? (
                  <a onClick={() => handleNavigation('/subscription')} className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.mywallet')}</a>
                  // <span className="text-white">{t('nav.mywallet')}</span> 
                ) : (
                  <span className="text-white"></span> 
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            {/* <button className="text-white hover:opacity-80">
              {walletText} 
            </button> */}
            <ConnectButton />
            <button onClick={toggleDrawer} className="md:hidden">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* 抽屉菜单 */}
      {isOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-lg" onClick={toggleDrawer}>
          <div className="bg-[#31205c] rounded-lg shadow-lg w-full h-full flex flex-col relative">
            <div className="flex justify-end absolute top-4 right-4 z-10">
              <button onClick={toggleDrawer} className="text-white">
                <X />
              </button>
            </div>
            <div className="relative bg-[#31205c] flex flex-col items-center justify-start h-full w-full pt-12">
              <div className="w-full border-t border-white" />
              <a onClick={() => handleNavigation('/')} className="w-full text-lg font-normal text-white hover:opacity-80 text-center py-1 bg-[#31205c]">
                {t('nav.home')}
              </a>
              <div className="w-full border-t border-white" />
              <a onClick={() => handleNavigation('/about')} className="bg-[#31205c] w-full text-lg font-normal text-white hover:opacity-80 text-center py-1">
                {t('nav.about')}
              </a>
              <div className="w-full border-t border-white" />
              <a onClick={() => handleNavigation('/gameplay')} className="bg-[#31205c] w-full text-lg font-normal text-white hover:opacity-80 text-center py-1">
                {t('nav.how')}
              </a>
              <div className="w-full border-t border-white" />
              {/* <a href="/subscription" className="bg-[#31205c] w-full text-lg font-normal text-white hover:opacity-80 text-center py-1">
                {t('nav.presale')}
              </a>
              <div className="w-full border-t border-white" /> */}
              {/* <a href="/gameplay" className="bg-[#31205c] w-full text-lg font-normal text-white hover:opacity-80 text-center py-1">
                {t('nav.mywallet')}
              </a> */}
              <div className="bg-[#31205c] w-full flex items-center space-x-4">
                {isConnected ? (
                  <a onClick={() => handleNavigation('/subscription')} className="bg-[#31205c] w-full text-lg font-normal text-white hover:opacity-80 text-center py-1">
                    {t('nav.mywallet')}
                  </a>
                ) : (
                  <span className="text-white"></span> 
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}