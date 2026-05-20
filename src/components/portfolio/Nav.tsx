export function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border-default)] backdrop-blur-xl" style={{ backgroundColor: "rgba(5,6,8,0.85)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-sm tracking-tight text-teal" aria-label="Felipe — home">
          felipe.dev_<span className="blink">|</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#projetos" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-2 transition-colors hover:text-teal">
            Projetos
          </a>
          <a href="#stack" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-2 transition-colors hover:text-teal">
            Stack
          </a>
          <a href="#contato" className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-2 transition-colors hover:text-teal">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
