'use client'

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const ThemeToggle = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={ theme === 'dark' ? "rounded-full w-9 h-9 bg-white" : "rounded-full w-9 h-9 bg-purple-700"}
            aria-label="Altenar tema"
            >
            {theme === "dark" ? (
                <Moon className="h-5 w-5 text-purple-900 transition-transform hover:rotate-45" />
            ) : (
                <Sun className="h-5 w-5 text-yellow-300 transition-transform hover:rotate-45"/>
            )}
        </Button>
    );
};

export default ThemeToggle;