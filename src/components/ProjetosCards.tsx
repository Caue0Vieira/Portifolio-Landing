import projetos from "../data/projetos";
import "../styles/Projetos.css";


const ProjetosCard = () => (
    <section className="section-projetos">
        <h3>Projetos</h3>
        <div className="projetos-grid">
            {projetos.map((proj) => (
                <div key={proj.id} className="card-projeto">
                    <h4>{proj.nome}</h4>
                    <p>{proj.descricao}</p>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer">
                        Ver no GitHub
                    </a>
                </div>
            ))}
        </div>
    </section>
)
export default ProjetosCard;

