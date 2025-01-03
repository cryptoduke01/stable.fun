const TokenFactory = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Token Factory</h2>
                <p className="text-gray-400 text-lg mb-10">
                    Our Token Factory allows you to mint, manage, and redeem stablecoins effortlessly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Create Stablecoins</h3>
                        <p className="text-gray-400">Set your desired token name, symbol, and target fiat currency.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Mint Tokens</h3>
                        <p className="text-gray-400">Mint new tokens based on yield-bearing stablebonds with ease.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Redeem & Earn</h3>
                        <p className="text-gray-400">Redeem tokens for yield, ensuring liquidity and returns.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenFactory;