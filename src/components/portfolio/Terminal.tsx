import { useEffect, useRef, useState } from "react";

type Line = { text: string; type: "commit" | "prompt" };

const PROJECTS: Line[] = [
  { text: "drwxr-x  pacto/          [WIP]   Next.js · Supabase · PIX", type: "commit" },
  { text: "drwxr-x  pos-stjohns/    [DONE]  FastAPI · LLM · JSON DB", type: "commit" },
  { text: "drwxr-x  verthien/       [DONE]  Web App · ACM Calc", type: "commit" },
  { text: "drwxr-x  luminor-tars/   [R&D]   Python · Agents · LLM", type: "commit" },
  { text: "drwxr-x  pdv-tatu/       [DONE]  PDV · Offline-first", type: "commit" },
];

export function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [typed, setTyped] = useState<string[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;

    const tick = () => {
      if (cancelled) return;
      if (lineIdx >= PROJECTS.length) return;
      const target = PROJECTS[lineIdx].text;
      setTyped((prev) => {
        const next = [...prev];
        next[lineIdx] = target.slice(0, charIdx + 1);
        return next;
      });
      charIdx++;
      if (charIdx >= target.length) {
        lineIdx++;
        charIdx = 0;
        setTimeout(tick, 300);
      } else {
        setTimeout(tick, 40);
      }
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, [started]);

  return (
    <div
      ref={ref}
      className="overflow-hidden border border-[var(--border-default)] bg-[#080a0f]"
      style={{ borderRadius: 8 }}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-[var(--border-default)] bg-[#0a0c12] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#3a3f4b]" />
        <span className="h-3 w-3 rounded-full bg-[#3a3f4b]" />
        <span className="h-3 w-3 rounded-full bg-[#3a3f4b]" />
        <span className="ml-3 font-mono text-[0.65rem] text-muted-1">~/felipe — zsh</span>
      </div>

      <pre className="overflow-x-auto whitespace-pre p-5 font-mono text-[0.62rem] sm:text-[0.72rem] md:text-[0.78rem] leading-relaxed text-[var(--text)]">
{`> `}<span className="text-muted-1">// dev profile</span>{`
`}<span className="text-[var(--text)]">{`{`}</span>{`
  `}<span className="text-amber">"nome"</span>{`: `}<span className="text-teal">{`"Felipe"`}</span>{`,
  `}<span className="text-amber">"foco"</span>{`: `}<span className="text-teal">{`"Full-Stack & Sistemas"`}</span>{`,
  `}<span className="text-amber">"abordagem"</span>{`: `}<span className="text-teal">{`"negócio primeiro"`}</span>{`,
  `}<span className="text-amber">"projetos"</span>{`: `}<span className="text-blue">5</span>{`,
  `}<span className="text-amber">"status"</span>{`: `}<span className="text-teal">{`"disponível para projetos"`}</span>{`
`}<span className="text-[var(--text)]">{`}`}</span>{`

`}<span className="text-teal">$</span>{` ls -la ./projetos/
`}
        {PROJECTS.map((c, i) => {
          const typedText = typed[i] ?? "";
          const perms = typedText.slice(0, 9);
          const dirName = typedText.slice(9, 25);
          const status = typedText.slice(25, 33);
          const tags = typedText.slice(33);

          let statusColor = "text-amber";
          if (status.includes("DONE")) statusColor = "text-teal";
          else if (status.includes("R&D")) statusColor = "text-blue";

          return (
            <span key={i}>
              <span className="text-muted-1">{perms}</span>
              <span className="text-blue">{dirName}</span>
              <span className={statusColor}>{status}</span>
              <span className="text-[var(--text)] opacity-70">{tags}</span>
              {"\n"}
            </span>
          );
        })}
        <span className="text-teal">$</span>{" "}
        <span className="inline-block h-4 w-2 translate-y-0.5 bg-[var(--accent-teal)] blink align-middle" />
      </pre>
    </div>
  );
}
