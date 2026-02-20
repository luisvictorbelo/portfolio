import { Code, Database, Globe, Layout } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
    const skills = [
        {
            icon: <Layout className="h-6 w-6 text-purple-500" />,
            title: 'Front-end',
            description:
                'Desenvolvimento de interfaces modernas e responsivas com React, TypeScript e Tailwind CSS.',
        },
        {
            icon: <Database className="h-6 w-6 text-purple-500" />,
            title: 'Back-end',
            description:
                'Criação de APIs robustas com Node.js, .NET, PHP e integração com bancos de dados SQL e NoSQL.',
        },
        {
            icon: <Code className="h-6 w-6 text-purple-500" />,
            title: 'Desenvolvimento Web',
            description:
                'Construção de aplicações web completas seguindo as melhores práticas do mercado.',
        },
        {
            icon: <Globe className="h-6 w-6 text-purple-500" />,
            title: 'Responsivo',
            description:
                'Sites e aplicações que funcionam perfeitamente em qualquer dispositivo ou tamanho de tela.',
        },
    ];

    return (
        <AnimatedSection
            id="about"
            className="bg-white py-20 dark:bg-purple-900/20"
        >
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-12 text-center">Sobre Mim</h2>
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className="space-y-6">
                        <p className="text-foreground text-lg">
                            Olá! Sou um desenvolvedor full-stack apaixonado por
                            criar soluções web inovadoras e funcionais.
                            Atualmente sou estagiário no Instituto Maranhense de
                            Estudos Socioeconômicos e Cartográficos e estou
                            aprimorando minhas habilidades em diversas
                            tecnologias e buscando novas oportunidades.
                        </p>
                        <p className="text-foreground text-lg">
                            Minha jornada na programação começou na faculdade de
                            Engenharia da Computação e tem sido um caminho de
                            constante aprendizado e evolução. Tenho experiência
                            com projetos pessoais e acadêmicos utilizando React,
                            Next.js, TypeScript, Tailwindcss no front-end, além
                            de conhecimentos no backend utilizando Node.js,
                            .NET, PHP e bancos de dados SQL (MySQL, SQL Server)
                            e NoSQL (MongoDB).
                        </p>
                        <p className="text-foreground text-lg">
                            Sou dedicado, aprendo rápido e estou sempre em busca
                            de novos desafios que me permitam crescer como
                            profissional. Meu objetivo é me tornar um
                            desenvolvedor completo, capaz de criar aplicações de
                            ponta a ponta com excelência técnica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="card-hover rounded-xl border border-purple-100 bg-white p-6 shadow-md transition-all hover:shadow-lg dark:border-purple-700/20 dark:bg-purple-800/10"
                            >
                                <div className="mb-4 inline-block rounded-full bg-purple-100 p-3 dark:bg-purple-700/20">
                                    {skill.icon}
                                </div>
                                <h3 className="text-foreground mb-2 text-xl font-semibold hyphens-auto">
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
