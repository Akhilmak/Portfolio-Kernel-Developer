"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaCodeBranch } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import { Badge } from "./ui/badge";

export default function Hero() {
  return (
    <div className="relative flex min-h-[75vh] flex-col justify-center px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Developer Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="glow" className="flex items-center gap-2 py-1.5 px-4 text-xs tracking-wider uppercase">
              <FaTerminal className="text-blue-400" />
              {personalInfo.label}
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-blue-400 bg-clip-text text-transparent">
              {personalInfo.headline}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-xl font-bold text-blue-400 sm:text-2xl"
          >
            {personalInfo.tagline}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {personalInfo.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="/Akhil Kumar Madineni - AI Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-95"
            >
              <FaCodeBranch className="transition-transform group-hover:rotate-12" />
              Resume / CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
