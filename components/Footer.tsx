import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 bg-purple-50 dark:bg-purple-900/30 border-t border-purple-100 dark:border-purple-800/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gradient mb-2 inline-block">
              <span className="text-purple-500">Luís Belo</span>
            </a>
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Luís Victor Belo. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#home" 
              className="w-10 h-10 bg-purple-100 dark:bg-purple-700/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-600/20 transition-colors ml-4"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
};

export default Footer;