import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, MapPin, ArrowRight } from "lucide-react";

const facts = [
  { num: "1840", label: "Нарадзіўся ў фальварку Свіраны" },
  { num: "1863", label: "Удзельнік паўстання Каліноўскага" },
  { num: "1891", label: "«Дудка беларуская» — першы зборнік" },
  { num: "1900", label: "Памёр у Кушлянах" },
];

const features = [
  {
    icon: BookOpen,
    title: "Першая беларускамоўная кніга",
    text: "«Дудка беларуская» (1891) — першы цалкам беларускамоўны зборнік паэзіі, які актывізаваў кнігавыданне па-беларуску.",
  },
  {
    icon: Sparkles,
    title: "Крытычны рэалізм",
    text: "Багушэвіч ініцыяваў узнікненне крытычнага рэалізму ў беларускай літаратуры і падняў статус беларускай мовы да еўрапейскай.",
  },
  {
    icon: MapPin,
    title: "Спадчына ў Кушлянах",
    text: "З 1990 года дзейнічае Літаратурна-мемарыяльны музей-сядзіба паэта, дзе захаваліся асабістыя рэчы і хата 1896 года.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/15 blur-[140px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -z-10" />

        <div className="container py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-background/50 backdrop-blur text-xs font-medium text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Беларускае нацыянальнае адраджэнне
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
                Францішак
                <br />
                <span className="gradient-text">Багушэвіч</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl">
                Беларускі паэт, пісьменнік, адвакат, адзін з пачынальнікаў новай
                беларускай літаратуры. Аўтар першых цалкам беларускамоўных
                зборнікаў «Дудка беларуская» і «Смык беларускі».
              </p>

              <blockquote className="relative pl-6 py-2 max-w-xl">
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                <p className="italic text-base md:text-lg text-foreground/80">
                  «...не пакідайце ж мовы нашай беларускай, каб не ўмёрлі»
                </p>
              </blockquote>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg">
                  <Link href="/bio" className="inline-flex items-center gap-2">
                    Біяграфія
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/works">Творчасць</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl -z-10" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-primary/10">
                <Image
                  src="/images/portrait.jpg"
                  alt="Францішак Багушэвіч"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="border-y border-border/40 bg-secondary/30">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {facts.map((fact) => (
              <div key={fact.num} className="space-y-2">
                <span className="block text-4xl md:text-5xl font-bold text-primary tracking-tight">
                  {fact.num}
                </span>
                <span className="block text-sm text-muted-foreground leading-snug">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Уклад у спадчыну
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Чалавек, які вярнуў{" "}
            <span className="gradient-text">беларускае слова</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Сваёй творчасцю ён вызначыў развіццё беларускай літаратуры на
            некалькі дзесяцігоддзяў наперад і паказаў паэтам наступных пакаленняў
            запатрабаванасць сялянскай тэмы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-7 rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative rounded-3xl border border-border/60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Даведайцеся больш пра паэта
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Азнаёмцеся з яго жыццём, творчасцю і мясцінамі, звязанымі з яго
              лёсам.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/places" className="inline-flex items-center gap-2">
                  Мясціны
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/works">Творчасць</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}