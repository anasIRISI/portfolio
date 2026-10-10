"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/experience";
import { MapPin, Calendar, Briefcase, ChevronRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <SectionContainer id="experience">
      <SectionHeading subtitle="Mon parcours professionnel en développement et intelligence artificielle">
        Expériences professionnelles
      </SectionHeading>

      <div ref={containerRef} className="relative">
        {/* Timeline line verticale animée */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/20 hidden md:block" />
        <motion.div
          className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-blue-500 hidden md:block origin-top"
          style={{
            scaleY: scrollYProgress,
          }}
        />

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="relative md:pl-24"
            >
              {/* Timeline dot avec pulse animation */}
              <div className="absolute left-0 top-8 hidden md:block md:left-[1.625rem]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="relative"
                >
                  {/* Pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                  
                  {/* Dot principal */}
                  <div className="relative h-5 w-5 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-600 shadow-lg" />
                </motion.div>
              </div>

              {/* Content Card moderne */}
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden transition-all hover:border-primary/30 hover:shadow-2xl"
              >
                {/* Gradient animé en background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Barre de couleur sur le côté */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-blue-500" />

                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      {/* Badge numéro d'expérience */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="inline-flex items-center gap-2 mb-3"
                      >
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
                          <Briefcase className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-bold text-primary">
                            Stage {experienceData.length - index}
                          </span>
                        </div>
                      </motion.div>

                      {/* Titre du poste */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>

                      {/* Entreprise et localisation */}
                      <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-2 text-foreground font-semibold"
                        >
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                            <Briefcase className="h-4 w-4 text-primary" />
                          </div>
                          {exp.company}
                        </motion.div>
                        
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Période */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/40 shrink-0"
                    >
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </motion.div>
                  </div>

                  {/* Séparateur */}
                  <div className="h-px bg-gradient-to-r from-border/40 via-primary/20 to-border/40 mb-4" />

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies avec animations */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">Technologies utilisées</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + techIndex * 0.03,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="relative bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all cursor-default group/badge"
                          >
                            <span className="relative z-10">{tech}</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity"
                            />
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover indicator en bas */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 origin-left"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Badge de fin de timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="relative md:pl-24 mt-12"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block md:left-[1.625rem]">
            <div className="relative h-5 w-5 rounded-full border-4 border-background bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full bg-green-500"
              />
            </div>
          </div>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              Disponible pour de nouvelles opportunités
            </span>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
