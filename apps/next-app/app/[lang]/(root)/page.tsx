"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { useTranslation } from "@/hooks/use-translation";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import React from "react";
import {
  Check,
  Shield,
  Globe,
  Zap,
  BarChart3,
  Star,
  CreditCard,
  Users,
  Brain,
  Code,
  Layers,
  Palette,
  Play,
  Settings,
  FileText,
  BookOpen,
  Calendar,
  MessageSquare,
  Terminal,
  Database,
  Table2,
  CheckSquare,
  Bot,
  Mail,
  HardDrive,
  Video,
  ChevronDown
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { translations } from "@libs/i18n";

interface PageProps {
  params: { lang: string }
}

// export default async function Home({ params }: PageProps) {
//   const { lang } = await params;
//   const t = translations[lang as keyof typeof translations];

//   return (
//     <>
//       <ClientHomePage t={t} />
//     </>
//   );
// }

// Icon mappings for features
const iconMap = [Calendar, Layers, Bot, Terminal, Zap, Code, Globe, Shield];

const appIconMap = [Bot, Zap, BookOpen];
const appImageMap = [
  "/images/features/ai-doc-1.png",
  "/images/features/calendar-demo.png",
  "/images/features/ai-doc-3.png"
];
const roadmapIconMap = [Check, Settings, BookOpen, Palette, Play, FileText];
const domainIconMap: Record<string, any> = {
  MessageSquare, FileText, Database, Table2, Calendar, CheckSquare, Mail, BookOpen, HardDrive, Users, Video
};

// Client component for interactive features
export default function Home() {
  const { t, locale: currentLocale } = useTranslation();
  const [stats, setStats] = useState({
    developers: 0,
    frameworks: 0,
    features: 0,
    satisfaction: 0
  });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  // Animate stats numbers
  useEffect(() => {
    if (isStatsInView) {
      const animateValue = (start: number, end: number, duration: number, setter: (value: number) => void) => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setter(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };

      animateValue(0, 5900, 2000, (value) => setStats(prev => ({ ...prev, developers: value })));
      animateValue(0, 11, 2000, (value) => setStats(prev => ({ ...prev, frameworks: value })));
      animateValue(0, 200, 2500, (value) => setStats(prev => ({ ...prev, features: value })));
      animateValue(0, 19, 2000, (value) => setStats(prev => ({ ...prev, satisfaction: value })));
    }
  }, [isStatsInView]);

  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <div className="flex flex-col min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
            <div className="absolute top-20 left-10 w-72 h-72 bg-chart-1 rounded-full filter blur-3xl opacity-15 dark:opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-chart-2 rounded-full filter blur-3xl opacity-15 dark:opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-chart-4 rounded-full filter blur-3xl opacity-15 dark:opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div 
              className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.home.hero.titlePrefix}
                <span className="text-gradient-chart-warm">
                  {t.home.hero.titleHighlight}
                </span>
                {t.home.hero.titleSuffix}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.home.hero.subtitle}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  {t.home.hero.buttons.purchase}
                </Button>
                <a href="https://github.com/larksuite/cli" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {t.home.hero.buttons.demo}
                  </Button>
                </a>
              </motion.div>

              <motion.div 
                className="flex items-center gap-6 text-sm text-muted-foreground pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{t.home.hero.features.lifetime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{t.home.hero.features.earlyBird}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.features.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.home.features.subtitle}
              </p>
            </motion.div>

            <BentoGrid className="max-w-7xl mx-auto auto-rows-[14rem] grid-cols-4 gap-4">
              {t.home.features.items.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BentoCard
                    name={feature.title}
                    description={feature.description}
                    Icon={iconMap[index]}
                    className={`${feature.className} group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl bg-card border border-border hover:border-border/80 h-full`}
                    background={
                      <div 
                        className="absolute inset-0 opacity-5 dark:opacity-15 group-hover:opacity-10 dark:group-hover:opacity-25 transition-opacity duration-300 rounded-xl bg-gradient-chart-warm"
                      />
                    }
                    cta={t.home.common.learnMore}
                    href='#'
                  />
                </motion.div>
              ))}
            </BentoGrid>

            {/* Tech Stack Display */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-8">{t.home.features.techStack.title}</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
                {t.home.features.techStack.items.map((tech: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm">
                    <div className={`w-2 h-2 bg-chart-${(index % 5) + 1} rounded-full`}></div>
                    <span className="text-card-foreground font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Features Details */}
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.applicationFeatures.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.home.applicationFeatures.subtitle}
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Left: Feature List */}
                <div className="lg:col-span-2 space-y-4">
                  {t.home.applicationFeatures.items.map((feature: any, index: number) => (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        activeFeature === index
                          ? 'border-primary bg-primary/5 shadow-lg'
                          : 'border-border bg-card hover:border-border/80 hover:shadow-md'
                      }`}
                      onClick={() => setActiveFeature(index)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg ${
                            activeFeature === index
                              ? 'bg-chart-1'
                              : 'bg-muted-foreground'
                          }`}>
                            {index + 1}
                          </div>
                          <h3 className={`text-lg font-bold ${
                            activeFeature === index ? 'text-primary' : 'text-foreground'
                          }`}>
                            {feature.title}
                          </h3>
                        </div>
                        <p className={`text-sm leading-relaxed pl-13 ${
                          activeFeature === index ? 'text-primary/80' : 'text-muted-foreground'
                        }`}>
                          {feature.subtitle}
                        </p>
                        {/* Show highlights for active item */}
                        {activeFeature === index && (
                          <motion.div 
                            className="pl-13 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                          >
                            {feature.highlights.slice(0, 3).map((highlight: string, idx: number) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-chart-1"></div>
                                <span className="text-primary/80 text-xs font-medium">{highlight}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right: Image and Description */}
                <div className="lg:col-span-3">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {/* Feature image */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 to-muted rounded-2xl border border-border overflow-hidden">
                      <Image
                        src={appImageMap[activeFeature]}
                        alt={t.home.applicationFeatures.items[activeFeature].imageTitle}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Description */}
                    <div className="p-6 bg-muted/50 rounded-2xl">
                      <p className="text-muted-foreground leading-relaxed">
                        {t.home.applicationFeatures.items[activeFeature].description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Technical advantage tip */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-muted/50 rounded-full border border-border">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse animation-delay-2000"></div>
                  <div className="w-2 h-2 bg-chart-3 rounded-full animate-pulse animation-delay-4000"></div>
                </div>
                <span className="text-muted-foreground font-medium">{t.home.common.techArchitecture}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Domains Section */}
        <section className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.domains.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.home.domains.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {t.home.domains.items.map((domain: any, index: number) => {
                const IconComponent = domainIconMap[domain.icon] || Globe;
                return (
                  <motion.div
                    key={index}
                    className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{domain.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{domain.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Command Showcase Section */}
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.commandShowcase.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.home.commandShowcase.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {t.home.commandShowcase.tiers.map((tier: any, index: number) => (
                <motion.div
                  key={index}
                  className="rounded-2xl border-2 border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">{tier.badge}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>
                  <div className="p-4 space-y-2">
                    {tier.commands.map((cmd: string, idx: number) => (
                      <div key={idx} className="bg-muted/50 rounded-lg p-3 font-mono text-xs text-foreground overflow-x-auto">
                        <span className="text-primary/70">$</span> {cmd}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-muted/50" id="use-cases">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.useCases.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.home.useCases.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {t.home.useCases.items.map((useCase: any, index: number) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-chart-1/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-chart-1 font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-foreground">{useCase.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                      <div className="bg-muted/50 rounded-lg p-3 border border-border">
                        <p className="text-xs font-mono text-primary/80 italic">{useCase.command}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24 bg-background" id="quickstart">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.roadmap.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.home.roadmap.subtitle}
              </p>
            </motion.div>

            {/* Horizontal scroll container */}
            <div className="relative">
              <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-hide">
                {t.home.roadmap.items.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-80 snap-start"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline node */}
                    <div className="flex items-center mb-4">
                      <div className={`w-4 h-4 rounded-full border-4 ${
                        item.status === 'completed' 
                          ? 'bg-chart-1 border-chart-1/30' 
                          : item.status === 'in-progress'
                          ? 'bg-chart-2 border-chart-2/30'
                          : 'bg-muted-foreground border-muted'
                      } shadow-lg mr-3`}>
                        {item.status === 'completed' && (
                          <Check className="w-2 h-2 text-white absolute -top-1 -left-1" />
                        )}
                      </div>
                      <div className="flex-1 h-0.5 bg-chart-1/20"></div>
                    </div>

                    {/* Content card */}
                    <div className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-80 ${
                      item.status === 'completed' 
                        ? 'border-chart-1 bg-chart-1/5' 
                        : item.status === 'in-progress'
                        ? 'border-chart-2 bg-chart-2/5'
                        : 'border-border bg-card hover:border-border/80'
                    }`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                          item.status === 'completed' 
                            ? 'bg-chart-1 text-white' 
                            : item.status === 'in-progress'
                            ? 'bg-chart-2 text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {React.createElement(roadmapIconMap[index], {
                            className: "h-6 w-6"
                          })}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground line-clamp-2">{item.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === 'completed' 
                                ? 'bg-chart-1/20 text-chart-1' 
                                : item.status === 'in-progress'
                                ? 'bg-chart-2/20 text-chart-2'
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {item.statusText}
                            </span>
                            <span className="text-sm text-muted-foreground font-medium">{item.timeline}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm line-clamp-3">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature: string, idx: number) => (
                          <span 
                            key={idx} 
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === 'completed' 
                                ? 'bg-chart-1/10 text-chart-1' 
                                : item.status === 'in-progress'
                                ? 'bg-chart-2/10 text-chart-2'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom tip */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-chart-1/5 rounded-full border border-chart-1/20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-chart-1/80 rounded-full animate-pulse animation-delay-2000"></div>
                  <div className="w-2 h-2 bg-chart-1/60 rounded-full animate-pulse animation-delay-4000"></div>
                </div>
                <span className="text-chart-1 font-medium">{t.home.roadmap.footer}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-background" ref={statsRef}>
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.stats.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {t.home.stats.items.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {[stats.developers, stats.frameworks, stats.features, stats.satisfaction][index].toLocaleString()}{item.suffix}
                  </div>
                  <div className="text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-24 bg-muted/50" id="community">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.community.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.home.community.subtitle}
              </p>
            </motion.div>

            {/* Creator Contest Banner */}
            <motion.div
              className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-r from-chart-1/10 to-chart-2/10 border-2 border-chart-1/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{t.home.community.contest.title}</h3>
                  <p className="text-muted-foreground">{t.home.community.contest.description}</p>
                </div>
                <a href="https://waytoagi.feishu.cn/wiki/Zsp2wxsKEiRTEjkajJFc7FBGnh3" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="rounded-full whitespace-nowrap">
                    {t.home.community.contest.cta}
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Community Cases */}
            <div className="max-w-5xl mx-auto mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t.home.community.cases.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.home.community.cases.items.map((caseItem: any, index: number) => (
                  <motion.div
                    key={index}
                    className="p-5 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">{caseItem.tag}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{caseItem.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{caseItem.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* KOL Reviews */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t.home.community.kols.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.home.community.kols.items.map((kol: any, index: number) => (
                  <motion.div
                    key={index}
                    className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-chart-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">"{kol.quote}"</p>
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-3 ${
                          index === 0 ? 'bg-chart-1' :
                          index === 1 ? 'bg-chart-3' :
                          index === 2 ? 'bg-chart-5' :
                          'bg-chart-2'
                        }`}
                      >
                        {kol.author[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{kol.author}</div>
                        <div className="text-muted-foreground text-xs">{kol.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.home.faq.title}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {t.home.faq.items.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-foreground pr-4">{item.question}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-chart-warm text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-repeat opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t.home.finalCta.title}
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                {t.home.finalCta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  {t.home.finalCta.buttons.purchase}
                </Button>
                <a href="https://github.com/larksuite/cli" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {t.home.finalCta.buttons.demo}
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      
        {/* Footer */}
        <footer className="py-12 bg-muted text-muted-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Logo size="md" />
                <span className="ml-3 text-sm text-muted-foreground">{t.home.footer.description}</span>
              </div>
              <div className="flex items-center space-x-6">
                <a href="https://www.feishu.cn/content/article/7623291503305083853" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t.home.footer.links.officialDocs}
                </a>
                <a href="https://github.com/larksuite/cli" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t.home.footer.links.github}
                </a>
                <a href="https://waytoagi.feishu.cn/wiki/Zsp2wxsKEiRTEjkajJFc7FBGnh3" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t.home.footer.links.community}
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/60">
              <span>{t.home.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</span>
              <span className="mt-2 md:mt-0">{t.home.footer.disclaimer}</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
