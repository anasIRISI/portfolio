"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { certificationsData } from "@/data/certifications";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <SectionContainer id="certifications">
      <SectionHeading>Certifications</SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm p-5 transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
