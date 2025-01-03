const About = () => {
    return (
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">About Stable.fun</h2>
          <p className="text-gray-400 text-lg text-center mb-10">
            At Stable.fun, we empower users to create stablecoins that match the currency of their choice, backed by government bonds. Dive into a new era of decentralized finance with seamless yield-earning opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Custom Stablecoins</h3>
              <p className="text-gray-400">Design your own tokens with unique names, symbols, and icons.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Yield-Backed Security</h3>
              <p className="text-gray-400">Stablecoins are backed by yield-bearing stablebonds.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">User-Friendly UI</h3>
              <p className="text-gray-400">Create and manage your stablecoins with ease.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Decentralized Power</h3>
              <p className="text-gray-400">Embrace true financial freedom with a DeFi-focused approach.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default About;