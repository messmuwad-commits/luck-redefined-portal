import { motion } from "framer-motion";
import { Dice5, Shield, Zap } from "lucide-react";

const cards = [
  {
    title: "True Randomness",
    description: "Every roll powered by cryptographic entropy — no patterns, no predictions, pure chance.",
    icon: Dice5,
    floatDelay: 0,
  },
  {
    title: "Obsidian Security",
    description: "Military-grade encryption seals every roll. Your outcomes are tamper-proof, verified on-chain like black dots cast in obsidian.",
    icon: Shield,
    floatDelay: 1.2,
  },
  {
    title: "Instant Rewards",
    description: "Winnings hit your wallet the moment the dice settle. Zero delays, zero friction.",
    icon: Zap,
    floatDelay: 0.6,
  },
];

const MechanicsSection = () => {
  return (
    <section id="mechanics" className="relative z-10 px-4 pb-32 pt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-black tracking-tight text-center text-glow-silver neon-mixed mb-16"
      >
        HOW IT WORKS
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group glass-card card-glow-border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.floatDelay,
              }}
              className="relative z-10 w-14 h-14 rounded-xl bg-[hsl(270_40%_50%/0.1)] border border-[hsl(270_40%_50%/0.25)] flex items-center justify-center mb-6 group-hover:bg-[hsl(270_40%_50%/0.18)] transition-colors duration-500"
            >
              <card.icon className="w-7 h-7 text-[hsl(270_40%_55%)] drop-shadow-[0_0_8px_hsl(270_40%_50%/0.5)]" />
            </motion.div>

            <h3 className="relative z-10 text-lg font-bold text-foreground mb-3 tracking-wide neon-blue">
              {card.title}
            </h3>
            <p className="relative z-10 text-muted-foreground text-sm leading-relaxed neon-gold">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MechanicsSection;
