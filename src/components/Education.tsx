"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { CheckCircle } from "lucide-react"; // ✅ For certification icons
import studentAnimation from "../../public/animations/student.json"; // ✅ Your animation

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Lottie
            animationData={studentAnimation}
            loop={true}
            className="w-72 lg:w-96 drop-shadow-lg"
          />
        </motion.div>

        {/* RIGHT SIDE - Education Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Education 🎓
          </h2>

          {/* Education Cards */}
          <div className="space-y-8">
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition duration-300">
              <h3 className="text-2xl font-semibold">B.Tech in Civil Engineering</h3>
              <p className="text-gray-300 mt-2">NITK Surathkal (2022 - 2026)</p>
              <p className="text-gray-400 mt-3">
                Coursework: Machine Learning, Deep Learning, MLOps, and Civil Engineering fundamentals.
              </p>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition duration-300">
              <h3 className="text-2xl font-semibold">Higher Secondary (Class XII)</h3>
              <p className="text-gray-300 mt-2">Science Stream (PCM), Graduated with Distinction</p>
              <p className="text-gray-400 mt-3">
                Focused on Mathematics, Physics, and Computer Science.
              </p>
            </div>
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Certifications 🏆
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Data Science and Machine Learning Certification",
                "Python and SQL Fundamentals Certification",
                "Deep Learning Certification",
                "MLOps Certification",
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-900/40 border border-gray-800 rounded-xl p-4 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30 transition duration-300"
                >
                  <CheckCircle className="text-cyan-400 w-6 h-6" />
                  <p className="text-gray-300">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
