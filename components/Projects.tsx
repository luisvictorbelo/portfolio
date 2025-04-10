import { useState } from "react"
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import EMEImage from "@/public/cropped-eme-1.png";



const Projects = () => {
    const [filter, setFilter] = useState("all");

    const filters = [
        { value: "all", label: "Todos" },
        { value: "react", label: "React" },
        { value: "wordpress", label: "Wordpress" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
        { value: "javascript", label: "JavaScript" },
        { value: "nextjs", label: "Next.js" },
        { value: "tailwindcss", label: "Tailwind CSS" },
        { value: "typescript", label: "TypeScript" },
    ];

    const projects = [
        {
            id: 1,
            title: "IV EME - Encontro Maranhense de Economia",
            description: "Landing page do Encontro Maranhense de Economia organizado pela UFMA que mostra informações do evento: inscrição, temas, datas, calendário, etc.",
            image: EMEImage.src,
            techs: ["HTML", "CSS", "JavaScript", "Wordpress"],
            demo: "https://www.eme.ufma.br/",
            github: "",
            category: ["html", "css", "javascript", "wordpress"]
        },
        {
            id: 2,
            title: "ZEE-MA",
            description: "Site do Zoneamento Ecológico do Maranhão que mostra notícias, publicações e documentos importantes da atividade governamental.",
            image: "https://images.unsplash.com/photo-1603060631628-946835734b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb2xvZ2lhfGVufDB8fDB8fHww",
            techs: ["HTML", "CSS", "JavaScript", "Wordpress"],
            demo: "http://zee.ma.gov.br/",
            github: "",
            category: ["html", "css", "javascript", "wordpress"]
        },
        {
            id: 3,
            title: "Portfólio",
            description: "Aqui você conhece um pouco mais sobre o meu trabalho!",
            image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            demo: "#",
            github: "https://github.com/luisvictorbelo/portfolio",
            category: ["react", "nextjs", "tailwindcss", "typescript"]
        }
    ]

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter((project) => project.category.includes(filter))
    
    return (
        <AnimatedSection id="projects" className="bg-purple-50 dark:bg-purple-900/10">
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-12 text-center">Meus Projetos</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {filters.map((item) => (
                        <Button
                            key={item.value}
                            variant={filter === item.value ? "default" : "outline"}
                            className={
                                filter === item.value
                                ? "bg-purple-gradient text-white"
                                : "border-purple-200 dark:border-purple-700/20 hover:border-purple-400"
                            }
                            onClick={() => setFilter(item.value)}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-purple-800/10 rounded-xl overflow-hidden shadow-md border border-purple-100 dark:border-purple-700/20 card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-700/20 text-purple-700 dark:text-purple-300 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <a 
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                                    >
                                        Link <ExternalLink className="ml-1 w-4 h-4" />
                                    </a>
                                    {project.github.length > 0 
                                        ? <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"   
                                        >
                                            Repositório <Github className="ml-1 w-4 h-4" />
                                        </a>
                                        : null
                                    }
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