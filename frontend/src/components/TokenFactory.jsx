import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Coins, Upload, DownloadCloud, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const TokenFactory = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const cards = [
    {
      tag: "Create Token",
      title: "Get\nStable Tokens",
      description: "Create your own stablecoins backed by yield-bearing bonds",
      image: <Coins className="w-16 h-16 text-gray-400" />,
      className: "md:col-span-1"
    },
    {
      tag: "Mint",
      title: "Secure\nWith Bonds",
      description: "Mint new tokens based on your bond deposits",
      image: <Upload className="w-16 h-16 text-gray-400" />,
      className: "md:col-span-1"
    },
    {
      tag: "Growth Series",
      title: "Growth with\nNew Series",
      description: "With our forward-thinking approach brings a whole new area for a new series!",
      image: "STABLE.FUN",
      className: "md:col-span-2 relative overflow-hidden"
    },
    {
      tag: "Ecosystem",
      title: "Join\nThe Ecosystem",
      description: "Move your financial transactions across different protocols",
      image: <Globe className="w-16 h-16 text-gray-400" />,
      className: "md:col-span-1"
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Row - Two Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 aspect-[1.7/1] relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedModal("Create Token")}
          >
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-gray-800 rounded-full text-xs mb-4">
                + Create Token
              </span>
              <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">
                Get<br />Stable Tokens
              </h3>
              <p className="text-gray-400 max-w-[80%]">
                Create your own stablecoins backed by yield-bearing bonds
              </p>
              <motion.div
                className="absolute bottom-6 right-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Coins className="w-16 h-16 text-gray-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 aspect-[1.7/1] relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedModal("Mint")}
          >
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-gray-800 rounded-full text-xs mb-4">
                + Mint
              </span>
              <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">
                Secure<br />With Bonds
              </h3>
              <p className="text-gray-400 max-w-[80%]">
                Mint new tokens based on your bond deposits
              </p>
              <motion.div
                className="absolute bottom-6 right-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Upload className="w-16 h-16 text-gray-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Third and Fourth Row - Same Line */}
          <div className="md:col-span-2 flex gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 w-full aspect-[2.5/1] relative overflow-hidden group cursor-pointer"
              
            >
              <div className="grid grid-cols-2 h-full">
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1 bg-gray-800 rounded-full text-xs mb-4">
                    + New Series
                  </span>
                  <h3 className="text-2xl font-bold mb-4">
                    Growth with<br />New Series
                  </h3>
                  <p className="text-gray-400">
                    With our forward-thinking approach brings<br />
                    a whole new area for a new series!
                  </p>
                </div>
                <div className="relative flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-700">STABLE.FUN</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 w-full sm:w-[45%] relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedModal("Ecosystem")}
            >
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-gray-800 rounded-full text-xs mb-4">
                  + Ecosystem
                </span>
                <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">
                  Join<br />The Ecosystem
                </h3>
                <p className="text-gray-400 max-w-[80%]">
                  Move your financial transactions across different protocols
                </p>
                <motion.div
                  className="absolute bottom-6 right-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Globe className="w-16 h-16 text-gray-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal Content (same as before) */}
      <AnimatePresence>
        {selectedModal && (
          <Dialog open={true} onOpenChange={() => setSelectedModal(null)}>
            <DialogContent className="bg-gray-900/95 backdrop-blur-xl border-gray-800 text-white">
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
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Create Token
                    </Button>
                  </>
                )}

                {/* Add similar form content for other modals */}
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>

  );
};

export default TokenFactory;