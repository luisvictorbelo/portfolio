import { Code, Database, Globe, Layout } from "lucide-react";
import AnimatedSection from "./AnimatedSection";


const About = () => {
    const skills = [
        {
            icon: <Layout className="w-6 h-6 text-purple-500" />,
            title: "Front-end",
            description:
                "Desenvolvimento de interfaces modernas e responsivas com React, TypeScript e Tailwind CSS.",
        },
        {
            icon: <Database className="w-6 h-6 text-purple-500" />,
            title: "Back-end",
            description:
                "Criação de APIs robustas com Node.js, .NET, PHP e integração com bancos de dados SQL e NoSQL.",
        },
        {
            icon: <Code className="w-6 h-6 text-purple-500" />,
            title: "Desenvolvimento Web",
            description:
                "Construção de aplicações web completas seguindo as melhores práticas do mercado.",
        },
        {
            icon: <Globe className="w-6 h-6 text-purple-500" />,
            title: "Responsivo",
            description:
                "Sites e aplicações que funcionam perfeitamente em qualquer dispositivo ou tamanho de tela.",
        },
    ];

    return (
        <AnimatedSection id="about" className="py-20 bg-white dark:bg-purple-900/20">
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-12 text-center">Sobre Mim</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-foreground">
                            Olá! Sou um desenvolvedor full-stack apaixonado por criar soluções
                            web inovadoras e funcionais. Atualmente sou estagiário no Instituto Maranhense de Estudos Socioeconômicos e Cartográficos e estou
                            aprimorando minhas habilidades em diversas tecnologias e buscando
                            minha primeira oportunidade como desenvolvedor júnior.
                        </p>
                        <p className="text-lg text-foreground">
                            Minha jornada na programação começou na faculdade de Engenharia da Computação e tem sido um caminho de constante aprendizado e
                            evolução. Tenho experiência com projetos pessoais e acadêmicos
                            utilizando React, Next.js, TypeScript, Tailwindcss no front-end, além de conhecimentos no backend utilizando Node.js, .NET, PHP e bancos de dados SQL (MySQL, SQL Server) e NoSQL (MongoDB).
                        </p>
                        <p className="text-lg text-foreground">
                            Sou dedicado, aprendo rápido e estou sempre em busca de novos
                            desafios que me permitam crescer como profissional. Meu objetivo é
                            me tornar um desenvolvedor completo, capaz de criar aplicações de
                            ponta a ponta com excelência técnica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-purple-800/10 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100 dark:border-purple-700/20 card-hover"
                            >
                                <div className="mb-4 inline-block bg-purple-100 dark:bg-purple-700/20 p-3 rounded-full">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground hyphens-auto">
                                    {skill.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;