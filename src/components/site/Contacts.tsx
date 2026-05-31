import { Mail, MessageCircle, MapPin, Plane } from "lucide-react";

export function Contacts() {
  return (
    <section id="contacts" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative glass-strong rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-elegant">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full gradient-hero opacity-30 blur-3xl animate-aurora" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-turquoise/40 blur-3xl animate-aurora" style={{ animationDelay: "-7s" }} />

          <div className="relative grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Контакты</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Готовы начать <span className="gradient-text">приключение?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Свяжитесь с нами любым удобным способом — мы ответим в течение часа.
              </p>

              <div className="space-y-3">
                <a href="mailto:hello@travelradar.lk" className="flex items-center gap-3 glass rounded-2xl p-4 hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium">hello@travelradar.lk</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 glass rounded-2xl p-4 hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Telegram</div>
                    <div className="text-sm font-medium">@travelradar_support</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 glass rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Локация</div>
                    <div className="text-sm font-medium">Плайя-дель-Кармен, Мексика</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">Имя</label>
                <input className="w-full glass rounded-xl px-4 py-3 bg-transparent outline-none focus:border-primary text-sm" placeholder="Как вас зовут?" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">Email</label>
                <input type="email" className="w-full glass rounded-xl px-4 py-3 bg-transparent outline-none focus:border-primary text-sm" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">Сообщение</label>
                <textarea rows={4} className="w-full glass rounded-xl px-4 py-3 bg-transparent outline-none focus:border-primary text-sm resize-none" placeholder="Расскажите о вашем идеальном путешествии..." />
              </div>
              <button type="button" className="w-full gradient-hero text-primary-foreground font-semibold rounded-xl py-3.5 shadow-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                <Plane className="w-4 h-4" /> Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          © 2026 Travel Radar LK AI · Сделано с любовью к Мексике
        </footer>
      </div>
    </section>
  );
}
