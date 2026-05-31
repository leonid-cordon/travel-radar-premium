import streetsImg from "@/assets/mexico-streets.jpg";
import { Compass } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 gradient-hero rounded-3xl blur-3xl opacity-30" />
          <div className="relative glass rounded-3xl p-2 shadow-elegant">
            <img
              src={streetsImg}
              alt="Колоритные улицы Мексики"
              width={1280}
              height={1280}
              loading="lazy"
              className="rounded-2xl w-full h-[520px] object-cover"
            />
          </div>
          {/* Floating glass badge */}
          <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-elegant max-w-[220px]">
            <Compass className="w-6 h-6 text-secondary mb-2" />
            <div className="text-sm font-semibold">Авторский подход</div>
            <div className="text-xs text-muted-foreground mt-1">Маршруты, которых нет в путеводителях</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">О проекте</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Мексика глазами <span className="gradient-text">эксперта и AI</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Travel Radar LK AI — независимый экспертный проект о Мексике. Мы объединяем
            многолетний опыт жизни в стране и возможности нейросетей, чтобы помочь
            читателям спланировать поездку без дорогих ошибок: выбрать подходящий курорт,
            отель и формат путешествия.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Проект не продаёт туры и не оказывает услуг бронирования. Некоторые материалы
            могут содержать партнёрские ссылки на проверенные сервисы бронирования —
            это помогает поддерживать развитие проекта и не влияет на стоимость для вас.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { t: "Локальная экспертиза", d: "Авторы живут в Мексике" },
              { t: "AI-персонализация", d: "Маршрут под ваш стиль" },
            ].map((i) => (
              <div key={i.t} className="glass rounded-2xl p-5">
                <div className="font-semibold mb-1">{i.t}</div>
                <div className="text-sm text-muted-foreground">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
