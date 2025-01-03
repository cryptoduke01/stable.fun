import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { DollarSign, Euro, PoundSterling } from 'lucide-react';

const StablecoinsDashboard = () => {
  // Sample data for stablecoins
  const stablecoins = [
    {
      name: 'USD Stable',
      symbol: 'USDS',
      icon: DollarSign,
      fiat: 'USD',
      totalSupply: '1,000,000',
      change: '+12.5%',
      isPositive: true
    },
    {
      name: 'Euro Stable',
      symbol: 'EURS',
      icon: Euro,
      fiat: 'EUR',
      totalSupply: '750,000',
      change: '+8.3%',
      isPositive: true
    },
    {
      name: 'Pound Stable',
      symbol: 'GBPS',
      icon: PoundSterling,
      fiat: 'GBP',
      totalSupply: '500,000',
      change: '-2.1%',
      isPositive: false
    },
    {
      name: 'Yen Stable',
      symbol: 'JPYS',
      icon: Euro,
      fiat: 'JPY',
      totalSupply: '100,000,000',
      change: '+5.7%',
      isPositive: true
    }
  ];

  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm mb-4">
            LIVE STABLECOINS
          </div>
          <h2 className="text-3xl font-bold mb-4">Active Stablecoins</h2>
          <p className="text-gray-400">Track all stablecoins created through our platform</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stablecoins.map((coin, index) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <coin.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">{coin.name}</h3>
                    <span className="text-sm text-gray-400">{coin.symbol}</span>
                  </div>
                </div>
                <div className={`text-sm ${coin.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.change}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Total Supply</div>
                  <div className="text-xl font-bold">{coin.totalSupply}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Target Currency</div>
                  <div className="text-md font-medium">{coin.fiat}</div>
                </div>
                <div className="pt-4">
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-colors text-white">
            View All Stablecoins
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StablecoinsDashboard;