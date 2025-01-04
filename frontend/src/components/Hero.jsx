import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import TokenFactory from "./TokenFactory";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["About", "Token Factory", "Mint Token", "Dashboard"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/src/assets/heroparticle.png')`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          opacity: 0.2,
        }}
      />

      {/* Navbar */}
      <motion.nav
        className={`px-6 py-4 fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-md border-b border-gray-800" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            Stable.fun <span>&trade;</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Wallet Button (Desktop) */}
          <div className="hidden md:block">
            <WalletMultiButton className="bg-white text-black hover:bg-gray-200 transition-colors" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 p-4 bg-black/70 backdrop-blur-md rounded-lg"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="mt-4">
                <WalletMultiButton className="w-full bg-white text-black hover:bg-gray-200" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm">
              *SIMPLE TRUST
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Wealth With Stable.fun{" "}
              <span className="text-muted">&trade;</span>
            </h1>
            <p className="text-gray-400">
              Create your own stablecoins backed by yield-bearing stablebonds
              and start earning today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                Get Started
              </Button>
              <Button className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="text-2xl font-bold mb-4">Tokens Created (30 Days)</div>
              <div className="h-64 flex items-end justify-between space-x-1">
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 w-full"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
