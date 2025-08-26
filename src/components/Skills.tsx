"use client";

import { motion } from "framer-motion";
import { Code2, Database, Brain, Globe, Boxes, GitBranch, Layers, Cog } from "lucide-react";

const skills = [
  // Existing
  { name: "Python / ML", level: 90, icon: Brain },
  { name: "Data Science / SQL", level: 85, icon: Database },
  { name: "MLOps (Docker, MLflow,DagsHub)", level: 75, icon: Globe },
  { name: "HTML", level: 90, icon: Code2 },

  // New: Libraries & Frameworks
  { name: "Analytics(Pandas, Numpy, Seaborn, Matplotlib)", level: 85, icon: Layers },
  { name: "Jupyter Notebook", level: 85, icon: Boxes },
  { name: "Power-BI", level: 80, icon: Boxes },

  // New: Version Control & Deployment
  { name: "Git/GitHub", level: 85, icon: GitBranch },
  { name: "CI/CD (Basic)", level: 85, icon: Cog },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-playfair font-bold text-cyan-400 mb-16 text-center tracking-wide"
        >
          Skills & Expertise ⚡
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col items-center space-y-4 group"
            >
              {/* Circular progress */}
              <div className="relative w-28 h-28">
                <svg className="w-28 h-28 -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-gray-800"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="56"
                    cy="56"
                    r="50"
                    stroke="url(#grad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="transparent"
                    initial={{ strokeDasharray: 0 }}
                    whileInView={{
                      strokeDasharray: `${(2 * Math.PI * 50 * skill.level) / 100}, 999`,
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Percentage in center */}
                <span className="absolute inset-0 flex items-center justify-center font-bold text-lg text-cyan-300 group-hover:scale-110 transition">
                  {skill.level}%
                </span>
              </div>

              {/* Icon + Name */}
              <div className="flex flex-col items-center">
                <skill.icon className="w-7 h-7 text-cyan-400 mb-2 group-hover:text-cyan-300 transition" />
                <span className="text-base font-semibold">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
