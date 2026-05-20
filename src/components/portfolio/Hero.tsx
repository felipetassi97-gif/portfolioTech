import { useEffect, useState } from "react";
import { PerspectiveGrid } from "./PerspectiveGrid";

export function Hero() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setShowHint(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden border-b border-[var(--border-default)]">
      <PerspectiveGrid />

      {/* radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[20%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,230,200,0.08), transparent 60%)" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-32 md:grid-cols-[1fr_auto] md:px-10">
        <div className="flex flex-col gap-8">
          <div className="flex animate-[fadeUp_700ms_cubic-bezier(0.16,1,0.3,1)_both] items-center gap-4">
            <span className="h-px w-8 bg-[var(--accent-teal)]" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-teal">
              Full-stack Developer &amp; Builder
            </span>
          </div>

          <h1
            className="display-tight clip-reveal text-[var(--text)]"
            style={{ fontSize: "clamp(3.25rem, 9vw, 8rem)" }}
          >
            Sistemas que
            <br />
            <span className="text-teal">funcionam.</span>
          </h1>

          <p
            className="max-w-[480px] text-[1.02rem] leading-relaxed text-muted-2"
            style={{ animation: "fadeUp 700ms cubic-bezier(0.16,1,0.3,1) 600ms both" }}
          >
            Construo plataformas completas — da arquitetura de banco de dados
            até a interface final. Foco em performance, segurança e lógica de
            negócio real.
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fadeUp 700ms cubic-bezier(0.16,1,0.3,1) 800ms both" }}
          >
            <a
              href="#projetos"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--accent-teal)] px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Ver projetos
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 border border-[var(--accent-teal)]/60 px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-teal transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-teal)]"
            >
              Falar comigo
            </a>
          </div>
        </div>

        {/* stats — desktop only */}
        <div
          className="hidden flex-col gap-8 text-right md:flex"
          style={{ animation: "fadeUp 700ms cubic-bezier(0.16,1,0.3,1) 1000ms both" }}
        >
          <Stat value="5+" label="sistemas entregues" />
          <Stat value="∞" label="problemas resolvidos" />
          <Stat value="01" label="dev focado" />
        </div>
      </div>

      {showHint && (
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-1 slow-blink">
          [ scroll ]
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-end gap-1">
      <span className="font-mono text-[2.2rem] leading-none text-[var(--text)]">{value}</span>
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-muted-1">
        {label}
      </span>
    </div>
  );
}
