import React from "react";
import "../styles/ServicesSection.css";

const services = [
    {
        title: "Desenvolvimento Back-End",
        description: "Crio APIs robustas, seguras e escaláveis usando PHP, Node.js e bancos de dados relacionais e não-relacionais."
    },
    {
        title: "Integração de Sistemas",
        description: "Integro serviços de terceiros, autenticação, gateways de pagamento e automações entre plataformas."
    },
    {
        title: "Manutenção e Otimização",
        description: "Faço ajustes, correções e melhorias em sistemas existentes, com foco em performance e segurança."
    }
];

const Services = () => (
    <div className="services-cards">
        {services.map((service, idx) => (
            <div key={idx} className="card">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
            </div>
        ))}
    </div>
);

export default Services;
