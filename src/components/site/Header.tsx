import { Plane, Sparkles } from "lucide-react";

const links = [
  { href: "#about", label: "О проекте" },
  { href: "#features", label: "Преимущества" },
  { href: "#stats", label: "Статистика" },
  { href: "#ai", label: "AI-консультант" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))]">
      <div className="glass-strong rounded-2xl px-5 py-3 flex items-center justify-between shadow-elegant">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 gradient-hero rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative gradient-hero w-9 h-9 rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight font-display">Travel Radar LK</span>
            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-secondary" /> AI Powered
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#ai"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-hero text-primary-foreground text-sm font-medium shadow-glow hover:scale-105 transition-transform"
        >
          <Sparkles className="w-4 h-4" /> Попробовать AI
        </a>
      </div>
    </header>
  );
}
