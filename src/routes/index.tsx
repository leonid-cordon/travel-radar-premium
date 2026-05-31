import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { Stats } from "@/components/site/Stats";
import { AIConsultant } from "@/components/site/AIConsultant";
import { Social } from "@/components/site/Social";
import { Contacts } from "@/components/site/Contacts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Travel Radar LK AI — Премиальные путешествия по Мексике" },
      { name: "description", content: "AI-платформа для планирования незабываемых путешествий по Мексике. Авторские маршруты, скрытые локации и круглосуточный AI-консультант." },
      { property: "og:title", content: "Travel Radar LK AI — Премиальные путешествия по Мексике" },
      { property: "og:description", content: "AI-платформа для планирования незабываемых путешествий по Мексике." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Features />
      <Stats />
      <AIConsultant />
      <Social />
      <Contacts />
    </main>
  );
}
