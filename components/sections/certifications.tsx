"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { certificationsData } from "@/data/certifications";
import { Award, Shield, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";

// Icônes et couleurs par organisation
const issuerStyles: Record<string, { color: string; icon: any }> = {
  "Oracle": { color: "from-red-500 to-orange-500", icon: Shield },
  "IBM": { color: "from-blue-600 to-blue-800", icon: Shield },
  "Meta": { color: "from-blue-500 to-cyan-500", icon: Shield },
  "Udemy": { color: "from-purple-600 to-pink-600", icon: Award },
  "365 Data": { color: "from-purple-500 to-pink-500", icon: Award },
  "Brightcoding": { color: "from-yellow-500 to-orange-500", icon: Award },
};

export function Certifications() {
  return (
    <SectionContainer id="certifications" className="bg-muted/30">
      <SectionHeading subtitle="Certifications professionnelles validant mes compétences">
        Certifications & Formations
      </SectionHeading>

      {/* Stats en haut */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-8 mb-12 flex-wrap"
      >
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">
            {certificationsData.length}
          </div>
          <div className="text-sm text-muted-foreground">Certifications</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-1">
            5
          </div>
          <div className="text-sm text-muted-foreground">Organismes</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-1">
            100%
          </div>
          <div className="text-sm text-muted-foreground">Validées</div>
        </div>
      </motion.div>

      {/* Grille de certifications */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => {
          const style = issuerStyles[cert.issuer] || { 
            color: "from-gray-500 to-gray-600", 
            icon: Award 
          };
          const Icon = style.icon;

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Carte */}
              <div className="relative h-full rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden transition-all hover:border-border hover:shadow-2xl">
                {/* Gradient background animé */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.color}`} />
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${style.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />

                {/* Header avec badge */}
                <div className={`h-2 bg-gradient-to-r ${style.color}`} />

                {/* Content */}
                <div className="relative p-6">
                  {/* Icône et check */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${style.color} shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Badge vérifié */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.3, type: "spring" }}
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30"
                    >
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                        Validée
                      </span>
                    </motion.div>
                  </div>

                  {/* Titre */}
                  <h3 className="font-bold text-base mb-3 leading-tight group-hover:text-primary transition-colors min-h-[2.5rem]">
                    {cert.title}
                  </h3>

                  {/* Séparateur */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-3" />

                  {/* Footer - Organisme */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${style.color}`} />
                      <span className="text-sm font-medium text-muted-foreground">
                        {cert.issuer}
                      </span>
                    </div>
                    
                    {/* Icon externe (optionnel) */}
                    <motion.div
                      whileHover={{ x: 2, y: -2 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Section en bas avec highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 relative rounded-2xl border border-border/40 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 backdrop-blur-sm p-8 overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        </div>

        {/* Content */}
        <div className="relative text-center">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 mb-4 shadow-lg"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          
          <h3 className="text-xl font-bold mb-2">Formation continue</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Je maintiens mes compétences à jour avec des certifications reconnues dans l&apos;industrie, 
            couvrant l&apos;IA générative, le développement web moderne et les technologies cloud.
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
