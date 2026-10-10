"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { educationData } from "@/data/education";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <SectionContainer id="education">
      <SectionHeading>Formation</SectionHeading>

      <div className="space-y-6 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm p-6 transition-all hover:border-border hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground font-medium mb-2">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {edu.period}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
