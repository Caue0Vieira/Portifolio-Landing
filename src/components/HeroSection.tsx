import React from "react";
import Stats from "./Stats";
import ImageProfile from "./ImageProfile";
import "../styles/HeroSection.css"; // Importa o CSS

const HeroSection = () => (
    <section className="hero-section">
        <div className="hero-text">
            <h2>Olá, sou Seu Nome</h2>
            <p>Sou um desenvolvedor apaixonado por criar coisas simples e funcionais.</p>
            <Stats />
        </div>
        <div className="hero-image">
            <ImageProfile />
        </div>
    </section>
);

export default HeroSection;
