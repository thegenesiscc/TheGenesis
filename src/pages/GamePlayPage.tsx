import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const TradePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
       {/* Start Adventure section */}
       <div className="pt-16 bg-[url('/assets/images/gameplay.jpg')] bg-cover bg-center pt-16 pb-10">
        <div className="container mx-auto px-4 max-w-[1120px]">
        <FadeInWhenVisible>
        <h1 className="text-4xl font-medium mb-5 ">
                {t('gameplay.title')}
              </h1>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.descriptions')}</h2>
        </FadeInWhenVisible>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.chapter1.title')}</h2>
        <FadeInWhenVisible>
        <ul className="list-disc list-inside mb-4">
          <li>{t('gameplay.chapter1.description')}</li>
          <li>{t('gameplay.chapter1.description1')}</li>
        </ul>
        </FadeInWhenVisible>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.chapter2.title')}</h2>
        <FadeInWhenVisible>
        <ul className="list-disc list-inside mb-4">
          <li>{t('gameplay.chapter2.description')}</li>
          <li>{t('gameplay.chapter2.description1')}</li>
          <li>{t('gameplay.chapter2.description2')}</li>
        </ul>
        </FadeInWhenVisible>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.chapter3.title')}</h2>
        <FadeInWhenVisible>
        <ul className="list-disc list-inside mb-4">
          <li>{t('gameplay.chapter3.description')}</li>
          <li>{t('gameplay.chapter3.description1')}</li>
          <li>{t('gameplay.chapter3.description2')}</li>
        </ul>
        </FadeInWhenVisible>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.chapter4.title')}</h2>
        <FadeInWhenVisible>
        <ul className="list-disc list-inside mb-4">
          <li>{t('gameplay.chapter4.description')}</li>
          <li>{t('gameplay.chapter4.description1')}</li>
        </ul>
        </FadeInWhenVisible>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.chapter5.title')}</h2>
        <FadeInWhenVisible>
        <ul className="list-disc list-inside mb-4">
          <li>{t('gameplay.chapter5.description')}</li>
          <li>{t('gameplay.chapter5.description1')}</li>
          <li>{t('gameplay.chapter5.description2')}</li>
        </ul>
        </FadeInWhenVisible>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.chapter6.title')}</h2>
        <FadeInWhenVisible>
        <ul className="list-disc list-inside mb-4">
          <li>{t('gameplay.chapter6.description')}</li>
          <li>{t('gameplay.chapter6.description1')}</li>
          <li>{t('gameplay.chapter6.description2')}</li>
        </ul>
        </FadeInWhenVisible>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.chapter7.title')}</h2>
        <FadeInWhenVisible>
        <ul className="list-disc list-inside mb-4">
          <li>{t('gameplay.chapter7.description')}</li>
          <li>{t('gameplay.chapter7.description1')}</li>
          <li>{t('gameplay.chapter7.description2')}</li>
          <li>{t('gameplay.chapter7.description3')}</li>
        </ul>
        </FadeInWhenVisible>
        <h2 className="text-xl font-bold mb-4">{t('gameplay.conclusion')}</h2>
        </div>
      </div>
    </div>
  );
};

export default TradePage; 