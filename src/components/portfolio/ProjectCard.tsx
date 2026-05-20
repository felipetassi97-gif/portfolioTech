import { useState } from "react";
import type { Project } from "./projects.data";
import { Reveal } from "./Reveal";

type Props = {
  project: Project;
  reversed?: boolean;
  delay?: number;
};

export function ProjectCard({ project, reversed = false, delay = 0 }: Props) {
  const [showVideo, setShowVideo] = useState(false);

  const info = (
    <div className="flex flex-col gap-5 p-8 md:p-10">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[0.7rem] tracking-widest text-teal/70">
          // {project.number}
        </span>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>

      <h3 className="display-tight text-[1.9rem] text-[var(--text)] md:text-[2.1rem]">
        {project.name}
      </h3>

      <p className="font-mono text-[0.78rem] text-teal">{project.tagline}</p>

      <p className="text-[0.92rem] leading-relaxed text-muted-2">
        {project.description}
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="border border-[rgba(0,230,200,0.18)] bg-[rgba(0,230,200,0.07)] px-2.5 py-1 font-mono text-[0.68rem] text-teal"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="flex items-center gap-2 border border-[var(--border-accent)] bg-transparent px-4 py-2 font-mono text-[0.7rem] uppercase tracking-widest text-teal transition-all hover:bg-[rgba(0,230,200,0.05)]"
        >
          <span className={`h-1.5 w-1.5 rounded-full bg-[var(--accent-teal)] ${showVideo ? "" : "pulse-dot"}`} />
          {showVideo ? "Fechar Preview" : "Ver Preview"}
        </button>
      </div>

      {showVideo && (
        <div className="mt-4 overflow-hidden rounded border border-[var(--border-default)] bg-[#050608]">
          <div className="aspect-video w-full flex flex-col items-center justify-center gap-2 p-6 text-center">
            <span className="font-mono text-[0.75rem] uppercase tracking-widest text-muted-1">
              // Vídeo de Preview
            </span>
            <span className="font-mono text-[0.65rem] text-muted-2">
              (O vídeo final será inserido aqui)
            </span>
            <video
              className="hidden w-full"
              controls
              src=""
              /* TODO: src={project.videoUrl} */
            />
          </div>
        </div>
      )}
    </div>
  );

  const features = (
    <div className="flex flex-col gap-5 border-[var(--border-default)] p-8 md:gap-6 md:p-10 md:[border-left:1px_solid_var(--border-default)]">
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-1">
        // features
      </span>
      <ul className="flex flex-col gap-5">
        {project.features.map((f) => (
          <li key={f.title} className="flex gap-4">
            <span
              aria-hidden
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-[rgba(0,230,200,0.2)] bg-[rgba(0,230,200,0.1)]"
              style={{ borderRadius: 4 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-teal)]" />
            </span>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[0.88rem] font-semibold text-[var(--text)]">
                {f.title}
              </h4>
              <p className="font-mono text-[0.7rem] leading-relaxed text-muted-1">
                {f.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Reveal delay={delay}>
      <article
        data-cursor="hover"
        className="neon-top group grid grid-cols-1 overflow-hidden border border-[var(--border-default)] bg-[var(--surface-1)] transition-all duration-300 hover:border-[var(--border-accent)] hover:bg-[var(--surface-2)] md:grid-cols-[55%_45%]"
        style={{ borderRadius: 8 }}
      >
        {reversed ? (
          <>
            <div className="md:order-2">{info}</div>
            <div className="md:order-1 md:[border-right:1px_solid_var(--border-default)] md:border-l-0">
              <FeaturesNoBorder>{features}</FeaturesNoBorder>
            </div>
          </>
        ) : (
          <>
            {info}
            {features}
          </>
        )}
      </article>
    </Reveal>
  );
}

function FeaturesNoBorder({ children }: { children: React.ReactNode }) {
  // strip the md:border-left from features when reversed
  return <div className="[&>div]:md:border-l-0">{children}</div>;
}

function StatusBadge({ status, label }: { status: Project["status"]; label: string }) {
  if (status === "wip") {
    return (
      <span className="inline-flex items-center gap-2 border border-[rgba(123,94,248,0.35)] bg-[rgba(123,94,248,0.1)] px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-violet">
        <span className="h-[5px] w-[5px] rounded-full bg-[var(--accent-violet)] pulse-dot" />
        {label}
      </span>
    );
  }
  if (status === "rd") {
    return (
      <span className="inline-flex items-center gap-2 border border-[rgba(0,180,255,0.3)] bg-[rgba(0,180,255,0.08)] px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-blue">
        <span className="h-[5px] w-[5px] rounded-full bg-[var(--accent-blue)]" />
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 border border-[var(--border-default)] bg-transparent px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-muted-2">
      <span className="h-[5px] w-[5px] rounded-full bg-[var(--muted-2)]" />
      {label}
    </span>
  );
}
