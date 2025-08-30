"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Anime Recommender System",
    description:
      "Developed an Anime Recommender System that leverages collaborative filtering and content-based techniques to provide personalized anime suggestions based on user preference",
    tech: ["Python", "Hugging Face", "GROQ", "Langchain", "Streamlit", "Pandas"],
    github: "https://github.com/abhiramsr04/Anime-Recommender-System",
    demo: "#",
  },
  {
    title: "End-to-End ML Pipeline with MLOps",
    description:
      "Complete ML workflow with experiment tracking using MLflow, deployment with Docker, and CI/CD integration.",
    tech: ["Python", "MLflow", "Docker", "DagsHub", "GitHub Actions", ],
    github: "https://github.com/abhiramsr04/DataScienceProject",
    demo: "#",
  },
  {
    title: "Network Security",
    description:
      "End-to-end phishing website detection system with automated ML pipeline, data drift validation, Dockerized deployment, and CI/CD.",
    tech: ["Python", "MLflow", "Docker", "DagsHub", "GitHub Actions", "MongoDB", "FastAPI"],
    github: "https://github.com/abhiramsr04/networksecurity",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold font-playfair bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-16 text-center"
        >
          Projects 🚀
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.25} glareBorderRadius="16px" scale={1.05}>
                <Card className="bg-gray-800/60 border border-gray-700/50 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30 rounded-full shadow-sm hover:shadow-cyan-400/40 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 pt-4">
                      {project.github !== "#" && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                        >
                          <Github className="w-5 h-5" /> Code
                        </motion.a>
                      )}
                      {project.demo !== "#" && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                        >
                          <ExternalLink className="w-5 h-5" /> Live
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
