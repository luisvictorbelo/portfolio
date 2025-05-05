import { ArrowDown, Github, Linkedin, Mail, FileUser } from "lucide-react";
import { Button } from "./ui/button";
import myPhoto from "@/public/eu.jpg";



const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-purple-50 dark:from-purple-900 dark:to-purple-800/20 pt-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-700/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
            </div>
            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-lg md:text-xl font-medium text-purple-600 dark:text-purple-300 mb-2 animate-fade-in">
                        Olá, eu sou
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <span className="text-gradient">Luís Belo</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium mb-6 text-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        Desenvolvedor Full-Stack
                    </h2>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:flex lg:gap-4">
                        <a href="https://github.com/luisvictorbelo" target="_blank">
                            <Button variant="outline">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/luisvictorbelo/" target="_blank">
                            <Button variant="outline">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Button>
                        </a>
                        <a href="/curriculo-luis-victor-belo-dev-full-stack.pdf" target="_blank">
                            <Button variant="outline">
                                <FileUser className="mr-2 h-4 w-4" />
                                Baixar CV
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button className="text-white">
                                <Mail className="mr-2 h-4 w-4" />
                                Contato
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                    <div className="relative animate-float">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-purple-700 shadow-xl">
                            <img
                                src={myPhoto.src}
                                alt="Luís Belo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <a
                    href="#about"
                    className="hidden md:block md:absolute md:bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 md:animate-bounce-light"
                >
                    <ArrowDown className="w-10 h-10 p-2 rounded-full bg-purple-100 dark:bg-purple-800/50 text-purple-600 dark:text-purple-300" />
                </a>
            </div>
        </section>
    )
};

export default Hero;