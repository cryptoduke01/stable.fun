import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TokenFactory from "./components/TokenFactory";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="bg-black">
      <Analytics />
      <Hero />
      <About />
      <TokenFactory />
    </div>
  );
};

export default App;
