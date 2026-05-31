import { Send, Sparkles, Bot } from "lucide-react";
import cenoteImg from "@/assets/mexico-cenote.jpg";

const examples = [
  "Что выбрать для первого отдыха: Канкун или Ривьера Майя?",
  "В каком районе лучше остановиться в Канкуне?",
  "Какой курорт подойдёт для спокойного отдыха?",
  "Как выбрать отель и не переплатить?",
  "Нужна ли eSIM для поездки в Мексику?",
  "Как добраться из аэропорта Канкуна?",
];

export function AIConsultant() {
  return (
    <section id="ai" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">AI-эксперт по Мексике</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Специализированный AI — <span className="gradient-text">только про Мексику</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            AI-консультант обучен на материалах Travel Radar LK: статьях, гайдах и коротких видео
            о курортах, отелях, районах, транспорте и практических нюансах поездки. Он помогает
            быстро находить нужную информацию по Мексике — без рекламы и без воды.
          </p>

          <div className="space-y-2 mb-8">
            {examples.map((q) => (
              <button
                key={q}
                className="w-full text-left glass rounded-xl px-4 py-3 text-sm hover:bg-white/10 transition-colors flex items-center justify-between group"
              >
                <span className="text-foreground/90">{q}</span>
                <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 gradient-hero rounded-[2.5rem] blur-3xl opacity-25" />
          <div className="relative glass-strong rounded-[2rem] p-6 shadow-elegant overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-20">
              <img src={cenoteImg} alt="" width={1280} height={1280} loading="lazy" className="w-full h-full object-cover" />
            </div>

            {/* Chat header */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-secondary border-2 border-background" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Travel Radar AI</div>
                  <div className="text-[10px] text-muted-foreground">онлайн · отвечает мгновенно</div>
                </div>
              </div>
              <span className="text-xs glass rounded-full px-2 py-0.5 text-muted-foreground">v2.0</span>
            </div>

            {/* Messages */}
            <div className="space-y-3 mb-5 min-h-[280px]">
              <div className="flex justify-end">
                <div className="gradient-hero text-primary-foreground rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[80%] text-sm shadow-glow">
                  В каком районе лучше остановиться в Канкуне?
                </div>
              </div>
              <div className="flex">
                <div className="glass rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%] text-sm">
                  <div className="font-semibold mb-2 gradient-text">Коротко по районам Hotel Zone:</div>
                  <ul className="space-y-1.5 text-foreground/90 text-[13px]">
                    <li>📍 km 1–4: ближе к центру, дешевле, узкий пляж</li>
                    <li>🏖 km 9–14: широкие пляжи, спокойное море, семьи</li>
                    <li>🌊 km 15–20: открытый океан, волны, молодёжь и пати</li>
                    <li>🏙 Downtown: бюджетно, аутентично, без пляжа рядом</li>
                    <li>💡 Совет: для первого раза — km 9–14</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs pl-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "300ms" }} />
                <span className="ml-1">AI печатает...</span>
              </div>
            </div>

            {/* Input */}
            <div className="glass rounded-2xl flex items-center gap-2 p-2">
              <input
                type="text"
                placeholder="Спросите что угодно о Мексике..."
                className="flex-1 bg-transparent border-0 outline-none px-3 py-2 text-sm placeholder:text-muted-foreground"
              />
              <button className="gradient-hero w-10 h-10 rounded-xl flex items-center justify-center shadow-glow hover:scale-105 transition-transform">
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
