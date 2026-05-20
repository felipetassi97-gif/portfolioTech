export type ProjectStatus = "wip" | "done" | "rd";

export type Feature = {
  title: string;
  detail: string;
};

export type Project = {
  number: string;
  name: string;
  status: ProjectStatus;
  statusLabel: string;
  tagline: string;
  description: string;
  tags: string[];
  features: Feature[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "PACTO",
    status: "wip",
    statusLabel: "Em dev",
    tagline: "// Plataforma de desafios 1v1 & constância",
    description:
      "Plataforma premium de duelos de hábitos com gamificação financeira via créditos internos (Selos) e sistema antifraude baseado em metadados de prova.",
    tags: ["Next.js 16", "React 18", "Supabase", "PostgreSQL 15", "Tailwind v4", "PIX / Asaas", "Realtime"],
    features: [
      {
        title: "Transações atômicas com lock exclusivo",
        detail: "RPC PostgreSQL com SELECT FOR UPDATE para evitar race conditions em pagamentos simultâneos sob alta concorrência",
      },
      {
        title: "Antifraude por metadados de imagem",
        detail: "Extração de EXIF (timestamp real + geolocalização), hash perceptual (phash) e criptográfico (file_hash) para barrar provas duplicadas ou adulteradas",
      },
      {
        title: "Tribunal & Júri independente",
        detail: "Sistema de votação por usuários premium para resolução de disputas sobre autenticidade de provas enviadas",
      },
      {
        title: "Painel Admin & resgates financeiros",
        detail: "Interface de auditoria de saques (redemptions) com monitoramento de logs de risco em tempo real",
      },
    ],
  },
  {
    number: "02",
    name: "POS ST. JOHN'S",
    status: "done",
    statusLabel: "Entregue",
    tagline: "// Sistema de gestão & ponto de venda inteligente",
    description:
      "POS de alta performance para operação diária de Pubs e Restaurantes — controle de pedidos, fechamento financeiro e inteligência de negócio local integrados.",
    tags: ["FastAPI", "Python", "Vanilla JS", "Tailwind CSS", "JSON DB", "LLM local"],
    features: [
      {
        title: "IA de inteligência de vendas",
        detail: "Assistente que analisa histórico de caixa, prevê demanda semanal de estoque e identifica os pratos de maior margem automaticamente",
      },
      {
        title: "Controle de comandas e mesas",
        detail: "Atualização instantânea de status de itens para cozinha e bar, em tempo real, sem refresh",
      },
      {
        title: "Dashboard financeiro completo",
        detail: "Fluxo de caixa diário com breakdown por método de pagamento (PIX, cartão, dinheiro) e métricas de lucratividade",
      },
      {
        title: "Backup automático local",
        detail: "Versionamento programado dos arquivos JSON — zero perda de dados operacionais em falhas de energia do estabelecimento",
      },
    ],
  },
  {
    number: "03",
    name: "SISTEMAS VERTHIEN",
    status: "done",
    statusLabel: "Entregue",
    tagline: "// Engenharia civil & fachadas de alto padrão",
    description:
      "Suite de sistemas para gestão, orçamento e exibição de portfólio técnico de fachadas arquitetônicas e revestimentos em ACM para a construtora Verthien.",
    tags: ["Web App", "Cálculo ACM", "Orçamentos dinâmicos", "Catálogo técnico"],
    features: [
      {
        title: "Cálculo de materiais por projeto",
        detail: "Consumo automático de vidros, esquadrias e placas de ACM com base nas dimensões reais da obra",
      },
      {
        title: "Catálogo técnico de fachadas",
        detail: "Módulos Fachadas, ACMs e GMoema com apresentações de engenharia para conversão de clientes B2B",
      },
      {
        title: "Orçamentos comerciais dinâmicos",
        detail: "Geração de propostas personalizadas com atualização em tempo real de materiais e custos",
      },
    ],
  },
  {
    number: "04",
    name: "LUMINOR & TARS",
    status: "rd",
    statusLabel: "P&D interno",
    tagline: "// Automação, desktop & agentes de IA",
    description:
      "Projetos de pesquisa e desenvolvimento focados em interfaces inteligentes de desktop e assistentes autônomos de codificação com arquitetura modular de agentes.",
    tags: ["Python", "FastAPI", "LLMs", "Agentes autônomos", "Desktop UI"],
    features: [
      {
        title: "Luminor 2 — dev autônomo",
        detail: "Arquitetura modular de agentes (core, skills, storage) para execução de tarefas técnicas locais via LLMs, sem cloud",
      },
      {
        title: "UI-TARS-desktop",
        detail: "Painel de controle desktop customizado para automação de fluxo de trabalho do usuário final",
      },
      {
        title: "Skills system plugável",
        detail: "Sistema de habilidades plugáveis que expande as capacidades do agente sem alterar o core, por composição",
      },
    ],
  },
  {
    number: "05",
    name: "PDV TATU",
    status: "done",
    statusLabel: "Entregue",
    tagline: "// Ponto de venda para comércio varejista regional",
    description:
      "Sistema de ponto de venda simplificado voltado ao comércio varejista regional, consolidando experiência em sistemas comerciais de baixa fricção e alto pragmatismo.",
    tags: ["Sistema comercial", "Varejo regional", "PDV"],
    features: [
      {
        title: "Operação de baixa fricção",
        detail: "Fluxo de venda otimizado para o operador — rapidez no caixa sem necessidade de treinamento extenso",
      },
      {
        title: "Gestão de estoque local",
        detail: "Controle de inventário adaptado à realidade do varejo regional com custo de operação mínimo",
      },
      {
        title: "Resiliência offline",
        detail: "Funcionamento sem dependência de internet estável — projetado para a realidade do comércio local brasileiro",
      },
    ],
  },
];
