import { Globe, Youtube, Image, Send, Instagram, MessageCircle } from "lucide-react";

const platforms = [
  {
    icon: Globe,
    name: "Сайт",
    description: "Основной источник информации о Мексике: статьи, гайды и обзоры.",
    url: "https://travelradarlk.com",
    color: "from-emerald-400 to-teal-500",
    active: true,
  },
  {
    icon: Youtube,
    name: "YouTube",
    description: "Видео о курортах, отелях, путешествиях и практических советах по Мексике.",
    url: "https://www.youtube.com/@travel_radar_lk",
    color: "from-red-500 to-rose-400",
    active: true,
  },
  {
    icon: Image,
    name: "Pinterest",
    description: "Визуальные подборки мест, маршрутов и идей для поездок.",
    url: "https://www.pinterest.com/travelradarlk/",
    color: "from-rose-400 to-red-500",
    active: true,
  },
  {
    icon: Send,
    name: "Telegram",
    description: "Дополнительные материалы и обновления проекта на русском языке.",
    url: "https://t.me/TravelRadar_LK",
    color: "from-sky-400 to-blue-500",
    active: true,
  },
  {
    icon: Instagram,
    name: "Instagram",
    description: "Визуальный контент и вдохновение для путешествий.",
    url: "https://www.instagram.com/travelradarlk/",
    color: "from-pink-500 to-orange-400",
    active: true,
  },
  {
    icon: MessageCircle,
    name: "TikTok",
    description: "Короткие видео и быстрые советы.",
    url: "https://www.tiktok.com/@travelradarlk",
    color: "from-fuchsia-500 to-cyan-400",
    active: true,
  },
];

export function Social() {
  return (
    <section id="social" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Экосистема проекта
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Площадки <span className="gradient-text">Travel Radar LK</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Выбирайте удобный формат контента и следите за обновлениями там, где вам комфортно.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((p) => {
            const CardContent = (
              <>
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 group-hover:opacity-40 blur-2xl transition-opacity`}
                />
                <div className="relative flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-elegant`}
                  >
                    <p.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-lg font-semibold mb-2">{p.name}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {p.description}
                  </p>
                  {!p.active && (
                    <div className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      Скоро
                    </div>
                  )}
                </div>
              </>
            );

            return p.active ? (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-3xl p-6 hover:bg-white/[0.09] transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={p.name}
                className="group glass rounded-3xl p-6 relative overflow-hidden flex flex-col opacity-70"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
