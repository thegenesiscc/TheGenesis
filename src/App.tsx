// import React { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { TermsModal } from './components/TermsModal';
import { useTranslation } from 'react-i18next';
import HomePage from './HomePage'; // 导入 HomePage 组件
import TradePage from './pages/TradePage';
import { Routes, Route } from 'react-router-dom';
import { Suspense ,useEffect,useState} from 'react';

function App() {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const hasAcceptedTerms = localStorage.getItem('termsAccepted');
    if (!hasAcceptedTerms) {
      setShowTerms(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-900 via-pink-900/50 to-indigo-900 text-white">
      <Navbar />
      <HomePage />
      {/* <TermsModal 
        isOpen={showTerms} 
        onClose={() => setShowTerms(false)} 
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trade" element={<TradePage />} />
        </Routes>
      </Suspense> */}
    </div>
  );
}

export default App;