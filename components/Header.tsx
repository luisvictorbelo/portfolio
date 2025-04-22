import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { title: "Início", href: "#home" },
        { title: "Sobre", href: "#about" },
        { title: "Habilidades", href: "#skills" },
        { title: "Projetos", href: "#projects" },
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
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold text-primary">Luís Belo</a>

                {/* Desktop Navigation */}
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

                {/* Mobile Navigation Toggle */}
                <div className="flex items-center md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMobileMenu}
                        className="ml-2"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background dark:bg-purple-900/95 backdrop-blur-lg">
                    <ul className="py-4 px-8 space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block py-2 font-medium text-foreground hover:text-purple-400 transition-colors"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;