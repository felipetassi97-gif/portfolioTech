import { projects } from "./projects.data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectsSection() {
  return (
    <section id="projetos" className="relative border-b border-[var(--border-default)] py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-teal">
                // 02 — Portfólio
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-[var(--accent-teal)] to-transparent" />
            </div>
            <h2 className="display-tight text-[var(--text)]" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
              Projetos principais
            </h2>
            <p className="max-w-2xl text-[1rem] leading-relaxed text-muted-2">
              Cada projeto representa um problema real resolvido com engenharia
              pensada para escalar e durar.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.number}
              project={p}
              reversed={i === 1 || i === 3}
              delay={(i % 3) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
