"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub as GitHubIcon, FaLinkedin as LinkedinIcon } from "react-icons/fa";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "anashllmtct8@gmail.com",
    href: "mailto:anashllmtct8@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Anas Halloumi",
    href: "https://www.linkedin.com/in/anas-halloumi",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "@anasIRISI",
    href: "https://github.com/anasIRISI",
  },
];

export function Contact() {
  return (
    <SectionContainer id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading className="text-center">
          Construisons quelque chose ensemble
        </SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Vous avez un projet, une opportunité de stage PFE ou souhaitez simplement
          échanger sur l&apos;IA et le développement logiciel ? N&apos;hésitez pas à
          me contacter.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="rounded-xl bg-primary/10 p-3 mb-4 transition-colors group-hover:bg-primary/20">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{contact.label}</h3>
                <p className="text-sm text-muted-foreground break-all">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            href="mailto:anashllmtct8@gmail.com"
            className="group"
          >
            <Mail className="mr-2 h-5 w-5" />
            Envoyer un email
          </Button>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
