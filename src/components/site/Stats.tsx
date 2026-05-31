import pyramidImg from "@/assets/mexico-pyramid.jpg";

const stats = [
  { k: "50+", v: "материалов", d: "статей и гайдов о Мексике" },
  { k: "80+", v: "коротких видео", d: "Reels, Shorts и TikTok" },
  { k: "5", v: "платформ", d: "сайт, Telegram, YouTube, Pinterest, Instagram/TikTok" },
  { k: "24/7", v: "AI-консультант", d: "ответ на ваш вопрос в любое время" },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={pyramidImg} alt="" width={1280} height={1280} loading="lazy" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Статистика</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Цифры, которые <span className="gradient-text">говорят за нас</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            За годы работы мы помогли тысячам путешественников открыть настоящую Мексику.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.v} className="glass-strong rounded-3xl p-8 text-center hover:scale-[1.03] transition-transform shadow-elegant">
              <div className="text-5xl md:text-6xl font-bold gradient-text font-display mb-3">{s.k}</div>
              <div className="text-base font-semibold mb-1">{s.v}</div>
              <div className="text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
