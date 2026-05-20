import { Reveal } from "./Reveal";
import { Terminal } from "./Terminal";
import { useLanguage } from "@/context/LanguageContext";
import { Text } from "./DecryptText";

type Group = {
  titlePt: string;
  titleEn: string;
  itemsPt: string[];
  itemsEn: string[];
};

const groups: Group[] = [
  {
    titlePt: "Backend",
    titleEn: "Backend",
    itemsPt: ["FastAPI / Python", "PostgreSQL", "Supabase", "APIs REST"],
    itemsEn: ["FastAPI / Python", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    titlePt: "Frontend",
    titleEn: "Frontend",
    itemsPt: ["Next.js / React", "Tailwind CSS", "Vanilla JS", "Design Systems"],
    itemsEn: ["Next.js / React", "Tailwind CSS", "Vanilla JS", "Design Systems"],
  },
  {
    titlePt: "Infra & Dados",
    titleEn: "Infra & Data",
    itemsPt: ["Realtime / Triggers", "RPC atômico", "Storage & EXIF", "Backup local"],
    itemsEn: ["Realtime / Triggers", "Atomic RPC", "Storage & EXIF", "Local backup"],
  },
  {
    titlePt: "IA & Automação",
    titleEn: "AI & Automation",
    itemsPt: ["LLMs integrados", "Agentes autônomos", "Análise preditiva", "Automação desktop"],
    itemsEn: ["Integrated LLMs", "Autonomous agents", "Predictive analysis", "Desktop automation"],
  },
];

export function StackSection() {
  const { language } = useLanguage();

  return (
    <section id="stack" className="relative border-b border-[var(--border-default)] py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-teal">
                // 03 — <Text pt="Perfil" en="Profile" />
              </span>
              <h2 className="display-tight text-[var(--text)]" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
                <Text pt="Técnico." en="Technical." />
                <br />
                <span className="text-muted-2">
                  <Text pt="Orientado a negócio." en="Business-oriented." />
                </span>
              </h2>
              <p className="max-w-lg text-[1rem] leading-relaxed text-muted-2">
                <Text
                  pt="Construo do banco de dados à interface — com foco em resolver o problema real, não só escrever código bonito. Cada decisão técnica tem uma razão de negócio por trás."
                  en="I build from the database to the interface — focused on solving the real problem, not just writing pretty code. Every technical decision has a business reason behind it."
                />
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {groups.map((g, idx) => {
                const items = language === "pt" ? g.itemsPt : g.itemsEn;
                return (
                  <div key={idx} className="flex flex-col gap-3">
                    <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-teal">
                      <Text pt={g.titlePt} en={g.titleEn} />
                    </h3>
                    <ul className="flex flex-col">
                      {items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="group cursor-default border-l-2 border-[var(--border-default)] py-1.5 pl-3 text-[0.85rem] text-muted-2 transition-all duration-200 hover:border-[var(--accent-teal)] hover:text-[var(--text)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
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
