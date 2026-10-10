"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Code2, Sparkles, Users, Target, Rocket, Heart } from "lucide-react";

const stats = [
  { label: "Stages", value: "3", suffix: "" },
  { label: "Projets AI / GenAI", value: "5", suffix: "+" },
  { label: "Technologies", value: "15", suffix: "+" },
];

const interests = [
  {
    icon: Sparkles,
    title: "Intelligence Artificielle",
    description: "LLM, RAG, AI Agents, Generative AI",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Développement Web",
    description: "Applications web modernes et performantes",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "DevOps & Cloud",
    description: "CI/CD, Docker, déploiement automatisé",
    color: "from-green-500 to-emerald-500",
  },
];

const values = [
  { icon: Target, label: "Précision", description: "Code de qualité" },
  { icon: Rocket, label: "Innovation", description: "Technologies modernes" },
  { icon: Heart, label: "Passion", description: "Projets d'impact" },
];

export function About() {
  return (
    <SectionContainer id="about" className="bg-muted/30">
      <SectionHeading subtitle="Découvrez mon parcours et ma passion pour la technologie">
        À propos de moi
      </SectionHeading>

      <div className="grid gap-12 lg:gap-16">
        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-blue-500 rounded-full" />
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  👋 Bonjour ! Je suis étudiant en dernière année du cycle d&apos;ingénieur en{" "}
                  <span className="text-primary font-bold">Génie Informatique</span> à
                  l&apos;Université Cadi Ayyad.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionné par l&apos;innovation technologique, je me spécialise dans
                  l&apos;<span className="text-primary font-semibold">intelligence artificielle</span>, le{" "}
                  <span className="text-blue-500 font-semibold">développement logiciel</span> et le DevOps.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  J&apos;aime transformer des <span className="text-foreground font-semibold">problématiques concrètes</span>{" "}
                  en applications utiles en combinant développement web, données et IA générative.
                  Mon objectif : créer des solutions qui ont un impact réel.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl lg:text-4xl font-bold mb-1 bg-gradient-to-br from-primary to-purple-600 bg-clip-text text-transparent"
                    >
                      {stat.value}{stat.suffix}
                    </motion.div>
                    <div className="text-xs lg:text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6">Domaines d&apos;expertise</h3>
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative p-6 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm transition-all hover:border-border hover:shadow-xl overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-xl bg-gradient-to-br ${interest.color} p-3 shadow-lg`}
                  >
                    <interest.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Mes valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-background to-muted/50 border border-border/40 hover:border-primary/30 hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <value.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h4 className="font-bold text-lg mb-2">{value.label}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
