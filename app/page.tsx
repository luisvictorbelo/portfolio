"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Moon, Sun, Code2, Rocket, Brain } from "lucide-react"
import { useTheme } from "next-themes"
import Header from "../components/Header";

export default function Home() {
  const { theme, setTheme } = useTheme()

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
    <main className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Olá, eu sou <span className="text-primary">Luís Victor Belo</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Desenvolvedor Full-Stack apaixonado por criar experiências web incríveis
            </p>
            <div className="flex gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contato
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-float">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover border-4 border-primary"
            />
          </div>
        </div>
      </section>

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
  )
}