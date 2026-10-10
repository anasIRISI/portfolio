"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";
import { 
  Code2, 
  Database, 
  Server, 
  Sparkles, 
  Wrench,
  FileCode2,
} from "lucide-react";

// Icons pour chaque catégorie
const categoryIcons: Record<string, any> = {
  "Langages": FileCode2,
  "Frontend": Code2,
  "Backend": Server,
  "AI / GenAI": Sparkles,
  "Database": Database,
  "DevOps": Wrench,
};

// Couleurs pour chaque catégorie
const categoryColors: Record<string, string> = {
  "Langages": "from-indigo-500 to-blue-600",
  "Frontend": "from-blue-500 to-cyan-500",
  "Backend": "from-green-500 to-emerald-500",
  "AI / GenAI": "from-purple-500 to-pink-500",
  "Database": "from-orange-500 to-red-500",
  "DevOps": "from-yellow-500 to-orange-500",
};

// Descriptions pour chaque catégorie
const categoryDescriptions: Record<string, string> = {
  "Langages": "Langages de programmation maîtrisés",
  "Frontend": "Développement d'interfaces utilisateur",
  "Backend": "Développement côté serveur",
  "AI / GenAI": "Intelligence artificielle et IA générative",
  "Database": "Gestion et stockage des données",
  "DevOps": "Déploiement et automatisation",
};

export function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeading subtitle="Technologies et outils que je maîtrise pour créer des solutions innovantes">
        Stack technique
      </SectionHeading>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, categoryIndex) => {
          const Icon = categoryIcons[category.category] || Code2;
          const colorClass = categoryColors[category.category] || "from-gray-500 to-gray-600";
          const description = categoryDescriptions[category.category] || "";

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group relative"
            >
              {/* Carte principale */}
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden transition-all hover:border-border hover:shadow-2xl h-full"
              >
                {/* Gradient animé au survol */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass}`} />
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />

                {/* Header avec icône et titre */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start gap-4">
                    {/* Icône avec animation */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${colorClass} shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    {/* Titre et description */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>

                    {/* Badge compteur */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                    >
                      {category.skills.length}
                    </motion.div>
                  </div>
                </div>

                {/* Séparateur */}
                <div className="relative px-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Skills avec animation cascade */}
                <div className="relative p-6 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.03,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.15, y: -4 }}
                      >
                        <Badge
                          variant="outline"
                          className="relative text-xs font-medium bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default group/badge overflow-hidden"
                        >
                          {/* Hover effect background */}
                          <span className={`absolute inset-0 bg-gradient-to-r ${colorClass} opacity-0 group-hover/badge:opacity-10 transition-opacity`} />
                          <span className="relative">{skill}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Barre de couleur en bas avec animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.3 }}
                  className={`h-1.5 bg-gradient-to-r ${colorClass} origin-left`}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats modernes en bas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16"
      >
        <div className="relative rounded-2xl border border-border/40 bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm p-8 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>

          {/* Stats */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Langages", value: "6+", color: "from-indigo-500 to-blue-600" },
              { label: "Frameworks", value: "12+", color: "from-blue-500 to-cyan-500" },
              { label: "Années", value: "3+", color: "from-purple-500 to-pink-500" },
              { label: "Projets", value: "15+", color: "from-green-500 to-emerald-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6 + i * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center relative group"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`} />
                
                <div className="relative">
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
