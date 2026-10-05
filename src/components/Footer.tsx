export function Footer() {
  return (
    <footer className="relative border-t border-border/40 mt-32 overflow-hidden">
      {/* Дэкаратыўнае свячэнне */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.02] to-primary/[0.05]" />

      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-semibold">Францішак Багушэвіч</span>
          <span className="text-sm text-muted-foreground">1840—1900</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Сайт створаны з адукацыйнай мэтай
        </p>
      </div>
    </footer>
  );
}