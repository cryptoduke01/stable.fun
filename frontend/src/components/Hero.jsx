import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import TokenFactory from "./TokenFactory";

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTokenCreator, setShowTokenCreator] = useState(false);
    const navItems = ["About", "Token Factory", "Mint Token", "Dashboard"];
    const { publicKey, connected } = useWallet(); // Wallet connection status

    const tokenData = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 50) + 10
    );

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Show TokenCreator on button click */}
            {showTokenCreator && <TokenCreator />}

          
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `url('/src/assets/heroparticle.png')`,
                    backgroundSize: "200px 200px",
                    backgroundRepeat: "repeat",
                    opacity: 0.17, // Reduce opacity for subtle effect
                }}
            />
            <motion.nav
                className={`px-6 py-4 fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-black/50 backdrop-blur-md border-b border-gray-800"
                    : ""
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

                    <div className="hidden md:flex items-center justify-center flex-1 px-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                key={item}
                                href="#"
                                className="mx-4 text-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:block"
                    >
                        {/* Wallet connection button */}
                        <WalletMultiButton className="bg-white text-black hover:bg-gray-200 transition-colors" />
                    </motion.div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="block py-2 text-gray-300 hover:text-white"
                            >
                                {item}
                            </a>
                        ))}
                        <div className="mt-4">
                            <WalletMultiButton className="w-full bg-white text-black hover:bg-gray-200" />
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
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
                            <Button
                                variant="outline"
                                className="border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-colors text-black hover:text-white"
                            >
                                Get Started
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-colors text-black hover:text-white"
                            >
                                Learn More
                            </Button>
                        </div>
                        <div className="pt-12">
                            <p className="text-sm text-gray-400 mb-4">Trusted by many</p>
                            <div className="flex flex-wrap gap-8 items-center opacity-50">
                                <span className="font-bold">Etherfuse</span>
                                <span className="font-bold">The Kingsmen</span>
                                <span className="font-bold">Stablebonds</span>
                                <span className="font-bold">AUTODOC</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold">
                                    Tokens Created (30 Days)
                                </h3>
                            </div>
                            <div className="h-64 flex items-end justify-between space-x-1">
                                {tokenData.map((height, i) => (
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ delay: i * 0.02 }}
                                        key={i}
                                        className="relative w-full h-full flex items-end"
                                    >
                                        <div
                                            className="w-full bg-gray-800"
                                            style={{ height: `${height}%` }}
                                        ></div>
                                        <div
                                            className="w-full bg-gray-600 absolute bottom-0"
                                            style={{
                                                height: `${height * 0.7}%`,
                                                opacity: 0.5,
                                            }}
                                        ></div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div>
                                    <div className="text-xl font-bold">247 Tokens Created</div>
                                </div>
                                <div className="text-green-500 text-xl">+24% this month</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
