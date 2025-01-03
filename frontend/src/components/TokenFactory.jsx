import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Coins, Upload, Globe, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const TokenFactory = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [previousTokens, setPreviousTokens] = useState([
    { 
      name: "USD Stable", 
      symbol: "USDS", 
      icon: "🔵",
      targetCurrency: "USD",
      totalSupply: "1,000,000"
    }
  ]);

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD"];

  const cards = [
    {
      tag: "Create Token",
      title: "Get\nStable Tokens",
      description: "Create your own stablecoins backed by yield-bearing bonds",
      image: <Coins className="w-16 h-16 text-gray-400" />,
    },
    {
      tag: "Mint",
      title: "Secure\nWith Bonds",
      description: "Mint new tokens based on your bond deposits",
      image: <Upload className="w-16 h-16 text-gray-400" />,
    },
    {
      tag: "Growth Series",
      title: "Growth with\nNew Series",
      description: "With our forward-thinking approach brings a whole new area for a new series!",
      image: "STABLE.FUN",
    },
    {
      tag: "Ecosystem",
      title: "Join\nThe Ecosystem",
      description: "Move your financial transactions across different protocols",
      image: <Globe className="w-16 h-16 text-gray-400" />,
    }
  ];

  // Card component with consistent styling
  const DashboardCard = ({ tag, title, description, image, onClick, className }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 relative overflow-hidden group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative z-10">
        <span className="inline-block px-4 py-1 bg-gray-800 rounded-full text-xs mb-4">
          {tag}
        </span>
        <h3 className="text-xl md:text-2xl font-bold mb-4 whitespace-pre-line">
          {title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base max-w-[80%]">
          {description}
        </p>
        {typeof image === 'string' ? (
          <div className="absolute bottom-6 right-6 text-2xl md:text-4xl font-bold text-gray-700">
            {image}
          </div>
        ) : (
          <motion.div
            className="absolute bottom-6 right-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {image}
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-black text-white relative py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Stablecoin Factory
        </h2>

        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <DashboardCard {...cards[0]} onClick={() => setSelectedModal("Create Token")} />
            <DashboardCard {...cards[1]} onClick={() => setSelectedModal("Mint")} />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8">
              <DashboardCard {...cards[2]} />
            </div>
            <div className="md:col-span-4">
              <DashboardCard {...cards[3]} onClick={() => setSelectedModal("Ecosystem")} />
            </div>
          </div>

          {/* Previous Tokens Section
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Your Stablecoins</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {previousTokens.map((token, index) => (
                <Card key={index} className="bg-gray-900/80 backdrop-blur-sm border-gray-800 p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{token.icon}</span>
                    <div>
                      <h4 className="font-bold">{token.name}</h4>
                      <p className="text-sm text-gray-400">{token.symbol}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Target: {token.targetCurrency}</p>
                    <p className="text-sm text-gray-400">Supply: {token.totalSupply}</p>
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline" className="w-1/2">Mint</Button>
                      <Button size="sm" variant="outline" className="w-1/2">Redeem</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Enhanced Modal Content */}
      <AnimatePresence>
        {selectedModal && (
          <Dialog open={true} onOpenChange={() => setSelectedModal(null)}>
            <DialogContent className="bg-gray-900/95 backdrop-blur-xl border-gray-800 text-white max-w-md mx-auto">
              <DialogHeader>
                <DialogTitle>{selectedModal}</DialogTitle>
                <Button
                  variant="ghost"
                  className="absolute right-4 top-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedModal(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </DialogHeader>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="space-y-6 pt-4"
              >
                {selectedModal === "Create Token" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Token Name
                      </label>
                      <Input
                        placeholder="e.g., My Stable Token"
                        className="bg-black/50 border-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Token Symbol
                      </label>
                      <Input
                        placeholder="e.g., MST"
                        className="bg-black/50 border-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Token Icon
                      </label>
                      <div className="flex gap-4">
                        <Button variant="outline" className="w-full">
                          <ImageIcon className="w-4 h-4 mr-2" />
                          Upload Icon
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Target Fiat Currency
                      </label>
                      <Select>
                        <SelectTrigger className="bg-black/50 border-gray-800">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          {currencies.map((currency) => (
                            <SelectItem key={currency} value={currency}>
                              {currency}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Initial Supply
                      </label>
                      <Input
                        type="number"
                        placeholder="e.g., 1000000"
                        className="bg-black/50 border-gray-800"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Create Stablecoin
                    </Button>
                  </>
                )}
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TokenFactory;