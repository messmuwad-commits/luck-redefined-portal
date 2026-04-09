import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, HelpCircle } from "lucide-react";

const Index = () => {
  const scrollOpacity = useMotionValue(0.15);
  const smoothOpacity = useSpring(scrollOpacity, { damping: 30, stiffness: 120 });
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollOpacity.set(0.7);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        scrollOpacity.set(0.15);
      }, 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, [scrollOpacity]);

  return (
    <div className="min-h-[200vh] bg-background relative overflow-hidden">
      {/* Fixed radial gradient light overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          opacity: smoothOpacity,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(180 100% 50% / 0.07), transparent 70%), radial-gradient(ellipse 50% 40% at 50% 60%, hsl(0 0% 100% / 0.04), transparent 60%)",
        }}
      />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative z-10">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(180_100%_50%/0.04)] blur-[120px] pointer-events-none" />

        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl p-8 md:p-12 w-full max-w-3xl relative"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center text-glow-silver mb-8"
          >
            REDEFINE YOUR LUCK
          </motion.h1>

          {/* 16:9 Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="aspect-video w-full rounded-xl bg-accent/40 border border-border flex items-center justify-center mb-8 overflow-hidden relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent" />
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="w-16 h-16 rounded-full bg-[hsl(180_100%_50%/0.06)] border border-[hsl(180_100%_50%/0.15)] flex items-center justify-center group-hover:bg-[hsl(180_100%_50%/0.12)] transition-all duration-500">
                <Play className="w-7 h-7 text-muted-foreground ml-1" />
              </div>
              <span className="text-muted-foreground text-sm font-medium tracking-wide">
                3D Dice Preview
              </span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" className="text-base px-8 btn-cyan-pulse">
              Start Playing
            </Button>
            <Button variant="heroGhost" size="lg" className="text-base px-8 btn-glow-border">
              <HelpCircle className="w-4 h-4 mr-1" />
              How it Works
            </Button>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-muted-foreground text-sm tracking-widest uppercase"
        >
          The future of chance
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
