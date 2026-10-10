"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { educationData } from "@/data/education";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function Education() {
  return (
    <SectionContainer id="education" className="bg-muted/30">
      <SectionHeading subtitle="Mon parcours académique en génie informatique et sciences">
        Formation académique
      </SectionHeading>

      {/* Timeline verticale */}
      <div className="relative max-w-4xl mx-auto">
        {/* Ligne de timeline */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/20 hidden md:block" />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-blue-500 hidden md:block origin-top"
          style={{ height: "calc(100% - 2rem)" }}
        />

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="relative md:pl-24"
            >
              {/* Timeline dot avec animation */}
              <div className="absolute left-0 top-8 hidden md:block md:left-[1.625rem]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
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
                  
                  {/* Dot principal avec icône */}
                  <div className="relative h-5 w-5 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-600 shadow-lg flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Carte moderne */}
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden transition-all hover:border-primary/30 hover:shadow-2xl"
              >
                {/* Gradient background animé */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Barre de couleur sur le côté */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${
                  index === 0 ? "from-primary via-purple-500 to-blue-500" : "from-blue-500 via-cyan-500 to-teal-500"
                }`} />

                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Badge "En cours" ou "Terminé" */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                    className="inline-flex items-center gap-2 mb-4"
                  >
                    {index === 0 ? (
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-green-600 dark:text-green-400">
                          En cours
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
                        <Award className="w-3 h-3 text-blue-500" />
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                          Validé
                        </span>
                      </div>
                    )}
                  </motion.div>

                  {/* Diplôme */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Séparateur */}
                  <div className="h-px bg-gradient-to-r from-border/40 via-primary/20 to-border/40 mb-4" />

                  {/* Détails */}
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    {/* Institution */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-foreground font-semibold"
                    >
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      {edu.institution}
                    </motion.div>

                    {/* Période */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>

                {/* Barre de progression en bas */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  className={`h-1 bg-gradient-to-r ${
                    index === 0 ? "from-primary via-purple-500 to-blue-500" : "from-blue-500 via-cyan-500 to-teal-500"
                  } origin-left`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Badge de fin */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring" }}
          className="relative md:pl-24 mt-8"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block md:left-[1.625rem]">
            <div className="relative h-5 w-5 rounded-full border-4 border-background bg-gradient-to-br from-blue-500 to-teal-500 shadow-lg" />
          </div>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">
              Parcours académique solide en informatique
            </span>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
