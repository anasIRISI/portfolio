"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievementsData } from "@/data/achievements";
import { Trophy, Award, Sparkles, Medal, Star } from "lucide-react";

export function Achievements() {
  return (
    <SectionContainer id="achievements">
      <SectionHeading subtitle="Hackathons et compétitions techniques auxquels j'ai participé">
        Participations & Distinctions
      </SectionHeading>

      {/* Stats en haut */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-12 mb-12 flex-wrap"
      >
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-1">
            {achievementsData.length}
          </div>
          <div className="text-sm text-muted-foreground">Participations</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">
            1
          </div>
          <div className="text-sm text-muted-foreground">Prix remporté</div>
        </div>
      </motion.div>

      {/* Grille de participations */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {achievementsData.map((achievement, index) => {
          const isWinner = achievement.title.toLowerCase().includes("prix");
          const Icon = isWinner ? Trophy : Medal;

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              {/* Carte */}
              <div className="relative h-full rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden transition-all hover:border-border hover:shadow-2xl">
                {/* Gradient background animé */}
                <motion.div
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${
                    isWinner ? "from-yellow-500/20 via-orange-500/20 to-red-500/20" : "from-blue-500/20 via-purple-500/20 to-pink-500/20"
                  }`}
                />

                {/* Glow effect pour le gagnant */}
                {isWinner && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10" />
                )}

                {/* Badge Winner */}
                {isWinner && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                      className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                    >
                      <Star className="w-3 h-3 fill-white" />
                      Winner
                    </motion.div>
                  </div>
                )}

                {/* Header coloré */}
                <div className={`h-2 bg-gradient-to-r ${
                  isWinner ? "from-yellow-500 via-orange-500 to-red-500" : "from-blue-500 via-purple-500 to-pink-500"
                }`} />

                {/* Content */}
                <div className="relative p-8">
                  {/* Icône principale */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className="mb-6"
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${
                      isWinner ? "from-yellow-500 to-orange-500" : "from-blue-500 to-purple-500"
                    } shadow-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Titre */}
                  <h3 className={`text-3xl font-bold mb-3 ${
                    isWinner ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600" : "text-foreground group-hover:text-primary"
                  } transition-colors`}>
                    {achievement.title}
                  </h3>

                  {/* Séparateur */}
                  <div className={`h-px bg-gradient-to-r ${
                    isWinner ? "from-yellow-500/20 via-orange-500/50 to-yellow-500/20" : "from-blue-500/20 via-purple-500/50 to-blue-500/20"
                  } mb-4`} />

                  {/* Event */}
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 p-2 rounded-lg ${
                      isWinner ? "bg-yellow-500/10" : "bg-primary/10"
                    }`}>
                      <Sparkles className={`w-4 h-4 ${
                        isWinner ? "text-yellow-600" : "text-primary"
                      }`} />
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed flex-1">
                      {achievement.event}
                    </p>
                  </div>
                </div>

                {/* Barre animée en bas */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
                  className={`h-1 bg-gradient-to-r ${
                    isWinner ? "from-yellow-500 via-orange-500 to-red-500" : "from-blue-500 via-purple-500 to-pink-500"
                  } origin-left`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Section encouragement en bas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 relative rounded-2xl border border-border/40 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 backdrop-blur-sm p-8 overflow-hidden max-w-3xl mx-auto"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        </div>

        {/* Content */}
        <div className="relative text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Esprit de compétition</h3>
            <Trophy className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Je participe activement aux hackathons et compétitions techniques pour challenger mes compétences, 
            apprendre de nouvelles technologies et collaborer avec d&apos;autres passionnés.
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
