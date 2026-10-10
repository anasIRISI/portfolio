"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Sparkles, Code2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Floating particles with fixed positions */}
        {[
          { left: '10%', top: '20%', delay: 0 },
          { left: '25%', top: '45%', delay: 0.5 },
          { left: '15%', top: '70%', delay: 1 },
          { left: '40%', top: '15%', delay: 1.5 },
          { left: '35%', top: '85%', delay: 2 },
          { left: '60%', top: '30%', delay: 2.5 },
          { left: '55%', top: '60%', delay: 3 },
          { left: '70%', top: '25%', delay: 3.5 },
          { left: '75%', top: '80%', delay: 4 },
          { left: '85%', top: '50%', delay: 4.5 },
          { left: '90%', top: '10%', delay: 0.2 },
          { left: '20%', top: '55%', delay: 0.7 },
          { left: '50%', top: '40%', delay: 1.2 },
          { left: '65%', top: '75%', delay: 1.7 },
          { left: '30%', top: '90%', delay: 2.2 },
          { left: '45%', top: '65%', delay: 2.7 },
          { left: '80%', top: '35%', delay: 3.2 },
          { left: '12%', top: '40%', delay: 3.7 },
          { left: '95%', top: '70%', delay: 4.2 },
          { left: '5%', top: '85%', delay: 4.7 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <span className="inline-flex items-center rounded-full border border-border/40 bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-lg">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponible pour un stage PFE — 2027
              </span>
              
              <span className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-lg">
                <span className="mr-2 text-base">🌍</span>
                Mobilité internationale
              </span>
            </motion.div>

            {/* Title with gradient */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-4"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Anas Halloumi
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span className="text-muted-foreground">Ingénieur</span>
                <span className="inline-flex items-center gap-2 text-primary">
                  <Brain className="w-8 h-8" />
                  IA
                </span>
                <span className="text-muted-foreground">&</span>
                <span className="inline-flex items-center gap-2 text-blue-500">
                  <Code2 className="w-8 h-8" />
                  Dev
                </span>
              </h2>
            </motion.div>

            {/* Description with icons */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Je conçois des{" "}
              <span className="text-primary font-semibold">applications web intelligentes</span>{" "}
              et des solutions basées sur l&apos;IA, de l&apos;interface utilisateur aux{" "}
              <span className="text-blue-500 font-semibold">agents IA</span>, APIs et systèmes RAG.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8"
            >
              <Button
                size="lg"
                onClick={() => handleScrollTo("#projects")}
                className="group w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                href="/cv/cv-anas-halloumi.pdf"
                className="w-full sm:w-auto border-2 hover:border-primary/50 hover:bg-primary/5"
              >
                <FileText className="mr-2 h-4 w-4" />
                Mon CV
              </Button>

              <Button
                size="lg"
                variant="ghost"
                onClick={() => handleScrollTo("#contact")}
                className="w-full sm:w-auto hover:bg-primary/10"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {["intelligence artificielle", "développement logiciel", "DevOps"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings around image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-8 rounded-full border-2 border-dashed border-blue-500/20"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-500/20 rounded-full blur-3xl" />
              
              {/* Image container */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/Photos/photo-portfollio.png"
                    alt="Anas Halloumi"
                    fill
                    className="object-cover scale-110 translate-y-7"
                    style={{ objectPosition: '58% 20%' }}
                    priority
                  />
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-border/40 rounded-full px-6 py-3 shadow-xl"
              >
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2 cursor-pointer hover:border-primary/50 transition-colors"
          onClick={() => handleScrollTo("#about")}
        >
          <motion.div className="w-1 h-2 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
