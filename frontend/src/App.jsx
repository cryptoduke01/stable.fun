import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TokenFactory from "./components/TokenFactory";
import StablecoinsDashboard from "./components/StablecoinsDashboard";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

const App = () => {
  const wallets = [new PhantomWalletAdapter()];

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <div className="bg-black">
          <Analytics />
          <Hero />
          <About />
          <TokenFactory />
          <StablecoinsDashboard />
          <Footer />
        </div>
      </WalletModalProvider>
    </WalletProvider>
  );
};

export default App;
