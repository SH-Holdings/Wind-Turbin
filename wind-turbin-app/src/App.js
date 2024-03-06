import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import RenewableEnergyIntro from "./RenewableEnergyIntro";
import SimpleLoadModel from "./SimpleLoadModel";
import CTAButton from "./CTAButton";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <RenewableEnergyIntro />
      <SimpleLoadModel />
      <CTAButton />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
