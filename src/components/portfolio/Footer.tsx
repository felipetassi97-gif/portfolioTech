export function Footer() {
  return (
    <footer className="border-t border-[var(--border-default)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 md:flex-row md:items-center md:px-10">
        <p className="font-mono text-[0.7rem] text-muted-1">
          © 2025 Felipe — Todos os direitos reservados
        </p>
        <p className="font-mono text-[0.7rem] text-teal/60">Built with precision.</p>
      </div>
    </footer>
  );
}
