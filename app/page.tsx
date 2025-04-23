"use client"

import Header from "../components/Header";
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"
import SkillsSection from "@/components/SkillsSection"

export default function Home() {

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