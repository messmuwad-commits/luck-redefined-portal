import { Twitter, MessageCircle, Github } from "lucide-react";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 pb-8 pt-0">
      <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-[hsl(270_40%_50%/0.35)] to-transparent mb-8" />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          © 2026 CORE — REDEFINE LUCK
        </p>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-muted-foreground hover:text-[hsl(270_40%_55%)] transition-colors duration-300"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
