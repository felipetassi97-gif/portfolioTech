import { useLanguage } from "@/context/LanguageContext";

export function Nav() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border-default)] backdrop-blur-xl" style={{ backgroundColor: "rgba(5,6,8,0.85)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-sm tracking-tight text-teal" aria-label="Felipe — home">
          felipe.dev_<span className="blink">|</span>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-8 md:flex">
            <a href="#projetos" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-2 transition-colors hover:text-teal">
              {language === "pt" ? "Projetos" : "Projects"}
            </a>
            <a href="#stack" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-2 transition-colors hover:text-teal">
              Stack
            </a>
            <a href="#contato" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-2 transition-colors hover:text-teal">
              {language === "pt" ? "Contato" : "Contact"}
            </a>
          </div>
          <button
            onClick={toggleLanguage}
            className="group relative flex items-center gap-1.5 border border-[var(--border-default)] bg-[rgba(10,12,18,0.6)] px-3 py-1.5 font-mono text-[0.68rem] tracking-widest uppercase text-muted-2 transition-all hover:border-[var(--border-accent)] hover:text-teal animate-fade-in"
            aria-label="Toggle language"
            data-cursor="hover"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-teal)] pulse-dot" />
            <span className={language === "pt" ? "text-teal font-bold" : ""}>PT</span>
            <span className="opacity-30">/</span>
            <span className={language === "en" ? "text-teal font-bold" : ""}>EN</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
