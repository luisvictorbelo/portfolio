import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    animation?: "fade-in" | "fade-in-right" | "fade-in-left";
    delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className,
    id,
    animation = "fade-in",
    delay = 0,
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const animationClass = `animate-${animation}`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add(animationClass);
                        observer.unobserve(entry.target);
                    }, delay);
                }
            },
            {
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            currentRef.style.opacity = "0";
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [animationClass, delay]);
    
    return (
        <section
            ref={sectionRef}
            id={id}
            className={cn("py-20 opacity-0", className)}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;