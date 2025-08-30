"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Globe,
  Boxes,
  GitBranch,
  Layers,
  Cog,
} from "lucide-react";

const skills = [
  { name: "Python / ML", level: 90, icon: Brain, desc: "Data modeling, ML algorithms, DL basics" },
  { name: "Data Science / SQL", level: 85, icon: Database, desc: "Data wrangling, analytics, optimization" },
  { name: "MLOps (Docker, MLflow, DagsHub)", level: 75, icon: Globe, desc: "Pipeline automation & model deployment" },
  { name: "HTML", level: 90, icon: Code2, desc: "Frontend structure & semantic markup" },
  { name: "Analytics (Pandas, Numpy, Seaborn, Matplotlib)", level: 85, icon: Layers, desc: "EDA, visualization, numerical analysis" },
  { name: "Jupyter Notebook", level: 85, icon: Boxes, desc: "Experimentation & data storytelling" },
  { name: "Power-BI", level: 80, icon: Boxes, desc: "Business intelligence dashboards" },
  { name: "Git/GitHub", level: 85, icon: GitBranch, desc: "Version control & collaboration" },
  { name: "CI/CD (Basic)", level: 85, icon: Cog, desc: "Automated workflows & deployment" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-300"
    >
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
              className="relative flex flex-col items-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 group"
            >
              {/* Glowing Circular Ring */}
              <div className="relative w-28 h-28 flex items-center justify-center">
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
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50}`}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 50 * (1 - skill.level / 100),
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="drop-shadow-[0_0_10px_#06b6d4]"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Skill Icon */}
                <skill.icon className="w-8 h-8 text-cyan-400 absolute group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Skill Name */}
              <span className="mt-4 text-lg font-semibold text-white text-center">
                {skill.name}
              </span>

              {/* Tooltip */}
              <span className="absolute opacity-0 group-hover:opacity-100 bottom-[-60px] w-52 text-center bg-gray-800 text-sm text-gray-300 px-3 py-2 rounded-lg border border-cyan-500/50 shadow-lg transition-opacity duration-300">
                {skill.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
