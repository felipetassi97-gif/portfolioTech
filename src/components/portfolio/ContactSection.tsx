import { Reveal } from "./Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { Text } from "./DecryptText";

type ContactItem = {
  labelPt: string;
  labelEn: string;
  valuePt: string;
  valueEn: string;
  href: string;
};

const contacts: ContactItem[] = [
  { labelPt: "E-mail", labelEn: "Email", valuePt: "Felipetassi97@gmail.com", valueEn: "Felipetassi97@gmail.com", href: "mailto:felipetassi97@gmail.com" },
  { labelPt: "WhatsApp", labelEn: "WhatsApp", valuePt: "+55 11 98367-8676", valueEn: "+55 11 98367-8676", href: "https://wa.me/5511983678676" },
  { labelPt: "GitHub", labelEn: "GitHub", valuePt: "Em progresso...", valueEn: "In progress...", href: "https://github.com/" },
  { labelPt: "LinkedIn", labelEn: "LinkedIn", valuePt: "Linkedin.com/in/felipe-tassi", valueEn: "Linkedin.com/in/felipe-tassi", href: "https://www.linkedin.com/in/felipe-tassi-a72910102" },
];

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contato" className="relative overflow-hidden border-b border-[var(--border-default)] py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,180,255,0.07), transparent 60%)" }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center md:px-10">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-teal">
            // 04 — <Text pt="Contato" en="Contact" />
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="display-tight text-[var(--text)]" style={{ fontSize: "clamp(1.9rem, 6vw, 5rem)" }}>
            <Text pt="Vamos construir" en="Let's build" />
            <br />
            <span className="text-teal inline-block pb-2 leading-normal">
              <Text pt="algo juntos?" en="something together?" />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="max-w-xl text-[1rem] leading-relaxed text-muted-2">
            <Text
              pt="Aberto a projetos, consultorias e parcerias. Se tem um problema técnico real para resolver, fala comigo."
              en="Open to projects, consulting, and partnerships. If you have a real technical problem to solve, get in touch."
            />
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((c, idx) => (
              <a
                key={idx}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={language === "pt" ? c.labelPt : c.labelEn}
                data-cursor="hover"
                className="flex flex-col gap-2 border border-[var(--border-default)] bg-[var(--surface-1)] px-6 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)] hover:bg-[var(--surface-2)]"
                style={{ borderRadius: 8 }}
              >
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-muted-1">
                  <Text pt={c.labelPt} en={c.labelEn} />
                </span>
                <span className="text-[0.85rem] text-[var(--text)]">
                  <Text pt={c.valuePt} en={c.valueEn} />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
