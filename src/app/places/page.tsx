import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Мясціны",
  description: "Месцы, звязаныя з жыццём і творчасцю Францішка Багушэвіча",
};

const places = [
  {
    title: "Кушляны",
    meta: "Аграгарадок Кушляны, Смаргонскі раён, Гродзенская вобласць",
    image: "/images/kushlyany.jpg",
    paragraphs: [
      "Спадчынны маёнтак Багушэвічаў, набыты ў 1749 годзе. Тут прайшло дзяцінства паэта, сюды ён вярнуўся пасля амністыі 1883 года. У 1896 годзе Багушэвіч адбудаваў сядзібу і прысвяціў астатак жыцця творчасці. Захавалася хата паэта 1896 года пабудовы, каменная абора і стары парк з дрэвамі XVIII—XIX стагоддзяў.",
      "З 1990 года ў Кушлянах дзейнічае Літаратурна-мемарыяльны музей-сядзіба Францішка Багушэвіча. Экспазіцыя ўключае асабістыя рэчы паэта: пісьмовы стол, крэслы, рукапісы, родавыя медальёны сям'і Багушэвічаў.",
    ],
  },
  {
    title: "Жупраны",
    meta: "Аграгарадок Жупраны, Ашмянскі раён, Гродзенская вобласць",
    image: "/images/grave.jpg",
    paragraphs: [
      "Месца пахавання Францішка Багушэвіча і ягоных сваякоў. Паэт быў пахаваны ў 1900 годзе. На магіле ўсталяваны надмагільны помнік. У 2019 годзе тут адкрыты помнік Францішку Багушэвічу.",
    ],
  },
  {
    title: "Вільня",
    meta: "Віленская гімназія, Нежынскі юрыдычны ліцэй",
    image: "/images/vilnius.jpg",
    paragraphs: [
      "У Віленскай гімназіі Багушэвіч вучыўся з 1852 па 1861 год. Тут ён зацікавіўся гісторыяй, удзельнічаў у збіранні экспанатаў для Віленскага музея старажытнасцей. У Вільні пазнаёміўся з інтэлектуальнай элітай: Адамам Кіркорам, Яўстахам Тышкевічам, Вінцэсем Каратынскім.",
      "Пасля паўстання 1863—1864 гадоў Багушэвіч атрымаў юрыдычную адукацыю ў Нежынскім ліцэі (1865—1868). Працаваў судовым следчым на Украіне і ў Расіі.",
    ],
  },
];

export default function PlacesPage() {
  return (
    <>
      <PageHeader
        title="Мясціны"
        subtitle="Месцы, звязаныя з жыццём і творчасцю Францішка Багушэвіча"
      />

      <section className="container py-20 md:py-28">
        <div className="space-y-28 md:space-y-36">
          {places.map((place, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={place.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-transparent to-primary/5 rounded-3xl blur-2xl -z-10" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 shadow-xl">
                    <Image
                      src={place.image}
                      alt={place.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {place.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {place.meta}
                  </p>
                  {place.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-[1.0625rem] leading-[1.85] text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}