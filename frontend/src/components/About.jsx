import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Coins, Layout, Network } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Custom Stablecoins",
      description: "Design your own tokens with unique names, symbols, and icons, tailored to your specific needs.",
      delay: 0.1
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Yield-Backed Security",
      description: "Your stablecoins are backed by yield-bearing stablebonds, ensuring both security and growth.",
      delay: 0.2
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "User-Friendly UI",
      description: "Create and manage your stablecoins with an intuitive interface designed for both beginners and experts.",
      delay: 0.3
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Decentralized Power",
      description: "Experience true financial freedom with our DeFi-focused approach to stablecoin creation and management.",
      delay: 0.4
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-black text-white relative py-24">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('/src/assets/heroparticle.png')`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          opacity: 0.17,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm mb-6">
            *WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionizing Stablecoin Creation
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            At Stable.fun, we empower users to create stablecoins that match the currency of their choice, 
            backed by government bonds. Dive into a new era of decentralized finance with seamless 
            yield-earning opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-lg transform-gpu"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                className="bg-gray-800/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="h-px w-12 bg-gray-800"></div>
            <span>Trusted by leading platforms in DeFi</span>
            <div className="h-px w-12 bg-gray-800"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;