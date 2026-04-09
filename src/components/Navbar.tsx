import { motion } from "framer-motion";

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
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-background/40 border-b border-border/30"
    >
      <a href="#home" className="text-lg font-black tracking-[0.3em] text-foreground uppercase">
        CORE
      </a>
      <ul className="hidden sm:flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
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
