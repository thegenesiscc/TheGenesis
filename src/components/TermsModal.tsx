import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const { t } = useTranslation();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [notUSPerson, setNotUSPerson] = useState(false);

  const handleAgree = () => {
    if (termsAccepted && notUSPerson) {
      localStorage.setItem('termsAccepted', 'true');
      onClose();
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#7D5FA4] bg-opacity-90 rounded-2xl max-w-xl w-full p-6">
        <h2 className="text-xl font-bold mb-4 text-white">
          {t('modal.terms.title')}
        </h2>
        
        <p className="text-gray-200 mb-4 text-sm">
          {t('modal.terms.description')}
        </p>

        <div className="space-y-3">
          {/* Terms Checkbox */}
          <div 
            className="flex items-start gap-3 p-3 bg-[#2C2D31] rounded-lg cursor-pointer"
            onClick={() => setTermsAccepted(!termsAccepted)}
          >
            <div className={`mt-0.5 flex-shrink-0 ${termsAccepted ? 'text-green-500' : 'text-gray-600'}`}>
              <CheckCircle2 size={18} />
            </div>
            <div className="text-gray-300 text-sm">
              <Trans
                i18nKey="modal.terms.agreement"
                components={{
                  terms: (
                    <a
                      // href="/terms"
                      className="text-blue-400 hover:underline"
                      onClick={handleLinkClick}
                    />
                  ),
                  privacy: (
                    <a
                      // href="/privacy"
                      className="text-blue-400 hover:underline"
                      onClick={handleLinkClick}
                    />
                  ),
                }}
              />
            </div>
          </div>

          {/* US Person Checkbox */}
          <div 
            className="flex items-start gap-3 p-3 bg-[#2C2D31] rounded-lg cursor-pointer"
            onClick={() => setNotUSPerson(!notUSPerson)}
          >
            <div className={`mt-0.5 flex-shrink-0 ${notUSPerson ? 'text-green-500' : 'text-gray-600'}`}>
              <CheckCircle2 size={18} />
            </div>
            <div className="text-gray-300 text-sm">
              {t('modal.terms.notUsPerson')}
            </div>
          </div>
        </div>

        <button
          onClick={handleAgree}
          disabled={!termsAccepted || !notUSPerson}
          className={`w-full mt-6 py-3 rounded-xl text-white text-base
            ${termsAccepted && notUSPerson 
              ? 'bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 text-white px-4 py-2 rounded hover:opacity-80' 
              : 'bg-[#88898E] cursor-not-allowed'
            }`}
        >
          {t('modal.terms.agreeButton')}
        </button>
      </div>
    </div>
  ) : null;
} 