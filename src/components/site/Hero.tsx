import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-mexico.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Премиальные путешествия по Мексике"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/70 via-transparent to-coral/30" />
      </div>

      {/* Aurora blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-coral/30 blur-3xl animate-aurora" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-turquoise/30 blur-3xl animate-aurora" style={{ animationDelay: "-10s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-[fade-up_0.6s_ease-out]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="text-xs text-foreground/90 tracking-wide">
            <MapPin className="inline w-3 h-3 mr-1" /> Мексика · AI-консультант 24/7
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] animate-[fade-up_0.8s_ease-out]">
          Путешествия по Мексике{" "}
          <span className="gradient-text">нового поколения</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-[fade-up_1s_ease-out]">
          Travel Radar LK AI — премиальная платформа, объединяющая искусственный интеллект
          и личный опыт для создания идеального маршрута по самой яркой стране Латинской Америки.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fade-up_1.2s_ease-out]">
          <a
            href="#ai"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl gradient-hero text-primary-foreground font-semibold shadow-glow hover:shadow-glow-cool transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            Спросить AI-консультанта
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass text-foreground font-medium hover:bg-white/10 transition-colors"
          >
            Узнать больше
          </a>
        </div>

        {/* Floating glass info card */}
        <div className="mt-20 hidden md:flex justify-center gap-4 animate-[fade-up_1.4s_ease-out]">
          {[
            { k: "32", v: "штата" },
            { k: "150+", v: "маршрутов" },
            { k: "24/7", v: "AI-поддержка" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl px-6 py-4 min-w-[140px]">
              <div className="text-2xl font-bold gradient-text font-display">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
        <div className="w-1 h-2 rounded-full bg-white/60 animate-[float_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
