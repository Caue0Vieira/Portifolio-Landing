export interface Projeto {
    id: number;
    nome: string;
    descricao: string;
    link: string;
}

const projetos: Projeto[] = [
    {
        id: 1,
        nome: "API de Autenticação",
        descricao: "API REST com autenticação JWT usando PHP e Laravel.",
        link: "https://github.com/seuusuario/auth-api"
    },
    {
        id: 2,
        nome: "Sistema de Pedidos",
        descricao: "Back-end completo de um sistema de pedidos com Node.js e MongoDB.",
        link: "https://github.com/seuusuario/sistema-pedidos"
    },
    {
        id: 3,
        nome: "Integração com PagSeguro",
        descricao: "Serviço de pagamento backend com integração ao PagSeguro.",
        link: "https://github.com/seuusuario/pagseguro-integration"
    }
];

export default projetos;
