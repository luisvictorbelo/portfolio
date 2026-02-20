import { ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-purple-100 bg-purple-50 py-8 dark:border-purple-800/20 dark:bg-purple-900/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-6 text-center md:mb-0 md:text-left">
                        <a
                            href="#home"
                            className="text-gradient mb-2 inline-block text-2xl font-bold"
                        >
                            <span className="text-purple-500">Luís Belo</span>
                        </a>
                        <p className="text-muted-foreground">
                            &copy; {new Date().getFullYear()} Luís Victor Belo.
                            Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <a
                            href="#home"
                            className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-colors hover:bg-purple-200 dark:bg-purple-700/20 dark:text-purple-400 dark:hover:bg-purple-600/20"
                            aria-label="Voltar ao topo"
                        >
                            <ArrowUp className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
