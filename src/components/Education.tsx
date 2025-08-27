"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Education Details */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-neon-green mb-6">
            Education 🎓
          </h2>

          {/* B.Tech */}
          <div className="bg-gray-900/60 p-6 rounded-2xl shadow-lg hover:shadow-neon-green/40 transition">
            <h3 className="text-2xl font-semibold text-neon-green">
              B.Tech in Civil Engineering
            </h3>
            <p className="text-gray-300">National Institute of Technology Karnataka, Surathkal | 2022 - 2026</p>
            <ul className="list-disc list-inside mt-3 text-gray-400">
              <li>Specialized in Machine Learning, Data Science, and GIS</li>
              <li>Research: Rainfall-driven Landslide Prediction (Western Ghats)</li>
            </ul>
          </div>

          {/* Pre-University */}
          <div className="bg-gray-900/60 p-6 rounded-2xl shadow-lg hover:shadow-neon-green/40 transition">
            <h3 className="text-xl font-semibold text-neon-green">
              Pre-University
            </h3>
            <p className="text-gray-300">[Rashtrotthana Vidya Kendra, Bengaluru] | 2020 - 2022</p>
          </div>

          {/* Schooling */}
          <div className="bg-gray-900/60 p-6 rounded-2xl shadow-lg hover:shadow-neon-green/40 transition">
            <h3 className="text-xl font-semibold text-neon-green">
              Schooling
            </h3>
            <p className="text-gray-300">[S S S High School, Hubli] | 2017 - 2020</p>
          </div>
        </motion.div>

        {/* Right: Animation */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Lottie
            path="/animations/student.json"   // ✅ Use path since it's in public/
            loop
            autoplay
            style={{ height: "400px", width: "400px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
