"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Code2, Sparkles, Users, Target, Rocket, Heart, Terminal as TerminalIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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

// Commandes disponibles pour le terminal
const terminalCommands: Record<string, string> = {
  help: `Commandes disponibles:
  • whoami - Informations personnelles
  • skills - Compétences techniques
  • projects - Mes projets
  • experience - Expériences professionnelles
  • education - Formation académique
  • contact - Coordonnées
  • clear - Effacer le terminal`,
  
  whoami: `Anas Halloumi
👨‍💻 Étudiant Ingénieur en Génie Informatique
🎓 Université Cadi Ayyad, Marrakech
🔍 Spécialisation: IA & Développement Logiciel
🎯 Passionné par l'innovation et les nouvelles technologies
🚀 Disponible pour stage PFE 2027`,

  skills: `Stack Technique:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔷 Langages: Python, Java, PHP, C, JavaScript, TypeScript
🔷 Frontend: React.js, Next.js, Tailwind CSS
🔷 Backend: Spring Boot, FastAPI, Laravel
🔷 AI/GenAI: LLM, RAG, AI Agents, LangChain, TensorFlow
🔷 Database: PostgreSQL, MySQL, Redis
🔷 DevOps: Docker, Git, CI/CD`,

  projects: `Projets Principaux:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. 🏛️ Assistance Juridique Intelligente
   → Application web avec RAG et IA générative
   → Spring Boot, React.js, Gemini API

2. 🕌 Plateforme Patrimoine Marocain
   → Exploration de monuments historiques
   → React.js, Django REST, OpenStreetMap, LLM

3. 📱 Marketplace Mobile
   → Achat/vente de matériel informatique
   → Android Studio, Firebase, Cloudinary

4. 🚗 Location de Véhicules
   → Plateforme de réservation web
   → Laravel, PHP, MySQL, Tailwind CSS`,

  experience: `Expériences Professionnelles:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Polydesign - Tanger (Août-Sept 2026)
   Ingénieur IA & Développement Web
   → Chatbot IA, SQL read-only, RAG

📍 3LM - Tunis (Juin-Juillet 2026)
   Ingénieur IA & Développement Web
   → App énergétique marché belge, LLM

📍 Aptiv - Tanger (Juillet-Août 2025)
   Ingénieur en Développement Web
   → Digitalisation services internes`,

  education: `Formation Académique:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 Cycle d'Ingénieur - Génie Informatique
   Université Cadi Ayyad, Marrakech
   2024 - 2027 (en cours)
   
🎓 Classes Préparatoires CPGE
   Mathématiques & Physique
   2022 - 2024`,

  contact: `Coordonnées:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email: anashllmtct8@gmail.com
💼 LinkedIn: linkedin.com/in/anas-halloumi
🐙 GitHub: github.com/anasIRISI
📍 Localisation: Marrakech, Maroc`,
};

function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ type: "command" | "output"; content: string }>>([
    { type: "output", content: "Bienvenue sur mon portfolio interactif! 👋" },
    { type: "output", content: "Tapez 'help' pour voir les commandes disponibles." },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    // Ajouter la commande à l'historique
    setHistory((prev) => [...prev, { type: "command", content: `$ ${cmd}` }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    // Traiter la commande
    if (trimmedCmd === "clear") {
      setTimeout(() => {
        setHistory([
          { type: "output", content: "Terminal effacé. Tapez 'help' pour voir les commandes." },
        ]);
      }, 100);
    } else if (terminalCommands[trimmedCmd]) {
      setHistory((prev) => [...prev, { type: "output", content: terminalCommands[trimmedCmd] }]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "output", content: `❌ Commande '${cmd}' non reconnue. Tapez 'help' pour voir les commandes disponibles.` },
      ]);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(newIndex === commandHistory.length - 1 ? "" : commandHistory[newIndex]);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative rounded-2xl border border-border/40 bg-[#0D1117] overflow-hidden shadow-2xl"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-border/20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <TerminalIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400 font-mono">anas@portfolio:~</span>
          </div>
        </div>
        <div className="text-xs text-gray-500 font-mono">Interactive CLI</div>
      </div>

      {/* Terminal Body */}
      <div
        ref={outputRef}
        className="p-4 h-[400px] overflow-y-auto font-mono text-sm custom-scrollbar"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {item.type === "command" ? (
              <div className="text-green-400 flex items-center gap-2">
                <span className="text-purple-400">➜</span>
                {item.content}
              </div>
            ) : (
              <div className="text-gray-300 whitespace-pre-wrap">{item.content}</div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center gap-2 text-green-400">
          <span className="text-purple-400">➜</span>
          <span className="text-blue-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-gray-100 font-mono caret-green-400"
            spellCheck={false}
          />
          <span className="animate-pulse text-green-400">▊</span>
        </div>
      </div>

      {/* Terminal Footer Hint */}
      <div className="px-4 py-2 bg-[#161B22] border-t border-border/20 flex items-center justify-between text-xs text-gray-500">
        <span>💡 Astuce: Utilisez ↑↓ pour naviguer dans l&apos;historique</span>
        <span className="flex items-center gap-2">
          <kbd className="px-2 py-0.5 rounded bg-[#0D1117] border border-border/20">Entrée</kbd>
          pour exécuter
        </span>
      </div>
    </motion.div>
  );
}

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

        {/* Terminal Interactif */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <TerminalIcon className="w-6 h-6 text-primary" />
              Plus sur moi
            </h3>
            <p className="text-muted-foreground">
              Explorez mon profil via la ligne de commande. Tapez <code className="px-2 py-0.5 rounded bg-muted text-primary font-mono text-sm">help</code> pour commencer.
            </p>
          </motion.div>
          <Terminal />
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0D1117;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #30363D;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #484F58;
        }
      `}</style>
    </SectionContainer>
  );
}
