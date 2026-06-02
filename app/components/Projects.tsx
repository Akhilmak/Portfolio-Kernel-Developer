"use client";
import React from "react";
import { motion } from "framer-motion";
import { projectsList } from "../data/portfolioData";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  FaCloud,
  FaRoute,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
  FaCodeBranch
} from "react-icons/fa";

export default function Projects() {
  const getProjectIcon = (type: string) => {
    switch (type) {
      case "cloud":
        return <FaCloud className="h-8 w-8 text-blue-400" />;
      case "timeline":
        return <FaRoute className="h-8 w-8 text-indigo-400" />;
      case "chart":
        return <FaChartLine className="h-8 w-8 text-sky-400" />;
      case "shield":
        return <FaShieldAlt className="h-8 w-8 text-teal-400" />;
      default:
        return <FaCodeBranch className="h-8 w-8 text-blue-400" />;
    }
  };

  return (
    <div className="py-20 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 flex items-center border-l-4 border-blue-500 pl-4"
        >
          <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
            <FaCodeBranch className="mr-3 text-blue-500" />
            Personal Projects
          </span>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex"
            >
              <Card className="flex flex-col justify-between overflow-hidden p-6 w-full">
                <CardContent className="p-0 flex flex-col h-full justify-between">
                  <div>
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="rounded-2xl bg-blue-500/10 p-3">
                        {getProjectIcon(project.iconType)}
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400 mb-6">{project.description}</p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-slate-900 border-slate-800 text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 items-center mt-4">
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        GitHub <FaArrowRight className="h-3 w-3" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors border-l border-slate-800 pl-4"
                        >
                          Live Demo <FaArrowRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
