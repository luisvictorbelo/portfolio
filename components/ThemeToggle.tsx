import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


const ThemeToggle = () => {
    const {theme, setTheme} = useTheme()

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