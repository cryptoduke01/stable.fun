const express = require('express');
const { Connection, PublicKey, Keypair, Transaction } = require('@solana/web3.js');
const app = express();
const port = 3000;

const connection = new Connection('https://api.testnet.solana.com', 'confirmed');

app.use(express.json());

// Mint Stablecoin Endpoint
app.post('/mint', async (req, res) => {
    const { userAddress, amount } = req.body;

    try {
        const userPublicKey = new PublicKey(userAddress);
        const mintAccount = new Keypair(); // Generate mint account (just for demo)

        // Call your Solana program's mint function here
        // For now, just a placeholder for Solana mint logic

        res.send(`Minted ${amount} stablecoins for ${userAddress}`);
    } catch (error) {
        res.status(500).send(`Error minting: ${error.message}`);
    }
});

// Redeem Stablecoin Endpoint
app.post('/redeem', async (req, res) => {
    const { userAddress, amount } = req.body;

    try {
        const userPublicKey = new PublicKey(userAddress);
        const stablecoinAccount = new Keypair(); // Get stablecoin account (just for demo)

        // Call your Solana program's redeem function here
        // For now, just a placeholder for Solana redeem logic

        res.send(`Redeemed ${amount} stablecoins for ${userAddress}`);
    } catch (error) {
        res.status(500).send(`Error redeeming: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
