"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { personalInfo } from "../data/portfolioData";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Work", to: "work" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Connect", to: "contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-blue-500/20 bg-slate-950/70 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer text-xl font-extrabold tracking-tight text-white transition-all duration-300 hover:opacity-90"
        >
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </ScrollLink>

        <nav>
          <ul className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="text-blue-400 font-semibold"
                  className="cursor-pointer text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-blue-400"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
