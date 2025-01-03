import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Token Factory', 'Mint Token', 'Dashboard'];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="text-xl font-bold">Stable.fun <span>&trade;</span></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a key={item} href="#" className="text-gray-300 hover:text-white">
                {item}
              </a>
            ))}
            <Button className="bg-white text-black hover:bg-gray-200">
                Connect Wallet
              </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map(item => (
              <a
                key={item}
                href="#"
                className="block py-2 text-gray-300 hover:text-white"
              >
                {item}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full border-gray-700">
                Magic Wallet
              </Button>
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm">
              *SIMPLE TRUST
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Wealth With Stable.fun <span className='text-muted'>&trade;</span>
            </h1>
            <p className="text-gray-400">
            Create your own stablecoins backed by yield-bearing stablebonds and start earning today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-black hover:bg-gray-200">
                Get Started for Free
              </Button>
              <Button variant="outline" className="border-gray-700">
                Learn More
              </Button>
            </div>
            <div className="pt-12">
              <p className="text-sm text-gray-400 mb-4">Trusted by many</p>
              <div className="flex flex-wrap gap-8 items-center opacity-50">
                <span className="font-bold">Pitch</span>
                <span className="font-bold">DATAPLANE</span>
                <span className="font-bold">Carrefour</span>
                <span className="font-bold">AUTODOC</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl">Finance Management</h3>
                <button className="text-gray-400">•••</button>
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[40, 20, 60, 30, 50, 25].map((height, i) => (
                  <div key={i} className="relative w-1/6 h-full flex items-end">
                    <div
                      className="w-full bg-gray-700"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div
                      className="w-full bg-teal-500 absolute"
                      style={{ height: `${height * 0.7}%`, opacity: 0.5 }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">8.32%</div>
                  <div className="text-green-500">+17% improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;