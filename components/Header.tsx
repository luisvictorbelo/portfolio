import { useEffect, useState } from "react"
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { title: "Início", href: "#home" },
        { title: "Sobre", href: "#about" },
        { title: "Projetos", href: "#projects" },
        { title: "Habilidades", href: "#skills" },
        { title: "Contato", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 dark:bg-purple-800/80 backdrop-blur-md py-2 shadow-md"
                    : "bg-transparent py-4"
                }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold text-primary">Luís Victor Belo</a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a 
                                    href={link.href}
                                    className="font-medium text-foreground hover:text-purple-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}

export default Header;