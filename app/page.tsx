"use client";
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { workExperience, educationHistory } from "./data/portfolioData";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Timeline title="Work Experience" type="work" items={workExperience} />
      </section>

      <section id="education">
        <Timeline title="Education History" type="education" items={educationHistory} />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
