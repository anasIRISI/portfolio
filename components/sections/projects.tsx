"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projects";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub as GitHubIcon } from "react-icons/fa";

export function Projects() {
  return (
    <SectionContainer id="projects" className="bg-muted/30">
      <SectionHeading subtitle="Découvrez mes réalisations en IA générative et développement web">
        Projets sélectionnés
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`group relative rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden transition-all hover:border-primary/30 hover:shadow-2xl ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-6 left-6 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                >
                  <Star className="w-3 h-3 fill-white" />
                  Projet phare
                </motion.div>
              </div>
            )}

            {/* Project Image/Header with gradient */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20 overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              
              {/* Animated gradient overlay */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"
              />
              
              {/* Project initial letter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-8xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors"
                >
                  {project.title.charAt(0)}
                </motion.div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-background/90 backdrop-blur-sm shadow-lg border-primary/20">
                  {project.category}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Badge variant="outline" className="hover:bg-primary/10 hover:border-primary/30 transition-colors">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
                  >
                    <GitHubIcon className="h-4 w-4 group-hover/link:text-primary transition-colors" />
                    Code source
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    Voir le projet
                  </motion.a>
                )}
                {!project.github && !project.demo && (
                  <span className="text-sm text-muted-foreground italic flex items-center gap-2">
                    🔒 Projet confidentiel
                  </span>
                )}
              </div>
            </div>

            {/* Hover effect gradient border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0" />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
