import { motion } from "framer-motion";
import d20Logo from "@/assets/d20-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Mechanics", href: "#mechanics" },
  { label: "Exclusives", href: "#exclusives" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-3 backdrop-blur-xl bg-background/30 border-b border-glass-border/20"
    >
      <a href="#home" className="flex items-center gap-2.5">
        <img
          src={d20Logo}
          alt="CORE logo"
          className="w-8 h-8 drop-shadow-[0_0_10px_hsl(270_40%_55%/0.5)]"
        />
        <span className="text-lg font-black tracking-[0.3em] text-brand-core uppercase">
          CORE
        </span>
      </a>
      <ul className="hidden sm:flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-rajdhani text-sm font-semibold tracking-wider text-muted-foreground/50 hover:text-brand-core transition-all duration-400"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
