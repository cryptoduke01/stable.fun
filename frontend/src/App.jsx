import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TokenFactory from "./components/TokenFactory";

const App = () => {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <TokenFactory />
    </div>
  );
};

export default App;
