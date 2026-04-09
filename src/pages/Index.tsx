import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import MechanicsSection from "@/components/MechanicsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

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

          {/* 16:9 Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="aspect-video w-full rounded-xl border border-border mb-8 overflow-hidden relative"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="/hero-video.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/40 pointer-events-none" />
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

      {/* Mechanics Section */}
      <MechanicsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
