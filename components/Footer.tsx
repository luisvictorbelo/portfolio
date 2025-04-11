const Footer = () => {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-muted-foreground">
                    © {new Date().getFullYear()} Luís Victor Belo. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
};

export default Footer;