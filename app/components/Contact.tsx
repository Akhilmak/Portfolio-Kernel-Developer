"use client";
import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

export default function Contact() {
  const socialIcons = [
    { icon: <FaGithub />, link: personalInfo.socials.github, label: "GitHub" },
    { icon: <FaLinkedinIn />, link: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: <FaEnvelope />, link: personalInfo.socials.email, label: "Email" }
  ];

  return (
    <div className="py-20 px-6 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        {/* Glow Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden border border-blue-500/20 bg-slate-950/65 p-8 md:p-12">
            {/* Ambient Back Glow */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

            <CardContent className="p-0">
              <span className="inline-flex rounded-full bg-blue-500/10 p-4 mb-6">
                <FaPaperPlane className="h-6 w-6 text-blue-400" />
              </span>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl mb-4">Let&apos;s connect</h2>
              <p className="mx-auto max-w-lg text-slate-400 mb-8">
                Open for collaborations, freelance roles, or tech discussion. Reach out via email or any of my social profiles.
              </p>

              {/* Social Channels */}
              <div className="flex justify-center gap-4 mb-8">
                {socialIcons.map((channel, idx) => (
                  <motion.a
                    key={idx}
                    href={channel.link}
                    aria-label={channel.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-lg text-blue-400 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-600 hover:text-white"
                  >
                    {channel.icon}
                  </motion.a>
                ))}
              </div>

              <div className="text-sm font-semibold text-slate-500">
                {personalInfo.email} &middot; {personalInfo.location}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-900 pt-8 text-center text-xs text-slate-600">
          <p>&copy; 2026 {personalInfo.name}</p>
        </footer>
      </div>
    </div>
  );
}
