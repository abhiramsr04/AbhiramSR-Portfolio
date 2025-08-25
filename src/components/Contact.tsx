"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-t from-black via-gray-950 to-gray-900 text-gray-200 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
        >
          Let’s Connect 📬
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mb-12 text-lg"
        >
          Got an opportunity, collaboration idea, or just want to say hi?  
          I’d love to hear from you!
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            {
              href: "mailto:yourmail@example.com",
              label: "Email",
              icon: <Mail className="w-6 h-6" />,
            },
            {
              href: "https://www.linkedin.com/in/your-profile",
              label: "LinkedIn",
              icon: <Linkedin className="w-6 h-6" />,
            },
            {
              href: "https://github.com/abhiramsr04",
              label: "GitHub",
              icon: <Github className="w-6 h-6" />,
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-700 hover:border-cyan-400 transition relative overflow-hidden"
            >
              {/* Glow Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></span>

              {/* Icon with ring */}
              <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 group-hover:border-cyan-400 transition">
                {item.icon}
              </span>
              <span className="text-lg">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Rogue • Built with ❤️ using Next.js & Tailwind
        </motion.p>
      </div>

      {/* Background glow blobs */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-[120px] opacity-25"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-[100px] opacity-20"></div>
    </section>
  );
}
