import { Brain, Map, Shield, Clock, Heart, Gem } from "lucide-react";

const features = [
  { icon: Brain, title: "AI-планировщик", desc: "Нейросеть анализирует ваши интересы и составляет идеальный маршрут за секунды." },
  { icon: Map, title: "Эксклюзивные локации", desc: "Скрытые пляжи, секретные сеноты и аутентичные деревни, неизвестные туристам." },
  { icon: Shield, title: "Безопасность 360°", desc: "Проверенные районы, актуальные предупреждения и круглосуточная поддержка." },
  { icon: Clock, title: "Мгновенные ответы", desc: "AI-консультант отвечает на любой вопрос о Мексике в течение нескольких секунд." },
  { icon: Heart, title: "Авторский контент", desc: "Гид написан людьми, влюблёнными в Мексику и живущими в стране годами." },
  { icon: Gem, title: "Премиум-сервис", desc: "Доступ к закрытым рекомендациям ресторанов, отелей и приватных туров." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Преимущества</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Почему выбирают <span className="gradient-text">Travel Radar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Шесть причин, по которым тысячи путешественников доверяют нам планирование своих приключений.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group glass rounded-3xl p-7 hover:bg-white/[0.09] transition-all hover:-translate-y-1 hover:shadow-elegant relative overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full gradient-hero opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl glass-strong flex items-center justify-center mb-5 group-hover:gradient-hero transition-all">
                  <f.icon className="w-6 h-6 text-secondary group-hover:text-primary-foreground transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
