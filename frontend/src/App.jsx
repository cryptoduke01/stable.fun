import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TokenFactory from "./components/TokenFactory";
import StablecoinsDashboard from "./components/StablecoinsDashboard";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="bg-black">
      <Analytics />
      <Hero />
      <About />
      <TokenFactory />
      <StablecoinsDashboard />
    </div>
  );
};

export default App;
