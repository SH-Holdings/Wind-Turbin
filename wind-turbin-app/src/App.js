import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBars/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/Us/AboutUs";
import RenewableEnergyIntro from "./components/Introductions/RenewableEnergyIntro";
import SimpleLoadModel from "./components/Analysis/SimpleLoadModel";
import ContactUs from "./components/Us/ContactUs";
// import Footer from "./Footers/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for activating section, you can adjust it
      const sectionThreshold = 150;
      // Sections with their IDs
      const sections = [
        { id: "hero", ref: document.getElementById("hero") },
        { id: "about-us", ref: document.getElementById("about-us") },
        {
          id: "renewable-energy-intro",
          ref: document.getElementById("renewable-energy-intro"),
        },
        { id: "slm-analysis", ref: document.getElementById("slm-analysis") },
        { id: "cta-button", ref: document.getElementById("cta-button") },
        { id: "contact-us", ref: document.getElementById("contact-us") },
        { id: "footer", ref: document.getElementById("footer") },
      ];

      const currentSection = sections.find((section) => {
        if (!section.ref) return false;
        const { top } = section.ref.getBoundingClientRect();
        return top <= sectionThreshold && top >= sectionThreshold * -1;
      });

      if (currentSection && activeSection !== currentSection.id) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <>
      <div>
        <Navbar activeSection={activeSection} />
      </div>
      <div>
        <Hero id="hero" />
        <AboutUs id="about-us" />
        <RenewableEnergyIntro id="renewable-energy-intro" />
        <SimpleLoadModel id="slm-analysis" />
        <ContactUs id="contact-us" />
      </div>
    </>
  );
}

export default App;
