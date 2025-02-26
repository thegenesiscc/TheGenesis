import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const TradePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
       {/* Start Adventure section */}
       <div className="pt-16 bg-[url('/assets/images/gameplay.jpg')] bg-cover bg-center pt-16 pb-10">
       {/* <div className="bg-[url('/assets/images/gameplay.jpg')] bg-opacity-70 pt-16 pb-20"> */}
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="grid grid-cols-1 items-center">
            <div>
              <h1 className="text-4xl font-medium mb-5 ">
                {t('gameplay.title')}
              </h1>
              <p className="text-xl font-medium mb-5 ">
                {t('gameplay.descriptions')}
              </p>
              <p className="text-2xl font-medium mb-2 ">
                {t('gameplay.chapter1.title')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter1.description')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter1.description1')}
              </p>
              <p className="text-2xl font-medium mb-2 ">
                {t('gameplay.chapter2.title')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter2.description')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter2.description1')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter2.description2')}
              </p>
              <p className="text-2xl font-medium mb-2 ">
                {t('gameplay.chapter3.title')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter3.description')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter3.description1')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter3.description2')}
              </p>
              <p className="text-2xl font-medium mb-2 ">
                {t('gameplay.chapter4.title')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter4.description')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter4.description1')}
              </p>
              <p className="text-2xl font-medium mb-2 ">
                {t('gameplay.chapter5.title')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter5.description')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter5.description1')}
              </p>
              <p className="text-2xl font-medium mb-2 ">
                {t('gameplay.chapter6.title')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter6.description')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter6.description1')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter6.description2')}
              </p>
              <p className="text-2xl font-medium mb-2 ">
                {t('gameplay.chapter7.title')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter7.description')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter7.description1')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter7.description2')}
              </p>
              <p className="text-gray-100 text-base mb-2 leading-relaxed">
                {t('gameplay.chapter7.description3')}
              </p>
              <p className="text-xl font-medium ">
                {t('gameplay.conclusion')}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePage; 