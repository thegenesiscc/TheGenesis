import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const TradePage = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('buy'); // 'buy' or 'sell'
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 max-w-[1120px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Trading Chart */}
          <div className="lg:col-span-2 bg-[#2a1954] rounded-lg p-6">
            <FadeInWhenVisible>
              <h2 className="text-2xl font-medium mb-4">{t('trade.chart.title')}</h2>
              <div className="h-[400px] bg-[#251746] rounded-lg flex items-center justify-center">
                {/* Trading chart will be integrated here */}
                <p className="text-gray-400">{t('trade.chart.comingSoon')}</p>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right Panel - Trading Interface */}
          <div className="bg-[#2a1954] rounded-lg p-6">
            <FadeInWhenVisible>
              <div className="flex mb-6">
                <button
                  className={`flex-1 py-2 rounded-l-lg ${
                    selectedTab === 'buy'
                      ? 'bg-green-500 text-white'
                      : 'bg-[#251746] text-gray-400'
                  }`}
                  onClick={() => setSelectedTab('buy')}
                >
                  {t('trade.buy')}
                </button>
                <button
                  className={`flex-1 py-2 rounded-r-lg ${
                    selectedTab === 'sell'
                      ? 'bg-red-500 text-white'
                      : 'bg-[#251746] text-gray-400'
                  }`}
                  onClick={() => setSelectedTab('sell')}
                >
                  {t('trade.sell')}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {t('trade.amount')}
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-[#251746] rounded-lg p-3 text-white"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {t('trade.price')}
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-[#251746] rounded-lg p-3 text-white"
                    placeholder="0.00"
                  />
                </div>

                <div className="pt-4">
                  <button
                    className={`w-full py-3 rounded-lg ${
                      selectedTab === 'buy'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-red-500 hover:bg-red-600'
                    } text-white font-medium transition-colors`}
                  >
                    {selectedTab === 'buy' ? t('trade.placeBuy') : t('trade.placeSell')}
                  </button>
                </div>
              </div>

              {/* Market Information */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-lg mb-4">{t('trade.marketInfo')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('trade.lastPrice')}</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('trade.24hChange')}</span>
                    <span className="text-green-500">+0.00%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('trade.24hVolume')}</span>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="mt-8 bg-[#2a1954] rounded-lg p-6">
          <FadeInWhenVisible>
            <h2 className="text-2xl font-medium mb-4">{t('trade.recentTrades')}</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400">
                    <th className="text-left py-3">{t('trade.time')}</th>
                    <th className="text-left py-3">{t('trade.type')}</th>
                    <th className="text-left py-3">{t('trade.price')}</th>
                    <th className="text-left py-3">{t('trade.amount')}</th>
                    <th className="text-left py-3">{t('trade.total')}</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {/* Sample trade data - Replace with real data */}
                  <tr>
                    <td className="py-2">12:30:45</td>
                    <td className="text-green-500">Buy</td>
                    <td>$0.00</td>
                    <td>0.00</td>
                    <td>$0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default TradePage; 