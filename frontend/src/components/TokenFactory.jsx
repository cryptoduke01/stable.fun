import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Coins, Upload, Globe, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DashboardCard from "./DashboardCard"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast"
(async () => {
  const { StablebondProgram } = await import("@etherfuse/stablebond-sdk");
  console.log(StablebondProgram);
})();

import { useWallet } from "@solana/wallet-adapter-react";

const TokenFactory = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenIcon, setTokenIcon] = useState(null);
  const [targetCurrency, setTargetCurrency] = useState("");
  const [initialSupply, setInitialSupply] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { publicKey, connected } = useWallet();
  const { toast } = useToast();

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD"];

  const createToken = async () => {
    if (!connected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet first.",
        variant: "destructive",
      });
      return;
    }

    if (!tokenName || !tokenSymbol || !targetCurrency || !initialSupply) {
      toast({
        title: "Input Missing",
        description: "Please provide all token details.",
        variant: "warning",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Initialize Stablebond Program
      const stablebondProgram = new StablebondProgram("RPC_ENDPOINT", publicKey);

      // Create stablecoin using the Stablebond Program
      const stablecoin = await stablebondProgram.mintBond({
        stablebondAddress: "BOND_ADDRESS",
        uiAmount: parseFloat(initialSupply),
      });

      toast({
        title: "Stablecoin Created",
        description: `Your stablecoin ${tokenName} (${tokenSymbol}) has been created!`,
        variant: "success",
      });

      // Reset inputs after successful creation
      setTokenName("");
      setTokenSymbol("");
      setTargetCurrency("");
      setInitialSupply("");
      setTokenIcon(null);
    } catch (error) {
      toast({
        title: "Error",
        description: `There was an error creating your stablecoin: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

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
    },
  ];

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
                        value={tokenName}
                        onChange={(e) => setTokenName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Token Symbol
                      </label>
                      <Input
                        placeholder="e.g., MST"
                        className="bg-black/50 border-gray-800"
                        value={tokenSymbol}
                        onChange={(e) => setTokenSymbol(e.target.value)}
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
                      <Select
                        value={targetCurrency}
                        onValueChange={setTargetCurrency}
                      >
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
                        value={initialSupply}
                        onChange={(e) => setInitialSupply(e.target.value)}
                      />
                    </div>
                    <Button
                      onClick={createToken}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Creating..." : "Create Stablecoin"}
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
