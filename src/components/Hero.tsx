import { ArrowDown, Github, Linkedin, Mail, FileUser } from 'lucide-react';
import { Button } from './ui/button';
import myPhoto from '../../public/eu.jpg';
import Image from 'next/image';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-white to-purple-50 pt-16 dark:from-purple-900 dark:to-purple-800/20"
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="animate-pulse-slow absolute top-20 left-10 h-64 w-64 rounded-full bg-purple-200 opacity-50 blur-3xl filter dark:bg-purple-700/20"></div>
                <div className="animate-pulse-slow absolute right-10 bottom-20 h-72 w-72 rounded-full bg-purple-300 opacity-50 blur-3xl filter dark:bg-purple-600/20"></div>
            </div>
            <div className="z-10 container mx-auto flex flex-col items-center justify-between gap-10 px-4 md:flex-row">
                <div className="text-center md:w-1/2 md:text-left">
                    <p className="animate-fade-in mb-2 text-lg font-medium text-purple-600 md:text-xl dark:text-purple-300">
                        Olá, eu sou
                    </p>
                    <h1
                        className="animate-fade-in mb-4 text-4xl font-bold md:text-6xl"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <span className="text-gradient">Luís Belo</span>
                    </h1>
                    <h2
                        className="text-foreground animate-fade-in mb-6 text-2xl font-medium md:text-3xl"
                        style={{ animationDelay: '0.3s' }}
                    >
                        Desenvolvedor Full-Stack
                    </h2>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:flex lg:gap-4">
                        <a
                            href="https://github.com/luisvictorbelo"
                            target="_blank"
                        >
                            <Button variant="outline">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/luisvictorbelo/"
                            target="_blank"
                        >
                            <Button variant="outline">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Button>
                        </a>
                        <a
                            href="/curriculo-luis-victor-belo-dev-full-stack.pdf"
                            target="_blank"
                        >
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
                <div
                    className="animate-fade-in mt-8 flex justify-center md:mt-0 md:w-1/2"
                    style={{ animationDelay: '0.6s' }}
                >
                    <div className="animate-float relative">
                        <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-80 sm:w-80 dark:border-purple-700">
                            <Image
                                src={myPhoto}
                                alt="Luís Victor Belo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <a
                    href="#about"
                    className="md:animate-bounce-light hidden md:absolute md:bottom-10 md:left-1/2 md:block md:-translate-x-1/2 md:transform"
                >
                    <ArrowDown className="h-10 w-10 rounded-full bg-purple-100 p-2 text-purple-600 dark:bg-purple-800/50 dark:text-purple-300" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
