"use client";
import React from "react";
import { motion } from "framer-motion";
import { TimelineItem } from "../data/portfolioData";
import {
  FaCode,
  FaLaptopCode,
  FaTerminal,
  FaBuilding,
  FaUniversity,
  FaMicrochip,
  FaCertificate,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface TimelineProps {
  title: string;
  type: "work" | "education";
  items: TimelineItem[];
}

export default function Timeline({ title, type, items }: TimelineProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "code":
        return <FaCode className="h-5 w-5 text-blue-400" />;
      case "laptop":
        return <FaLaptopCode className="h-5 w-5 text-indigo-400" />;
      case "terminal":
        return <FaTerminal className="h-5 w-5 text-sky-400" />;
      case "university":
        return <FaUniversity className="h-5 w-5 text-emerald-400" />;
      case "microchip":
        return <FaMicrochip className="h-5 w-5 text-amber-400" />;
      case "certificate":
        return <FaCertificate className="h-5 w-5 text-cyan-400" />;
      default:
        return <FaCode className="h-5 w-5 text-blue-400" />;
    }
  };

  const sectionIcon =
    type === "work" ? (
      <FaBriefcase className="mr-3 text-blue-500" />
    ) : (
      <FaGraduationCap className="mr-3 text-indigo-500" />
    );

  return (
    <div className="py-16 px-6 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center border-l-4 border-blue-500 pl-4"
        >
          <span className="text-2xl md:text-3xl font-extrabold text-white flex items-center">
            {sectionIcon}
            {title}
          </span>
        </motion.div>

        {/* Alternate Center Timeline */}
        <div className="relative w-full">
          {/* Central Vertical Line (hidden on mobile, centered on desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full pl-10 md:pl-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline marker with custom icon */}
                  <div className="absolute left-4 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-transform duration-300 hover:scale-110">
                    {getIcon(item.iconType)}
                  </div>

                  {/* Main Info Card (Left or Right side depending on parity) */}
                  <div className="w-full md:w-[45%]">
                    <Card className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      {/* Visual side glow */}
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-500 to-indigo-500" />
                      
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <Badge variant="glow" className="text-[10px] font-bold uppercase tracking-wider">
                            {item.date}
                          </Badge>
                          {item.location && (
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                              <FaMapMarkerAlt className="text-rose-400" />
                              {item.location}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-sm font-semibold text-blue-400 mb-4">{item.subtitle}</p>
                        <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty/Opposite Side for Desktop (renders the date badge floating on the alternate side) */}
                  <div className={`hidden md:flex w-[45%] items-center px-6 ${
                    isEven ? "justify-start" : "justify-end"
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default"
                    >
                      <Badge variant="glow" className="px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider">
                        {item.date}
                      </Badge>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
