import React from 'react';
import { useTranslation } from 'react-i18next';

const MarkdownPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full flex pt-24 justify-center">
      <div className="max-w-[1120px] w-full flex flex-col px-4 py-6">
        <h2 className="text-xl font-bold mb-4">{t('md.activityBackgroundTitle')}</h2>
        <p className="mb-4">{t('md.activityBackgroundContent')}</p>

        <h2 className="text-xl font-bold mb-4">{t('md.activityDetailsTitle')}</h2>
        <h3 className="text-lg font-semibold mb-2">{t('md.qualificationAndQuantityTitle')}</h3>
        <ul className="list-disc list-inside mb-4">
          <li>{t('md.qualificationAndQuantity1')}</li>
          <li>{t('md.qualificationAndQuantity2')}</li>
          <li>{t('md.qualificationAndQuantity3')}</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">{t('md.subscriptionFeeTitle')}</h3>
        <p className="mb-4">{t('md.subscriptionFeeContent')}</p>

        <h3 className="text-lg font-semibold mb-2">{t('md.benefitsAfterSubscriptionTitle')}</h3>
        <ul className="list-disc list-inside mb-4">
          <li>{t('md.benefit1')}</li>
          <li>{t('md.benefit2')}</li>
          <li>{t('md.benefit3')}</li>
          <li>{t('md.benefit4')}</li>
        </ul>

        <h2 className="text-xl font-bold mb-4">{t('md.activityTimeTitle')}</h2>
        <ul className="list-disc list-inside mb-4">
          <li>{t('md.activityTimeStart')}</li>
          <li>{t('md.activityTimeEnd')}</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">{t('md.activityContent')}</h2>
      </div>
    </div>
  );
};

export default MarkdownPage; 