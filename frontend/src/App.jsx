import React, { useState } from "react";

const App = () => {
  const [stablecoins, setStablecoins] = useState([]);
  const [form, setForm] = useState({
    name: "",
    symbol: "",
    icon: "",
    targetFiat: "",
    totalSupply: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStablecoins([...stablecoins, { ...form, totalSupply: 0 }]);
    setForm({
      name: "",
      symbol: "",
      icon: "",
      targetFiat: "",
      totalSupply: 0,
    });
  };

  const handleMint = (index) => {
    const newStablecoins = [...stablecoins];
    newStablecoins[index].totalSupply += 100; // Example minting logic
    setStablecoins(newStablecoins);
  };

  const handleRedeem = (index) => {
    const newStablecoins = [...stablecoins];
    if (newStablecoins[index].totalSupply >= 100) {
      newStablecoins[index].totalSupply -= 100; // Example redeeming logic
      setStablecoins(newStablecoins);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Stablecoin Creator</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Symbol</label>
          <input
            type="text"
            name="symbol"
            value={form.symbol}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Icon URL</label>
          <input
            type="text"
            name="icon"
            value={form.icon}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Target Fiat Currency</label>
          <input
            type="text"
            name="targetFiat"
            value={form.targetFiat}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Stablecoin
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Existing Stablecoins</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stablecoins.map((coin, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <img
              src={coin.icon}
              alt={`Icon of ${coin.name}`}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold">
              {coin.name} ({coin.symbol})
            </h3>
            <p className="text-sm">Target Fiat: {coin.targetFiat}</p>
            <p className="text-sm">Total Supply: {coin.totalSupply}</p>
            <div className="mt-4">
              <button
                onClick={() => handleMint(index)}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Mint
              </button>
              <button
                onClick={() => handleRedeem(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Redeem
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
