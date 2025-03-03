import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

interface CustomModalProps {
  onClose: () => void;
  onConfirm: () => void;
  errorMessage?: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ onClose, onConfirm, errorMessage, children }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#7D5FA4] bg-opacity-90 rounded-2xl max-w-xl w-full p-6">
        <h2 className="text-xl font-bold mb-4 text-white">
          {t('subscription.BindInviter')}
        </h2>

        {errorMessage && (
          <p className="text-red-500 mb-2 text-sm">
            {errorMessage}
          </p>
        )}

        <div className="space-y-3">

          {/* US Person Checkbox */}
          <div className="flex items-start gap-3 p-3 bg-[#2C2D31] rounded-lg cursor-pointer">
              {children}
          </div>
            <div className="flex justify-between">
                <button onClick={onClose} className="flex-1 bg-[#88898E] text-white px-4 py-2 rounded hover:opacity-80 mr-2"> {t('subscription.cancel')}</button>
                <button onClick={onConfirm} className="flex-1 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80">{t('subscription.confirm')}</button>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default CustomModal; 