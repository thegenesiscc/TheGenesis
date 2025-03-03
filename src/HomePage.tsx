import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from './components/FadeInWhenVisible'; // Import FadeInWhenVisible component
import { useNavigate } from 'react-router-dom';

import { FaTelegram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // 使用 useNavigate 钩子
  // Use array to manage the expansion state of each question
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    // If clicking on the currently expanded item, collapse it; otherwise expand that item
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleStartNow = () => {
    navigate('/mywallet'); // 跳转到 GamePlayPage
  };

  const handleLearnMore = () => {
    navigate('/about'); // 跳转到 AboutPage
  };

  return (
    <div className="min-h-screen">
      {/* Upper section - Light purple background */}
      <div className="bg-opacity-70 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-medium mb-8 ">
                {t('home.title')}
              </h1>
              <p className="text-gray-300 text-base mb-5 leading-relaxed">
                {t('home.description')}
              </p>
              <p className="text-gray-300 text-base mb-5 leading-relaxed">
                {t('home.description1')}
              </p>
              {/* New button */}
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={handleStartNow}
                  className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80"
                >
                  {t('home.toPreSale')}
                </button>
                <button 
                  onClick={handleLearnMore}
                  className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80"
                >
                  {t('home.learnMore')}
                </button>
              </div>
            </div>

            <div className="lg:w-auto flex justify-center">
              <img 
                src="/assets/images/platforminterface.jpg" 
                alt="Platform Interface" 
                className="shadow-2xl max-w-[300px] max-h-[600px] object-contain w-full h-auto rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mystery Box section */}
      <div className="bg-[#2a1954] bg-opacity-70 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInWhenVisible>
            <div className="lg:w-auto flex justify-center relative">
              <img 
                src="/assets/images/mh.jpg" 
                alt="Platform Interface" 
                className="shadow-2xl max-w-[400px] max-h-[600px] object-contain w-full h-auto rounded-[5px]"
              />
            </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <div>
              <h1 className="text-4xl font-medium mb-8 ">
                {t('mh.title')}
              </h1>
              <p className="text-gray-300 text-base mb-12 leading-relaxed">
                {t('mh.description')}
              </p>
            </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
      {/* Role Introduction section */}
      <div className="bg-opacity-70 py-20">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-medium mb-16 ">
              {t('home.features.title')}
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInWhenVisible>
              <div className="flex flex-col">
                <img src="/assets/images/decentralized-trading.jpg" alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-normal mb-2">
                  {t('home.features.decentralized.title')}
                </h3>
                <p className="text-gray-300">{t('home.features.decentralized.description')}</p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="flex flex-col">
                <img src="/assets/images/multi-asset.jpg" alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-normal mb-2">
                  {t('home.features.multiAsset.title')}
                </h3>
                <p className="text-gray-300">{t('home.features.multiAsset.description')}</p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="flex flex-col">
                <img src="/assets/images/transparency.jpg" alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-normal mb-2">
                  {t('home.features.transparency.title')}
                </h3>
                <p className="text-gray-300">{t('home.features.transparency.description')}</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
      {/* Minter section */}
      <div className="bg-[#2a1954] bg-opacity-70 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-medium mb-8 ">
                {t('mint.title')}
              </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
              <FadeInWhenVisible>
                <div className="flex flex-col">
                  <h3 className="text-lg font-normal mb-2">
                    {t('mint.mint1.title')}
                  </h3>
                  <p className="text-gray-300 w-full">{t('mint.mint1.description')}</p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className="flex flex-col">
                  <h3 className="text-lg font-normal mb-2">
                    {t('mint.mint2.title')}
                  </h3>
                  <p className="text-gray-300 w-full">{t('mint.mint2.description')}</p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className="flex flex-col">
                  <h3 className="text-lg font-normal mb-2">
                    {t('mint.mint3.title')}
                  </h3>
                  <p className="text-gray-300 w-full">{t('mint.mint3.description')}</p>
                </div>
              </FadeInWhenVisible>

          </div>
          </div>
            
            <div className="lg:w-auto flex justify-center">
              <img 
                src="/assets/images/ks.jpg" 
                alt="Platform Interface" 
                className="shadow-2xl max-w-[300px] max-h-[600px] object-contain w-full h-auto rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Community and Ecosystem section - Dark purple background */}
      <div className="bg-opacity-70 py-20">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
            
            <div className="lg:w-auto flex justify-center relative">
            <video 
              controls 
              className="shadow-2xl max-w-[500px] max-h-[600px] object-contain w-full h-auto rounded-[5px]"
            >
              <source src="/assets/videos/genesis_video.mp4" type="video/mp4" />
              您的浏览器不支持视频标签。
            </video>
            </div>
            <div>
              <h1 className="text-4xl font-medium mb-8 ">
                {t('faq.title')}
              </h1>
              <p className="text-gray-300 text-base mb-2 leading-relaxed">
                {t('faq.description')}
              </p>

              {/* First question */}
              <div>
                <p 
                  className="text-gray-300 text-base mb-2 leading-relaxed cursor-pointer" 
                  onClick={() => toggleCollapse(1)}
                >
                  {t('faq.question1')}
                </p>
                {openIndex === 1 && (
                  <p className="text-gray-300 text-base mb-2 leading-relaxed">
                    {t('faq.answer1')}
                  </p>
                )}
              </div>

              {/* Second question */}
              <div>
                <p 
                  className="text-gray-300 text-base mb-2 leading-relaxed cursor-pointer" 
                  onClick={() => toggleCollapse(2)}
                >
                  {t('faq.question2')}
                </p>
                {openIndex === 2 && (
                  <p className="text-gray-300 text-base mb-2 leading-relaxed">
                    {t('faq.answer2')}
                    <br />
                    {t('faq.answer3')}
                    <br />
                    {t('faq.answer4')}
                    <br />
                    {t('faq.answer5')}
                    <br />
                    {t('faq.answer6')}
                  </p>
                )}
              </div>
               {/* Third question */}
               <div>
                <p 
                  className="text-gray-300 text-base mb-2 leading-relaxed cursor-pointer" 
                  onClick={() => toggleCollapse(3)}
                >
                  {t('faq.question3')}
                </p>
                {openIndex === 3 && (
                  <p className="text-gray-300 text-base mb-2 leading-relaxed">
                    {t('faq.answer31')}
                    <br />
                    {t('faq.answer32')}
                    <br />
                    {t('faq.answer33')}
                    <br />
                    {t('faq.answer34')}
                    <br />
                    {t('faq.answer35')}
                    <br />
                    {t('faq.answer36')}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* Market Data and Analytics section */}
      <div className="bg-[#2a1954] bg-opacity-70 py-20">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-medium mb-16 ">
              {t('home.marketData.title')}
            </h2>
          </FadeInWhenVisible>

          <div className="relative">
            <div className="absolute left-[20px] top-[-20px] bottom-0 w-[1px] bg-[#e5e0df]/30"></div>
            
            <div className="space-y-16">
              {/* 1 - Comprehensive Data */}
              <FadeInWhenVisible>
                <div className="flex items-start">
                  <div className="relative flex items-center">
                    <div className="w-10 h-10 rounded-lg border border-[#e5e0df]/30 flex items-center justify-center text-lg font-medium bg-[#251746]">
                      1
                    </div>
                    <div className="h-[1px] w-10 bg-[#e5e0df]/30 ml-0"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-normal mb-4">
                      {t('home.marketData.comprehensive.title')}
                    </h3>
                    <p className="text-gray-300">
                      {t('home.marketData.comprehensive.description')}
                    </p>
                    <p className="text-gray-300">
                      {t('home.marketData.comprehensive.description1')}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* 2 - Advanced Analytics */}
              <FadeInWhenVisible>
                <div className="flex items-start">
                  <div className="relative flex items-center">
                    <div className="w-10 h-10 rounded-lg border border-[#e5e0df]/30 flex items-center justify-center text-lg font-medium bg-[#251746]">
                      2
                    </div>
                    <div className="h-[1px] w-10 bg-[#e5e0df]/30 ml-0"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-normal mb-4">
                      {t('home.marketData.analytics.title')}
                    </h3>
                    <p className="text-gray-300">
                      {t('home.marketData.analytics.description')}
                    </p>
                    <p className="text-gray-300">
                      {t('home.marketData.analytics.description1')}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* 3 - Customizable Dashboards */}
              <FadeInWhenVisible>
                <div className="flex items-start">
                  <div className="relative flex items-center">
                    <div className="w-10 h-10 rounded-lg border border-[#e5e0df]/30 flex items-center justify-center text-lg font-medium bg-[#251746]">
                      3
                    </div>
                    <div className="h-[1px] w-10 bg-[#e5e0df]/30 ml-0"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-normal mb-4">
                      {t('home.marketData.dashboards.title')}
                    </h3>
                    <p className="text-gray-300">
                      {t('home.marketData.dashboards.description')}
                    </p>
                    <p className="text-gray-300">
                      {t('home.marketData.dashboards.description1')}
                    </p>
                    <p className="text-gray-300">
                      {t('home.marketData.dashboards.description2')}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* 4 - Historical Data */}
              <FadeInWhenVisible>
                <div className="flex items-start">
                  <div className="relative flex items-center">
                    <div className="w-10 h-10 rounded-lg border border-[#e5e0df]/30 flex items-center justify-center text-lg font-medium bg-[#251746]">
                      4
                    </div>
                    <div className="h-[1px] w-10 bg-[#e5e0df]/30 ml-0"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-normal mb-4">
                      {t('home.marketData.historical.title')}
                    </h3>
                    <p className="text-gray-300">
                      {t('home.marketData.historical.description')}
                    </p>
                    <p className="text-gray-300">
                      {t('home.marketData.historical.description1')}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>

      {/* Start Adventure section */}
      <div className="bg-[url('/assets/images/minterbg.png')] bg-cover bg-center bg-opacity-20 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-medium mb-6 ">
              {t('features.title')}
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-normal mb-4">
                {t('features.secure.title')}
              </h3>
              <p className="text-gray-300">
                {t('features.secure.description')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-normal mb-4">
                {t('features.fast.title')}
              </h3>
              <p className="text-gray-300">
                {t('features.fast.description')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal mb-4">
                {t('features.liquidity.title')}
              </h3>
              <p className="text-gray-300">
                {t('features.liquidity.description')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal mb-4">
                {t('features.decentralized.title')}
              </h3>
              <p className="text-gray-300">
                {t('features.decentralized.description')}
              </p>
            </div>
          </div>
          </div>

          {/* Button group */}
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://x.com/TheGenesis_cc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-100 transition-colors"
            >
              <FaXTwitter className="h-8 w-8" />
            </a>
            <a
              href="https://t.me/thegenesis_group" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-100 transition-colors"
            >
              <FaTelegram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default HomePage; 