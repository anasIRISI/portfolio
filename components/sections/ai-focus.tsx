"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowDown, Database, FileText, MessageSquare, User } from "lucide-react";

const flowSteps = [
  {
    icon: User,
    label: "User",
    description: "Requête utilisateur",
  },
  {
    icon: MessageSquare,
    label: "AI Agent",
    description: "Analyse intelligente",
  },
  {
    icon: Database,
    label: "Tools / RAG",
    description: "Accès données & documents",
  },
  {
    icon: FileText,
    label: "Database / Docs",
    description: "Sources de données",
  },
];

const technologies = [
  "LLM",
  "RAG",
  "AI Agents",
  "Natural Language → Data",
  "Intelligent Web Applications",
];

export function AIFocus() {
  return (
    <SectionContainer id="ai-focus" className="bg-muted/30">
      <SectionHeading subtitle="Mon orientation vers l'IA appliquée et les systèmes intelligents">
        Ce qui m&apos;intéresse
      </SectionHeading>

      <div className="grid gap-12 lg:grid-cols-2 items-center">
        {/* Left - Technologies */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Je suis passionné par la création d&apos;applications web intelligentes qui
            exploitent la puissance des LLM et du RAG pour transformer la manière dont
            les utilisateurs interagissent avec les données.
          </p>

          <div className="space-y-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
                <span className="text-lg font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="space-y-4">
            {flowSteps.map((step, index) => (
              <div key={step.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base mb-1">{step.label}</h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow between steps */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="flex justify-center py-2"
                  >
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <ArrowDown className="h-5 w-5 text-primary/40" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Answer badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 flex justify-center"
          >
            <div className="rounded-full border-2 border-primary/40 bg-primary/10 px-6 py-3">
              <span className="font-semibold text-primary">Answer</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
