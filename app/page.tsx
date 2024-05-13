import React from "react";
import Navbar from "./_components/Navbar";
import HomePage from "./_components/HomePage";
import Footer from "./_components/Footer";
import Particles from "./_components/particles";
const app = () => {
  return (
    <div className="">
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={60}
      />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default app;
