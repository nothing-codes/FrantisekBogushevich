import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Творчасць",
  description: "Літаратурная спадчына Францішка Багушэвіча",
};

const works = [
  {
    title: "«Дудка беларуская»",
    year: "1891",
    cover: "/images/dudka.jpg",
    meta: "Пад псеўданімам Мацей Бурачок. Выдадзены ў Кракаве. Наклад — 3000 экзэмпляраў.",
    text: "Першы зборнік паэта, які выйшаў у Кракаве пад псеўданімам Мацей Бурачок. Складаўся з 16 вершаў і паэмы «Кепска будзе!». Самыя вядомыя публіцыстычныя вершы: «Мая дудка», «Бог не роўна дзеле», «Праўда».",
  },
  {
    title: "«Смык беларускі»",
    year: "1894",
    cover: "/images/smyk.jpg",
    meta: "Пад псеўданімам Сымон Рэўка з-пад Барысава. Выдадзены ў Познані.",
    text: "Другі прыжыццёвы зборнік. Уключае творы розных жанраў: вершы, песні, калыханку, баладу, байку. Змест блізкі паводле сацыяльнай скіраванасці да кнігі «Дудка беларуская».",
  },
];

const contributions = [
  "Багушэвіч даў беларускай літаратуры ўзор аўтарскай сялянскай паэзіі. Нават псеўданімы падбіраў адпаведныя: Мацей Бурачок, Сымон Рэўка з-пад Барысава.",
  "Быў аўтарам першай цалкам беларускамоўнай кнігі паэзіі, стварыў першыя беларускія апавяданні «Тралялёначка», «Дзядзіна», «Палясоўшчык».",
  "Сваёй творчасцю ініцыяваў узнікненне крытычнага рэалізму ў беларускай літаратуры.",
  "У прадмове да «Дудкі беларускай» падняў статус беларускай мовы ад гаворкі да еўрапейскай мовы.",
  "Вызначыў развіццё беларускай літаратуры на некалькі дзесяцігоддзяў наперад.",
];

export default function WorksPage() {
  return (
    <>
      <PageHeader
        title="Творчасць"
        subtitle="Літаратурная спадчына Францішка Багушэвіча"
      />

      {/* Зборнікі */}
      <section className="container py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          Зборнікі
        </h2>

        <div className="space-y-20">
          {works.map((work) => (
            <article
              key={work.title}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-transparent rounded-3xl blur-xl -z-10" />
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-border/60 shadow-xl">
                  <Image
                    src={work.cover}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </div>

              <div className="space-y-5 md:pt-4">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4">
                    {work.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {work.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3">
                    {work.meta}
                  </p>
                </div>
                <p className="text-[1.0625rem] leading-[1.85] text-muted-foreground">
                  {work.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Уклад */}
      <section className="border-y border-border/40 bg-secondary/30">
        <div className="container py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Уклад у літаратуру
          </h2>
          <ol className="max-w-3xl space-y-8">
            {contributions.map((item, i) => (
              <li key={i} className="flex gap-6 group">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-border/60 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {i + 1}
                </span>
                <p className="text-[1.0625rem] leading-[1.85] text-foreground/90 pt-1.5">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}