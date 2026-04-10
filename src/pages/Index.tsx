import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
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
      <Navbar />
      {/* Fixed radial gradient light overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          opacity: smoothOpacity,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(270 40% 50% / 0.06), transparent 70%), radial-gradient(ellipse 50% 40% at 50% 60%, hsl(38 60% 50% / 0.03), transparent 60%)",
        }}
      />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative z-10">
        {/* Full-bleed background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        />
        {/* Dark vignette + gradient overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, hsl(240 15% 6% / 0.8) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/90 pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(270_40%_50%/0.04)] blur-[120px] pointer-events-none" />

        {/* Content on top of video — headline only */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center w-full max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-center text-glow-silver neon-mixed"
          >
            REDEFINE YOUR LUCK
          </motion.h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10 mt-12 text-[hsl(140_15%_42%)] text-sm tracking-widest uppercase neon-blue"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
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
