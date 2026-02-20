import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { ArrowDown, ExternalLink, Github } from 'lucide-react';
import EMEImage from '../../public/cropped-eme-1.png';
import IMESCImage from '../../public/imesc-portal.png';
import Image from 'next/image';
// import Dropdown from './Dropdown';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filters = [
        { value: 'all', label: 'Todos', category: 'all' },
        { value: 'react', label: 'React', category: 'frontend' },
        { value: 'wordpress', label: 'Wordpress', category: 'tools' },
        { value: 'html', label: 'HTML', category: 'language' },
        { value: 'css', label: 'CSS', category: 'language' },
        { value: 'javascript', label: 'JavaScript', category: 'language' },
        { value: 'nextjs', label: 'Next.js', category: 'fullstack' },
        { value: 'tailwindcss', label: 'Tailwind CSS', category: 'frontend' },
        { value: 'typescript', label: 'TypeScript', category: 'language' },
        { value: 'dotnet', label: '.NET', category: 'backend' },
        { value: 'sqlserver', label: 'SQL Server', category: 'database' },
        { value: 'vite', label: 'Vite', category: 'frontend' },
        { value: 'php', label: 'PHP', category: 'language' },
        { value: 'hono', label: 'Hono', category: 'backend' },
        { value: 'solidjs', label: 'SolidJS', category: 'frontend' },
        { value: 'python', label: 'Python', category: 'language' },
        { value: 'go', label: 'Go', category: 'language' },
        { value: 'nestjs', label: 'NestJS', category: 'backend' },
        { value: 'mongo', label: 'MongoDB', category: 'database' },
    ];

    const projects = [
        {
            id: 1,
            title: 'Portal IMESC',
            description:
                'Portal de publicações, notícias e outros conteúdos do Instituto Maranhense de Estudos Socioeconômicos e Cartográficos',
            image: IMESCImage,
            techs: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
            demo: 'https://imesc.ma.gov.br/',
            github: '',
            stack: ['html', 'css', 'javascript', 'wordpress', 'php'],
        },
        {
            id: 2,
            title: 'Weather Dashboard',
            description:
                'Dashboard de coleta de dados meteorológicos utilizando Python para coletar dados de uma API pública, Go para gerenciamento de mensageria RabbitMQ, Vite no frontend com Typescript e Tailwindcss e NestJS com MongoDB no backend e insights de IA sobre o clima atual com Gemini pela API da Google Cloud.',
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60',
            techs: [
                'Python',
                'Go',
                'TypeScript',
                'NestJS',
                'MongoDB',
                'RabbitMQ',
                'Vite',
                'Tailwind CSS',
            ],
            demo: '',
            github: 'https://github.com/luisvictorbelo/weather-dashboard',
            stack: [
                'python',
                'go',
                'typescript',
                'nestjs',
                'mongo',
                'react',
                'tailwindcss',
                'vite',
                'rabbitmq',
                'jwt',
                'shadcn/ui',
                'swagger',
            ],
        },
        {
            id: 3,
            title: 'Meu Portfólio',
            description:
                'Site do meu portfólio totalmente responsivo com tema claro/escuro',
            image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvfGVufDB8fDB8fHww',
            techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            demo: '#home',
            github: 'https://github.com/luisvictorbelo/portfolio',
            stack: [
                'react',
                'tailwindcss',
                'nextjs',
                'typescript',
                'shadcn/ui',
            ],
        },
        {
            id: 4,
            title: 'API de Gerenciamento de Dispositivos',
            description:
                'API RESTful de Gerenciamento de Dispositivos utilizando .NET, SQL Server, JWT Auth, Swagger, xUnit e Mock',
            image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
            techs: ['.NET', 'SQL Server'],
            demo: '',
            github: 'https://github.com/luisvictorbelo/device-management-api',
            stack: ['dotnet', 'sqlserver', 'jwt', 'swagger'],
        },
        {
            id: 5,
            title: 'Paguu',
            description:
                'Plataforma de gerenciamento de pedidos, comandas, pagamentos e estoque para bares e restaurantes.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60',
            techs: ['Deno', 'TypeScript', 'Hono', 'SolidJS', 'PostgreSQL'],
            demo: 'https://beamish-lily-08b300.netlify.app/',
            github: 'https://github.com/luisvictorbelo/paguu',
            stack: ['typescript', 'hono', 'solidjs', 'postgresql'],
        },
        {
            id: 6,
            title: 'ZEE-MA',
            description:
                'Site do Zoneamento Ecológico do Maranhão que mostra notícias, publicações e documentos importantes da atividade governamental.',
            image: 'https://images.unsplash.com/photo-1603060631628-946835734b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb2xvZ2lhfGVufDB8fDB8fHww',
            techs: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
            demo: 'http://zee.ma.gov.br/',
            github: '',
            stack: ['html', 'css', 'javascript', 'wordpress', 'php'],
        },
        {
            id: 7,
            title: 'IV EME - Encontro Maranhense de Economia',
            description:
                'Landing page do Encontro Maranhense de Economia organizado pela UFMA que mostra informações do evento: inscrição, temas, datas, calendário, etc.',
            image: EMEImage,
            techs: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
            demo: 'https://www.eme.ufma.br/',
            github: '',
            stack: ['html', 'css', 'javascript', 'wordpress', 'php'],
        },
    ];

    const filteredProjects =
        filter === 'all'
            ? projects
            : projects.filter((project) => project.stack.includes(filter));

    return (
        <AnimatedSection
            id="projects"
            className="bg-purple-50 dark:bg-purple-900/10"
        >
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-12 text-center">
                    Meus Projetos
                </h2>
                {/* <h3 className="text-xl font-semibold m-2 text-foreground">
                    Filtros
                </h3> */}
                <div className="text-foreground relative m-3 flex items-center justify-center gap-4 text-xl font-semibold">
                    {/* <Dropdown
                        title="Languages"
                        options={['React', 'Vue', 'Angular']}
                    />
                    <Dropdown
                        title="Frontend"
                        options={['React', 'Vue', 'Angular']}
                    />
                    <Dropdown
                        title="Backend"
                        options={['React', 'Vue', 'Angular']}
                    />
                    <Dropdown
                        title="Database"
                        options={['React', 'Vue', 'Angular']}
                    />
                    <Dropdown
                        title="Tools"
                        options={['React', 'Vue', 'Angular']}
                    /> */}

                    <div className="mb-10 flex flex-wrap justify-center gap-3">
                        {filters.map((item) => (
                            <Button
                                key={item.value}
                                variant={
                                    filter === item.value
                                        ? 'default'
                                        : 'outline'
                                }
                                className={
                                    filter === item.value
                                        ? 'bg-purple-gradient text-white'
                                        : 'border-purple-200 hover:border-purple-400 dark:border-purple-700/20'
                                }
                                onClick={() => setFilter(item.value)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="card-hover overflow-hidden rounded-xl border border-purple-100 bg-white shadow-md dark:border-purple-700/20 dark:bg-purple-800/10"
                        >
                            <div className="h-48 overflow-hidden">
                                {/* {project.image.startsWith} */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={500}
                                    className="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-foreground mb-2 text-xl font-bold">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {project.description}
                                </p>
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-700 dark:bg-purple-700/20 dark:text-purple-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    {project.demo.length > 0 ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                                        >
                                            Link
                                            <ExternalLink className="ml-1 h-4 w-4" />
                                        </a>
                                    ) : null}
                                    {project.github.length > 0 ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                                        >
                                            Repositório
                                            <Github className="ml-1 h-4 w-4" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Projects;
