"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPython, FaDocker, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTensorflow, SiMongodb } from "react-icons/si";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-gray-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl group-hover:blur-[80px] transition-all duration-500"></div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl"
            >
              <Image
                src="/profile.jpg" // 👉 Replace with your photo
                alt="Abhiram"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg leading-relaxed"
          >
            Hi, I’m <span className="text-white font-semibold">Abhiram S R</span> 🚀  
            A passionate{" "}
            <span className="text-cyan-400">Machine Learning & Data Science Engineer </span>  
            with a strong foundation in ML, MLOps, and LLMOps.  
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg leading-relaxed"
          >
            I specialize in building end-to-end AI solutions, leveraging modern tools like{" "}
            <span className="text-white">Docker, MongoDB, MLflow</span> and deploying scalable ML pipelines.
            My focus is on bridging engineering and data science to create impactful, real-world solutions.
          </motion.p>

          {/* Skills Icons */}
          <div className="flex flex-wrap gap-5 text-3xl text-cyan-400">
            <FaPython title="Python" />
            <SiTensorflow title="TensorFlow" />
            <FaDocker title="Docker" />
            <SiMongodb title="MongoDB" />
            <FaDatabase title="SQL & Databases" />
            <FaGithub title="GitHub" />
          </div>

          {/* Resume Button */}
          <div className="pt-4">
            <Link
              href="/resume.pdf" // 👉 Place your resume in /public
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              📄 Download Resume
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-[100px] opacity-20"></div>
    </section>
  );
}
