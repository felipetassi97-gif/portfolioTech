# Portfólio Felipe — Plano de Build

Single page (rota `/`), dark tech futurista, scroll contínuo. Sem rotas adicionais, sem libs pesadas de animação.

## Arquitetura

- Tudo em `src/routes/index.tsx` consumindo componentes em `src/components/portfolio/`.
- Tokens de cor/tipografia adicionados em `src/styles.css` (oklch para alinhar ao sistema, mas mapeando aos hex pedidos: bg `#050608`, surfaces `#0c0e13`/`#111318`, teal `#00e6c8`, blue `#00b4ff`, violet `#7b5ef8`, text `#eef0f4`, muted `#52596b`/`#8b95a8`).
- Fontes Syne (800) + JetBrains Mono via Google Fonts, com `preconnect` adicionado em `__root.tsx` (links).
- Meta tags da home atualizadas em `index.tsx` (`head()`): title "Felipe — Full-Stack Developer & Builder", description, og.

## Componentes

```
src/components/portfolio/
  CustomCursor.tsx        # ponto + anel com lerp, hide em pointer:coarse
  Nav.tsx                 # nav fixa, logo felipe.dev_ + 3 anchors
  Hero.tsx                # 100vh, grid perspectivo canvas, glow, stats, scroll hint
  PerspectiveGrid.tsx     # canvas 2D animado, linhas se movendo lentamente
  ProjectsSection.tsx     # header + 5 ProjectCard alternando layout
  ProjectCard.tsx         # props: index, reversed, status, data; linha neon hover
  StackSection.tsx        # 2 col: skills grid + Terminal
  Terminal.tsx            # typewriter on intersect, syntax highlight manual
  ContactSection.tsx      # 4 cards: email, whatsapp, github, linkedin
  Footer.tsx
  Reveal.tsx              # wrapper IntersectionObserver, threshold 0.08
```

Dados dos 5 projetos em `src/components/portfolio/projects.data.ts` (PACTO com `status: "wip"`, demais `done`/`rd`).

## Sistema de design (styles.css)

Adicionar em `:root` (dark-only — não usaremos light theme aqui):

- `--bg`, `--surface-1`, `--surface-2`, `--accent-teal`, `--accent-blue`, `--accent-violet`, `--text`, `--muted-1`, `--muted-2`, `--border`, `--border-accent`.
- Classes utilitárias: `.font-display` (Syne), `.font-mono` (JetBrains Mono), `.neon-line` (pseudo top scaleX), `.surface`, `.card-hover`.
- Body recebe bg + scan lines via `background-image` repeat com opacity 0.008.
- Smooth scroll via `html { scroll-behavior: smooth }`.

## Interações

- **Custom cursor**: dois divs `position: fixed`, RAF loop com lerp 0.12 no anel. Ouvir `mouseover` em `[data-cursor="hover"]` para expandir. Desativar via `matchMedia('(pointer: fine)')`.
- **Reveal**: hook `useReveal()` aplica classes `opacity-0 translate-y-7` → `opacity-100 translate-y-0` quando interseccionar (700ms, cubic-bezier(0.16,1,0.3,1)). Stagger via CSS var `--delay`.
- **Hero título**: clip-path inset reveal de baixo pra cima após mount.
- **Badge WIP**: dot 5px com keyframe pulse 1.6s.
- **Terminal**: efeito typewriter (setTimeout 40ms/char, 300ms entre linhas) disparado quando a seção entra no viewport pela 1ª vez.
- **Project cards**: alternam `reversed` (idx 1, 3 invertidos), linha neon via `::before` (Tailwind arbitrary), translateY-1 e border-accent em hover.
- **CTAs**: hover translateY-2.

## Responsive

- `< 768px`: cards viram coluna única, stats do hero ocultos (`hidden md:flex`), cursor custom desativado.
- Hero título com `clamp(4rem, 9vw, 8rem)` via inline style.

## Performance

- Sem framer-motion / three.js. Apenas CSS transitions + IntersectionObserver + canvas 2D para o grid.
- Canvas pausa via `requestAnimationFrame` cancelado em `visibilitychange`.

## SEO

- `head()` no route da index com title <60ch, description <160ch, og:title, og:description, og:type=website, twitter:card=summary_large_image.
- H1 único = título do hero "Sistemas que funcionam.".
- `<main>`, `<nav>`, `<section id="projetos|stack|contato">`, `<footer>` semânticos.

## Não fazer (lembretes do brief)

Sem rotas extras, sem fotos, sem rainbow gradients, sem radius > 10px, sem progress bars de skill, sem "Sobre mim" biográfico, sem emojis no corpo.

## Detalhes técnicos

- Cores hex literais permitidas aqui porque tokens semânticos do shadcn não cobrem essa paleta neon — adicionamos novos tokens (`--accent-teal` etc.) em styles.css e usamos via classes utilitárias `text-[var(--accent-teal)]` ou novas classes utilitárias.
- Smooth scroll para âncoras `#projetos`, `#stack`, `#contato` via `href` simples + `scroll-behavior: smooth` no html.
- Links de contato com placeholders (`mailto:`, `https://wa.me/`, `https://github.com/`, `https://linkedin.com/in/`) — fácil substituir.

## Entregáveis

1. `src/styles.css` — novos tokens + utilitários + scan lines + fontes.
2. `src/routes/__root.tsx` — preconnect Google Fonts + stylesheet Syne/JetBrains Mono.
3. `src/routes/index.tsx` — composição da home + meta.
4. `src/components/portfolio/*` — 10 arquivos listados acima.
5. `src/components/portfolio/projects.data.ts` — dados dos 5 projetos.
