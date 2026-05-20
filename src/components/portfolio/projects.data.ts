export type ProjectStatus = "wip" | "done" | "rd";

export type Feature = {
  titlePt: string;
  titleEn: string;
  detailPt: string;
  detailEn: string;
};

export type Project = {
  number: string;
  name: string;
  status: ProjectStatus;
  statusLabelPt: string;
  statusLabelEn: string;
  taglinePt: string;
  taglineEn: string;
  descriptionPt: string;
  descriptionEn: string;
  tags: string[];
  features: Feature[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "PACTO",
    status: "wip",
    statusLabelPt: "Em dev",
    statusLabelEn: "In dev",
    taglinePt: "// Plataforma de desafios 1v1 & constância",
    taglineEn: "// 1v1 habits challenge & consistency platform",
    descriptionPt:
      "Plataforma premium de duelos de hábitos com gamificação financeira via créditos internos (Selos) e sistema antifraude baseado em metadados de prova.",
    descriptionEn:
      "Premium habit duels platform with financial gamification via internal credits (Seals) and anti-fraud system based on proof metadata.",
    tags: ["Next.js 16", "React 18", "Supabase", "PostgreSQL 15", "Tailwind v4", "PIX / Asaas", "Realtime"],
    features: [
      {
        titlePt: "Transações atômicas com lock exclusivo",
        titleEn: "Atomic transactions with exclusive lock",
        detailPt: "RPC PostgreSQL com SELECT FOR UPDATE para evitar race conditions em pagamentos simultâneos sob alta concorrência",
        detailEn: "PostgreSQL RPC with SELECT FOR UPDATE to prevent race conditions in simultaneous payments under high concurrency",
      },
      {
        titlePt: "Antifraude por metadados de imagem",
        titleEn: "Anti-fraud by image metadata",
        detailPt: "Extração de EXIF (timestamp real + geolocalização), hash perceptual (phash) e criptográfico (file_hash) para barrar provas duplicadas ou adulteradas",
        detailEn: "EXIF extraction (real timestamp + geolocation), perceptual hash (phash), and cryptographic hash (file_hash) to block duplicate or tampered proof",
      },
      {
        titlePt: "Tribunal & Júri independente",
        titleEn: "Independent Tribunal & Jury",
        detailPt: "Sistema de votação por usuários premium para resolução de disputas sobre autenticidade de provas enviadas",
        detailEn: "Voting system by premium users to resolve disputes about the authenticity of submitted proof",
      },
      {
        titlePt: "Painel Admin & resgates financeiros",
        titleEn: "Admin Panel & financial redemptions",
        detailPt: "Interface de auditoria de saques (redemptions) com monitoramento de logs de risco em tempo real",
        detailEn: "Audit interface for withdrawals (redemptions) with real-time risk log monitoring",
      },
    ],
  },
  {
    number: "02",
    name: "POS ST. JOHN'S",
    status: "done",
    statusLabelPt: "Entregue",
    statusLabelEn: "Delivered",
    taglinePt: "// Sistema de gestão & ponto de venda inteligente",
    taglineEn: "// Management system & smart point of sale",
    descriptionPt:
      "POS de alta performance para operação diária de Pubs e Restaurantes — controle de pedidos, fechamento financeiro e inteligência de negócio local integrados.",
    descriptionEn:
      "High-performance POS for daily operations of Pubs and Restaurants — order control, financial closing, and local business intelligence integrated.",
    tags: ["FastAPI", "Python", "Vanilla JS", "Tailwind CSS", "JSON DB", "LLM local"],
    features: [
      {
        titlePt: "IA de inteligência de vendas",
        titleEn: "Sales intelligence AI",
        detailPt: "Assistente que analisa histórico de caixa, prevê demanda semanal de estoque e identifica os pratos de maior margem automaticamente",
        detailEn: "Assistant that analyzes cash register history, predicts weekly inventory demand, and automatically identifies the highest margin dishes",
      },
      {
        titlePt: "Controle de comandas e mesas",
        titleEn: "Tab and table control",
        detailPt: "Atualização instantânea de status de itens para cozinha e bar, em tempo real, sem refresh",
        detailEn: "Instant item status updates for kitchen and bar, in real time, without page refreshes",
      },
      {
        titlePt: "Dashboard financeiro completo",
        titleEn: "Full financial dashboard",
        detailPt: "Fluxo de caixa diário com breakdown por método de pagamento (PIX, cartão, dinheiro) e métricas de lucratividade",
        detailEn: "Daily cash flow with breakdown by payment method (PIX, card, cash) and profitability metrics",
      },
      {
        titlePt: "Backup automático local",
        titleEn: "Local automatic backup",
        detailPt: "Versionamento programado dos arquivos JSON — zero perda de dados operacionais em falhas de energia do estabelecimento",
        detailEn: "Scheduled versioning of JSON files — zero loss of operational data in the event of local power outages",
      },
    ],
  },
  {
    number: "03",
    name: "SISTEMAS VERTHIEN",
    status: "done",
    statusLabelPt: "Entregue",
    statusLabelEn: "Delivered",
    taglinePt: "// Engenharia civil & fachadas de alto padrão",
    taglineEn: "// Civil engineering & high-end facades",
    descriptionPt:
      "Suite de sistemas para gestão, orçamento e exibição de portfólio técnico de fachadas arquitetônicas e revestimentos em ACM para a imobiliária Verthien.",
    descriptionEn:
      "Systems suite for management, budgeting, and exhibition of architectural facades and ACM coatings technical portfolio for Verthien Real Estate.",
    tags: ["Web App", "Cálculo ACM", "Orçamentos dinâmicos", "Catálogo técnico"],
    features: [
      {
        titlePt: "Cálculo de materiais por projeto",
        titleEn: "Material calculation by project",
        detailPt: "Consumo automático de vidros, esquadrias e placas de ACM com base nas dimensões reais da obra",
        detailEn: "Automatic consumption calculation of glass, frames, and ACM panels based on real construction dimensions",
      },
      {
        titlePt: "Catálogo técnico de fachadas",
        titleEn: "Facade technical catalog",
        detailPt: "Módulos Fachadas, ACMs e GMoema com apresentações de engenharia para conversão de clientes B2B",
        detailEn: "Facade, ACM, and GMoema modules with engineering presentations for B2B client conversion",
      },
      {
        titlePt: "Orçamentos comerciais dinâmicos",
        titleEn: "Dynamic commercial budgets",
        detailPt: "Geração de propostas personalizadas com atualização em tempo real de materiais e custos",
        detailEn: "Custom proposal generation with real-time updates of materials and costs",
      },
    ],
  },
  {
    number: "04",
    name: "LUMINOR & TARS",
    status: "rd",
    statusLabelPt: "P&D interno",
    statusLabelEn: "Internal R&D",
    taglinePt: "// Automação, desktop & agentes de IA",
    taglineEn: "// Automation, desktop & AI agents",
    descriptionPt:
      "Projetos de pesquisa e desenvolvimento focados em interfaces inteligentes de desktop e assistentes autônomos de codificação com arquitetura modular de agentes.",
    descriptionEn:
      "Research and development projects focused on smart desktop interfaces and autonomous coding assistants with modular agent architecture.",
    tags: ["Python", "FastAPI", "LLMs", "Agentes autônomos", "Desktop UI"],
    features: [
      {
        titlePt: "Luminor 2 — dev autônomo",
        titleEn: "Luminor 2 — autonomous dev",
        detailPt: "Arquitetura modular de agentes (core, skills, storage) para execução de tarefas técnicas locais via LLMs, sem cloud",
        detailEn: "Modular agent architecture (core, skills, storage) to execute local technical tasks via LLMs, cloud-free",
      },
      {
        titlePt: "UI-TARS-desktop",
        titleEn: "UI-TARS-desktop",
        detailPt: "Painel de controle desktop customizado para automação de fluxo de trabalho do usuário final",
        detailEn: "Custom desktop dashboard for end-user workflow automation",
      },
      {
        titlePt: "Skills system plugável",
        titleEn: "Pluggable skills system",
        detailPt: "Sistema de habilidades plugáveis que expande as capacidades do agente sem alterar o core, por composição",
        detailEn: "Pluggable skills system that expands the agent's capabilities without changing the core, via composition",
      },
    ],
  },
  {
    number: "05",
    name: "PDV TATU",
    status: "done",
    statusLabelPt: "Entregue",
    statusLabelEn: "Delivered",
    taglinePt: "// Ponto de venda para comércio varejista regional",
    taglineEn: "// Point of sale for regional retail",
    descriptionPt:
      "Sistema de ponto de venda simplificado voltado ao comércio varejista regional, consolidando experiência em sistemas comerciais de baixa fricção e alto pragmatismo.",
    descriptionEn:
      "Simplified POS system designed for regional retail commerce, consolidating experience in low-friction, high-pragmatism commercial systems.",
    tags: ["Sistema comercial", "Varejo regional", "PDV"],
    features: [
      {
        titlePt: "Operação de baixa fricção",
        titleEn: "Low-friction operation",
        detailPt: "Fluxo de venda otimizado para o operador — rapidez no caixa sem necessidade de treinamento extenso",
        detailEn: "Sales flow optimized for the cashier operator — speed at checkout without the need for extensive training",
      },
      {
        titlePt: "Gestão de estoque local",
        titleEn: "Local inventory management",
        detailPt: "Controle de inventário adaptado à realidade do varejo regional com custo de operação mínimo",
        detailEn: "Inventory control adapted to the reality of regional retail with minimal operating cost",
      },
      {
        titlePt: "Resiliência offline",
        titleEn: "Offline resilience",
        detailPt: "Funcionamento sem dependência de internet estável — projetado para a realidade do comércio local brasileiro",
        detailEn: "Operation without internet dependency — designed for the reality of Brazilian local retail",
      },
    ],
  },
];
