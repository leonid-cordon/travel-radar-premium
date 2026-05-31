import { Instagram, Youtube, Send, MessageCircle } from "lucide-react";

const socials = [
  { icon: Instagram, name: "Instagram", handle: "@travelradar.lk", followers: "82K", color: "from-pink-500 to-orange-400" },
  { icon: Youtube, name: "YouTube", handle: "Travel Radar LK", followers: "45K", color: "from-red-500 to-rose-400" },
  { icon: Send, name: "Telegram", handle: "@travelradar_mx", followers: "28K", color: "from-sky-400 to-blue-500" },
  { icon: MessageCircle, name: "TikTok", handle: "@travelradar.lk", followers: "120K", color: "from-fuchsia-500 to-cyan-400" },
];

export function Social() {
  return (
    <section id="social" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Социальные сети</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Следите за нами <span className="gradient-text">в реальном времени</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ежедневные истории из путешествий, гайды и закрытые рекомендации.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href="#"
              className="group glass rounded-3xl p-6 hover:bg-white/[0.09] transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${s.color} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-elegant`}>
                  <s.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="text-lg font-semibold mb-1">{s.name}</div>
                <div className="text-sm text-muted-foreground mb-4">{s.handle}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold gradient-text font-display">{s.followers}</span>
                  <span className="text-xs text-muted-foreground">подписчиков</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
