import { Reveal } from "./Reveal";
import { Terminal } from "./Terminal";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Backend",
    items: ["FastAPI / Python", "PostgreSQL", "Supabase", "APIs REST"],
  },
  {
    title: "Frontend",
    items: ["Next.js / React", "Tailwind CSS", "Vanilla JS", "Design Systems"],
  },
  {
    title: "Infra & Dados",
    items: ["Realtime / Triggers", "RPC atômico", "Storage & EXIF", "Backup local"],
  },
  {
    title: "IA & Automação",
    items: ["LLMs integrados", "Agentes autônomos", "Análise preditiva", "Automação desktop"],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="relative border-b border-[var(--border-default)] py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-teal">
                // 03 — Perfil
              </span>
              <h2 className="display-tight text-[var(--text)]" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
                Técnico.
                <br />
                <span className="text-muted-2">Orientado a negócio.</span>
              </h2>
              <p className="max-w-lg text-[1rem] leading-relaxed text-muted-2">
                Construo do banco de dados à interface — com foco em resolver o
                problema real, não só escrever código bonito. Cada decisão
                técnica tem uma razão de negócio por trás.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {groups.map((g) => (
                <div key={g.title} className="flex flex-col gap-3">
                  <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-teal">
                    {g.title}
                  </h3>
                  <ul className="flex flex-col">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="group cursor-default border-l-2 border-[var(--border-default)] py-1.5 pl-3 text-[0.85rem] text-muted-2 transition-all duration-200 hover:border-[var(--accent-teal)] hover:text-[var(--text)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="md:sticky md:top-24">
            <Terminal />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
