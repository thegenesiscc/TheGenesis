import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const TradePage = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('buy'); // 'buy' or 'sell'
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="min-h-screen pt-16">
       {/* Start Adventure section */}
       <div className="bg-[url('/assets/images/chapter1.jpg')] bg-cover bg-center bg-opacity-20 pt-12 pb-20">
        <FadeInWhenVisible>
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-medium mb-6 ">
              {t('trade.story.title')}
            </h2>
            <h4 className="text-2xl font-medium mb-6 ">
              {t('trade.story.chapter1.title')}
            </h4>
            <p>
              {t('trade.story.chapter1.description')}
            </p>
            <p>
              {t('trade.story.chapter1.description1')}
            </p>
          </div>
        </div>
        </FadeInWhenVisible>
      </div>
      <div className="bg-[url('/assets/images/minterbg.png')] bg-cover bg-center bg-opacity-20 pt-12 pb-20">
       <FadeInWhenVisible>
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="max-w-4xl">
            <h4 className="text-2xl font-medium mb-6 ">
              {t('trade.story.chapter2.title')}
            </h4>
            <p>
              {t('trade.story.chapter2.description')}
            </p>
            <p>
              {t('trade.story.chapter2.description1')}
            </p>
            <p>
              {t('trade.story.chapter2.description2')}
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
      </div>
      <div className="bg-[url('/assets/images/minterbg.png')] bg-cover bg-center bg-opacity-20 pt-12 pb-20">
       <FadeInWhenVisible>
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="max-w-4xl">
            <h4 className="text-2xl font-medium mb-6 ">
              {t('trade.story.chapter3.title')}
            </h4>
            <p>
              {t('trade.story.chapter3.description')}
            </p>
            <p>
              {t('trade.story.chapter3.description1')}
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
      </div>
      <div className="bg-[url('/assets/images/minterbg.png')] bg-cover bg-center bg-opacity-20 pt-12 pb-20">
       <FadeInWhenVisible>
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="max-w-4xl">
            <h4 className="text-2xl font-medium mb-6 ">
              {t('trade.story.chapter4.title')}
            </h4>
            <p>
              {t('trade.story.chapter4.description')}
            </p>
            <p>
              {t('trade.story.chapter4.description1')}
            </p>
            <p>
              {t('trade.story.chapter4.description2')}
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
      </div>
      <div className="bg-[url('/assets/images/minterbg.png')] bg-cover bg-center bg-opacity-20 pt-12 pb-20">
       <FadeInWhenVisible>
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="max-w-4xl">
            <h4 className="text-2xl font-medium mb-6 ">
              {t('trade.story.chapter5.title')}
            </h4>
            <p>
              {t('trade.story.chapter5.description')}
            </p>
            <p>
              {t('trade.story.chapter5.description1')}
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
      </div>
      <div className="bg-[url('/assets/images/minterbg.png')] bg-cover bg-center bg-opacity-20 pt-12 pb-20">
       <FadeInWhenVisible>
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="max-w-4xl">
            <h4 className="text-2xl font-medium mb-6 ">
              {t('trade.story.chapter6.title')}
            </h4>
            <p>
              {t('trade.story.chapter6.description')}
            </p>
            <p>
              {t('trade.story.chapter6.description1')}
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default TradePage; 