export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative border-b border-border/40 overflow-hidden">
      {/* Фонавая сетка */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

      {/* Градыентны арб */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] -z-10" />

      <div className="container py-20 md:py-28">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}