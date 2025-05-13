import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import LatestWork from "./components/LatestWork";
import ProjetosCards from "./components/ProjetosCards";
const App = () => {
    return (
        <div className="app">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <LatestWork />
            <ProjetosCards/>
        </div>
    );
};

export default App;
