"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Moon, Sun, Code2, Rocket, Brain } from "lucide-react"
import { useTheme } from "next-themes"
import Header from "../components/Header";
import Hero from "@/components/Hero"

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
        <section className="container mx-auto px-4 py-16 animate-slide-in stagger-delay-1">
          <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <p className="text-muted-foreground">{skill.level}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 animate-slide-in stagger-delay-2">
          <h2 className="text-3xl font-bold mb-8">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden hover:border-primary transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <footer className="border-t">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}