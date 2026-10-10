"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/experience";
import { MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <SectionContainer id="experience">
      <SectionHeading>Expériences</SectionHeading>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border/40 hidden md:block md:left-8" />

        <div className="space-y-8 md:space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 hidden md:block md:left-[1.875rem]">
                <div className="h-4 w-4 rounded-full border-4 border-background bg-primary" />
              </div>

              {/* Content Card */}
              <div className="group rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm p-6 transition-all hover:border-border hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
