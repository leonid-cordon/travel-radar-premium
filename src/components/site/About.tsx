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
          <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-elegant max-w-[240px]">
            <Compass className="w-6 h-6 text-secondary mb-2" />
            <div className="text-sm font-semibold">Независимый подход</div>
            <div className="text-xs text-muted-foreground mt-1">Анализируем и сравниваем на основе собственного опыта жизни в Мексике</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">О проекте</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Помогаем принимать <span className="gradient-text">правильные решения</span> о поездке в Мексику
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Travel Radar LK — независимый проект о путешествиях по Мексике. Мы помогаем
            выбрать курорт, район и отель, спланировать маршрут и избежать типичных ошибок,
            из-за которых поездка превращается в разочарование или лишние расходы.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Мы собираем и анализируем информацию о Мексике, чтобы вы могли ориентироваться
            в выборе курорта, отеля и маршрута. Наш подход не зависит от договорённостей
            с турагентствами — рекомендации строятся на личном опыте и проверке открытых
            источников. AI-консультант — это дополнительный инструмент, который ускоряет
            поиск ответов по нашим материалам. Некоторые статьи могут содержать партнёрские
            ссылки на проверенные сервисы — это помогает поддерживать проект и не влияет
            на стоимость для вас.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { t: "Решения без ошибок", d: "Курорт, район и отель под ваши задачи" },
              { t: "Независимый взгляд", d: "Рекомендации на основе опыта, а не договорённостей с продавцами" },
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
