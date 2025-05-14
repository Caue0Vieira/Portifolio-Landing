import Services from "./Services";
import "../styles/ServicesSection.css";

const ServicesSection = () => (
    <section className="services-section">
        <div className="services-left">
            <Services />
        </div>
        <div className="services-right">
            <h3>Mais sobre mim</h3>
            <p>
                Desde o início da minha jornada como desenvolvedor, já trabalhei com diversas
                tecnologias e times ao redor do mundo. Tenho uma forte paixão por resolver
                problemas e transformar ideias em produtos reais. Sou curioso por natureza e
                estou sempre buscando aprender algo novo.
            </p>
        </div>
    </section>
);

export default ServicesSection;
   