"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievementsData } from "@/data/achievements";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <SectionContainer id="achievements" className="bg-muted/30">
      <SectionHeading>Participations</SectionHeading>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm p-6 transition-all hover:border-primary/50 hover:shadow-lg"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl transition-all group-hover:scale-150" />
            
            <div className="relative flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.event}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
