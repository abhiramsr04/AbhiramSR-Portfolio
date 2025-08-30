"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "abhiramsr173@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      href: `mailto:${email}`,
      label: "Email",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      href: "https://www.linkedin.com/in/abhiramsr2309/",
      label: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      href: "https://github.com/abhiramsr04",
      label: "GitHub",
      icon: <Github className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 overflow-hidden"
    >
      {/* Background Floating Blobs */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-32 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-[120px] opacity-20"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-[100px] opacity-20"
      />

      {/* Container */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
        >
          Let’s Work Together 🚀
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Have an opportunity, collaboration idea, or just want to chat?  
          I’d love to connect with you!
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socials.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="group relative flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 backdrop-blur-lg bg-white/5 overflow-hidden"
            >
              {/* Glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all"></span>

              {/* Icon */}
              <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 group-hover:border-cyan-400 transition-all">
                {item.icon}
              </span>
              <span className="text-lg">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copy Email Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={handleCopy}
            className="group flex items-center mx-auto gap-3 px-6 py-3 rounded-2xl border border-gray-700 hover:border-green-400 transition-all backdrop-blur-lg bg-white/5 hover:bg-white/10"
          >
            <Copy className="w-5 h-5 group-hover:text-green-400" />
            <span className="text-gray-300 group-hover:text-green-400">
              {copied ? "Copied to Clipboard!" : email}
            </span>
          </button>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Abhiram S R • Built with ❤️ using Next.js & Tailwind
        </motion.p>
      </div>
    </section>
  );
}
