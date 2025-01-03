import React from "react";
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl font-extrabold mb-6">
                    Transform Your Wealth with <span className="text-blue-500">Stable.fun</span>
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                    Create your own stablecoins backed by yield-bearing stablebonds and start earning today.
                </p>
                <div className="space-x-4">
                    <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Get Started for Free
                    </Button>
                    <Button variant="outline" size="lg" className="text-gray-300 border-gray-600 hover:bg-gray-700">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;