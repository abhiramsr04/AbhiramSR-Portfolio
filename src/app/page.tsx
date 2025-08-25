"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-white">
      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 🔹 About */}
      <section id="about" className="py-20">
        <About />
      </section>


      {/* 🔹 Projects */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* 🔹 Skills */}
      <section id="skills" className="py-20 bg-gray-900/40">
        <Skills />
      </section>

      

      {/* 🔹 Contact */}
      <section id="contact" className="py-20 bg-gray-900/40">
        <Contact />
      </section>

      {/* 🔹 Footer */}
      <Footer />
    </main>
  );
}
