import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, HelpCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--glow-accent)/0.06)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[hsl(var(--glow-primary)/0.03)] blur-[100px] pointer-events-none" />

      {/* Hero glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card rounded-2xl p-8 md:p-12 w-full max-w-3xl relative z-10"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center text-foreground text-glow mb-8"
        >
          REDEFINE YOUR LUCK
        </motion.h1>

        {/* 16:9 Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="aspect-video w-full rounded-xl bg-accent/50 border border-border flex items-center justify-center mb-8 overflow-hidden relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent" />
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-border flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
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
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8">
            Start Playing
          </Button>
          <Button variant="heroGhost" size="lg" className="text-base px-8">
            <HelpCircle className="w-4 h-4 mr-1" />
            How it Works
          </Button>
        </motion.div>
      </motion.div>

      {/* Subtle bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 text-muted-foreground text-sm tracking-widest uppercase"
      >
        The future of chance
      </motion.p>
    </div>
  );
};

export default Index;
