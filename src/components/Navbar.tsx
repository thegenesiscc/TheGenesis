import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#31205c] bg-opacity-40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <img 
                src="/assets/images/genesis_logo_t.png" 
                alt="The Genesis Logo" 
                className="h-16"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.home')}</a>
              <a href="/trade" className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.trade')}</a>
              <a href="/stake" className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.stake')}</a>
              <a href="/docs" className="text-lg font-normal text-white bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 bg-clip-text text-transparent hover:opacity-80">{t('nav.docs')}</a> 
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            {/* <button className="bg-blue-600 px-4 py-2 rounded-full">
              {t('wallet.connect')}
            </button> */}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Products</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Developers</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Governance</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Resources</a>
          </div>
        </div>
      )}
    </nav>
  );
}