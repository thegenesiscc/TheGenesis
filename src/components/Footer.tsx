import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        
        <div className="border-t border-indigo-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © 2025 {t('footer.rights')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 