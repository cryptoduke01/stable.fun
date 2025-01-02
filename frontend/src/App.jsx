import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userAddress, setUserAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleMint = async () => {
    try {
      const response = await axios.post("http://localhost:3000/mint", { userAddress, amount: parseFloat(amount) });
      alert(`Success! Transaction Signature: ${response.data.signature}`);
    } catch (error) {
      alert(`Error: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  const handleRedeem = async () => {
    try {
      const response = await axios.post("http://localhost:3000/redeem", { userAddress, amount: parseFloat(amount) });
      alert(`Success! Transaction Signature: ${response.data.signature}`);
    } catch (error) {
      alert(`Error: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Stablecoin Factory</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          placeholder="Your Wallet Address"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <div className="flex justify-between">
          <button
            onClick={handleMint}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Mint Stablecoins
          </button>
          <button
            onClick={handleRedeem}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Redeem Stablecoins
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
