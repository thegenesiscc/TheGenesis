// import React { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { TermsModal } from './components/TermsModal';
import { useTranslation } from 'react-i18next';
import HomePage from './HomePage'; // 导入 HomePage 组件
import AboutPage from './pages/TradePage';
import GamePlayPage from './pages/GamePlayPage';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Suspense ,useEffect,useState} from 'react';
import MarkdownPage from './pages/MarkdownPage';
import SubscriptionPage from './pages/SubscriptionPage';

// 为了 TypeScript 支持，需要在文件顶部添加类型声明
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

function App() {
  const [showTerms, setShowTerms] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasAcceptedTerms = localStorage.getItem('termsAccepted');
    if (!hasAcceptedTerms) {
      setShowTerms(true);
    }
  }, []);

  useEffect(() => {
    // Google Analytics 页面跟踪
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-8ESMT6VDBR', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return (

      <div className="bg-gradient-to-r from-indigo-900 via-pink-900/50 to-indigo-900 text-white">
        <Navbar />
        {/* <HomePage /> */}
        <TermsModal 
          isOpen={showTerms} 
          onClose={() => setShowTerms(false)} 
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gameplay" element={<GamePlayPage />} />
            <Route path="/earlybirds" element={<MarkdownPage />} />
            <Route path="/mywallet" element={<SubscriptionPage />} />
          </Routes>
        </Suspense>
      </div>

  );
}

export default App;