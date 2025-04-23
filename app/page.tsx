"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Moon, Sun, Code2, Rocket, Brain } from "lucide-react"
import { useTheme } from "next-themes"
import Header from "../components/Header";
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"
import SkillsSection from "@/components/SkillsSection"

export default function Home() {

  const skills = [
    { name: "React", icon: <Code2 className="w-6 h-6" />, level: "Avançado" },
    { name: "TypeScript", icon: <Brain className="w-6 h-6" />, level: "Intermediário" },
    { name: "Next.js", icon: <Rocket className="w-6 h-6" />, level: "Intermediário" },
  ]

  const projects = [
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Projeto 2",
      description: "Descrição do projeto 2",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto 3",
      image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&w=400&h=250",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};