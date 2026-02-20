import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { title: 'Início', href: '#home' },
        { title: 'Sobre', href: '#about' },
        { title: 'Habilidades', href: '#skills' },
        { title: 'Projetos', href: '#projects' },
        { title: 'Contato', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header
            className={`fixed z-50 w-full transition-all duration-300 ${
                scrolled
                    ? 'bg-white/80 py-2 shadow-md backdrop-blur-md dark:bg-purple-800/80'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <a href="#home" className="text-primary text-xl font-bold">
                    Luís Belo
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-6 md:flex">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-foreground relative font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all hover:text-purple-500 hover:after:w-full"
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
                <div className="bg-background backdrop-blur-lg md:hidden dark:bg-purple-900/95">
                    <ul className="space-y-4 px-8 py-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-foreground block py-2 font-medium transition-colors hover:text-purple-400"
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
