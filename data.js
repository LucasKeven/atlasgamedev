/* =============================================================
   ATLAS DO DESENVOLVIMENTO DE JOGOS — Camada de dados (taxonomia)
   -------------------------------------------------------------
   Este é o "banco de dados" do site. Tudo que aparece na tela
   vem daqui. Para adicionar/editar conteúdo, mexa SÓ neste arquivo.

   Modelo de uma categoria:
   {
     id, n (nº de catálogo), name (PT), nameEn, family, aka?,
     desc,                          // descrição em PT
     areas: [{ name, desc? }],      // sub-áreas / termos
     skills?: [string],             // habilidades (opcional)
     software?: [string]            // ferramentas (opcional)
   }

   "family" agrupa as 23 categorias em 5 famílias para navegação
   e cor. Fonte dos dados: pôster Hitmarker (taxonomia), Atlas em
   PDF (descrições/ferramentas/canais) e infográfico Creative
   Assembly (skills/software).
   ============================================================= */

const FAMILIES = {
  craft:      { label: "Criação",               color: "#C8432E" },
  tech:       { label: "Engenharia",            color: "#2347E8" },
  production: { label: "Produção & Operações",  color: "#1E7A4B" },
  business:   { label: "Negócios",              color: "#B8791A" },
  community:  { label: "Comunidade & Eventos",  color: "#7A3DB8" },
};

// helper: transforma "AI Programming, Engine Programming" em [{name},{name}]
const A = (...names) => names.map((name) =>
  typeof name === "string" ? { name } : name
);

const CATEGORIES = [
  /* ---------------------------------------------------------- 01 */
  {
    id: "programacao", n: 1, name: "Programação", nameEn: "Game Programming",
    family: "tech", aka: "Engenharia de Jogos",
    desc: "O processo de criação e implementação do código que faz o jogo funcionar. Envolve linguagens como C++, C# e Java para construir mecânicas — movimentação, vida, energia, pontuação, diálogos, física e IA. Programadores trabalham junto a designers e artistas para tirar ideias do papel e transformá-las num jogo digital.",
    areas: A(
      { name: "AI Programming", desc: "Comportamento de personagens e inimigos: pathfinding, máquinas de estado, árvores de comportamento." },
      "Build & Release Programming",
      "Developer Relations",
      "Development Direction",
      { name: "Engine Programming", desc: "Construção e manutenção do motor do jogo e seus subsistemas centrais." },
      { name: "Gameplay Programming", desc: "Implementa as regras e mecânicas que o jogador sente: controles, combate, sistemas." },
      { name: "Graphics Programming", desc: "Pipeline de renderização, shaders e desempenho visual." },
      "Multiplayer Programming",
      "Network Programming",
      "Physics Programming",
      "Rendering",
      { name: "Tools Programming", desc: "Ferramentas internas que aceleram o trabalho de artistas, designers e da própria equipe." },
      "UI Programming",
    ),
    skills: ["Lógica e matemática", "Resolução de problemas", "Geometria e álgebra linear", "Testes unitários", "Modelagem e abstração", "C# · C++ · Python"],
    software: ["Visual Studio", "VS Code", "Unreal Engine", "Unity", "Godot", "Perforce", "AWS", "pytest"],
  },

  /* ---------------------------------------------------------- 02 */
  {
    id: "arte", n: 2, name: "Arte", nameEn: "Art", family: "craft",
    desc: "A criação dos elementos visuais do jogo — personagens, ambientes e efeitos especiais. Usa técnicas como modelagem 2D e 3D, animação, texturização e iluminação para dar vida ao mundo. Trabalha com design e programação para garantir que o estilo e a direção de arte complementem a jogabilidade e a experiência geral.",
    areas: A(
      "2D Art", "3D Art", "Character Art",
      { name: "Concept Art", desc: "Exploração visual inicial: define a aparência de personagens, cenários e objetos antes da produção." },
      "Creative / Art Direction", "Environment Art", "Level Art", "Lighting Art",
      "Marketing Art", "Material Art", "Model Art", "Outsourcing", "Prop Art",
      "Shader Art", "Storyboarding",
      { name: "Technical Art", desc: "Ponte entre arte e engenharia: shaders, rigs, pipelines e otimização visual." },
      "Texture Art", "Tools & Pipeline", "UI Art", "Vehicle Art",
      { name: "VFX Art", desc: "Efeitos visuais: partículas, explosões, magia, fumaça e elementos dinâmicos." },
      "Weapon Art",
    ),
    skills: ["Composição e ilustração", "Modelagem low/high poly", "Texturização (PBR)", "Set dressing", "Fluxo de UI e ícones", "Cinemática e iluminação"],
    software: ["Photoshop", "Illustrator", "Blender", "Maya", "3ds Max", "ZBrush", "Substance Painter", "Substance Designer", "Houdini", "Figma", "Marmoset Toolbag", "Aseprite", "Krita"],
  },

  /* ---------------------------------------------------------- 03 */
  {
    id: "software-engineering", n: 3, name: "Engenharia de Software", nameEn: "Software Engineering",
    family: "tech",
    desc: "Engenharia dos sistemas e serviços que sustentam o jogo e a empresa fora da engine: back-end, infraestrutura em nuvem, ferramentas internas, plataformas de dados, segurança e aplicativos. Garante que tudo escale, seja confiável e esteja seguro.",
    areas: A("Ads", "AI", "Backend", "Build & Release", "Cloud", "Data Analytics",
      "DevOps", "Direction", "Engineer Relations", "Frontend", "Full Stack",
      "Manufacturing", "Mobile", "Network", "Product Design", "Project Management",
      "Prompt", "Reliability", "Security", "Technical", "Technical Writing"),
    software: ["AWS", "Docker", "Kubernetes", "Git", "Python", "Go", "TypeScript", "SQL"],
  },

  /* ---------------------------------------------------------- 04 */
  {
    id: "talent", n: 4, name: "Talentos", nameEn: "Talent", family: "community",
    desc: "Profissionais que aparecem para o público — apresentadores, dubladores, atores, streamers e jogadores de conteúdo — e quem os gerencia, agencia e dá suporte. A 'cara' por trás de marcas, canais e produções.",
    areas: A("Agency", "Casting", "Content Creation", "Hosting", "Interviewing",
      "Management", "Playing", "Screen Acting", "Streaming", "Voice Acting"),
  },

  /* ---------------------------------------------------------- 05 */
  {
    id: "content-media", n: 5, name: "Conteúdo & Mídia", nameEn: "Content & Media",
    family: "business",
    desc: "Produção de conteúdo e mídia em torno do jogo: vídeo, fotografia, design gráfico, captura de gameplay, jornalismo, edição e moderação. Conta a história do jogo para a comunidade e para o público.",
    areas: A("Cinematography", "Copy Editing", "Game Capture", "Graphic Design",
      "Journalism", "Moderation", "Motion Design", "Photography", "Scriptwriting",
      "Translation", "Trust & Safety", "Video Editing", "Videography"),
  },

  /* ---------------------------------------------------------- 06 */
  {
    id: "human-resources", n: 6, name: "Recursos Humanos", nameEn: "Human Resources",
    family: "production",
    desc: "Cuida das pessoas do estúdio — recrutamento, contratação, cultura, benefícios, desenvolvimento, diversidade e bem-estar. Constrói e mantém o time que faz os jogos.",
    areas: A("Analysis", "Compensation & Benefits", "Culture", "Diversity & Inclusion",
      "Employee Relations", "Employer Branding", "Engagement", "Health & Safety",
      "Mobility", "People Management", "Recruitment", "Talent Acquisition",
      "Training & Development", "Wellness"),
  },

  /* ---------------------------------------------------------- 07 */
  {
    id: "it", n: 7, name: "TI", nameEn: "IT", family: "tech",
    desc: "Mantém a infraestrutura interna funcionando: redes, sistemas, suporte técnico e segurança da informação. A base que mantém o estúdio operando no dia a dia.",
    areas: A("Cyber Security", "Network Admin", "System Admin", "Technical Support"),
  },

  /* ---------------------------------------------------------- 08 */
  {
    id: "research", n: 8, name: "Pesquisa", nameEn: "Research", family: "production",
    desc: "Investiga jogadores, mercado e operações para embasar decisões — pesquisa acadêmica, de consumidor e de mercado. Transforma dados e observação em insumo para design e negócio.",
    areas: A("Academic", "Consumer", "Data Entry", "Market", "Operations"),
  },

  /* ---------------------------------------------------------- 09 */
  {
    id: "game-design", n: 9, name: "Game Design", nameEn: "Game Design", family: "craft",
    desc: "A criação dos conceitos e regras que governam o jogo — mecânicas, sistemas e a experiência do jogador. Designers usam criatividade e resolução de problemas para tornar o jogo divertido, envolvente e desafiador, colaborando com arte, programação, áudio e dados para transformar ideias e planos de negócio em realidade.",
    areas: A(
      "Accessibility Design", "AI Design", "Combat Design", "Content Design",
      "Design Direction",
      { name: "Economy Design", desc: "Equilíbrio de recursos, moedas, progressão e fluxos de valor dentro do jogo." },
      "Encounter Design", "Interaction Design",
      { name: "Level Design", desc: "Construção de fases e espaços: ritmo, desafio, fluxo e a jornada do jogador pelo mundo." },
      "Mission Design", "Monetization Design", "Multiplayer Design",
      { name: "Narrative Design", desc: "Estrutura a história e como ela é contada através da jogabilidade e do mundo." },
      "Prototyping", "Puzzle Design", "Quest Design", "Scripting", "Social Design",
      { name: "Systems Design", desc: "Desenha as regras interligadas que criam o comportamento emergente do jogo." },
      "Technical Design", "UI Design", "World Building", "Writing (Game Writing)",
    ),
    skills: ["Documentação de design e conceito", "Colaboração", "Pensamento analítico", "Resolução de problemas", "Matemática", "Design visual"],
    software: ["Unity", "Unreal Engine", "Excel", "Visio", "Power BI", "Miro", "Photoshop", "Twine", "Celtx"],
  },

  /* ---------------------------------------------------------- 10 */
  {
    id: "animacao", n: 10, name: "Animação", nameEn: "Animation", family: "craft",
    desc: "A criação dos movimentos e ações de personagens, criaturas e objetos. Usa keyframes, motion capture e outras técnicas para gerar movimento realista ou estilizado. Trabalha com design e programação para garantir que a animação seja responsiva, fluida e crível, melhorando a jogabilidade e a experiência do jogador.",
    areas: A("2D Animation", "3D Animation", "Cinematics", "Gameplay Animation",
      "Motion Capture", "Particle Animation", "Programming", "Rigging", "Scanning",
      "Technical Animation", "VFX Animation"),
    skills: ["Animação por keyframe", "Edição de movimento com MoCap", "Atuação para MoCap", "Skinning e rigging", "Scripting e matemática 3D"],
    software: ["Maya", "MotionBuilder", "3ds Max", "Blender", "Mixamo", "Cascadeur", "Toon Boom Harmony", "After Effects"],
  },

  /* ---------------------------------------------------------- 11 */
  {
    id: "quality-assurance", n: 11, name: "Quality Assurance", nameEn: "Quality Assurance",
    family: "tech", aka: "QA",
    desc: "Garante que dados de qualidade — bugs, erros, resultados de teste e feedback dos jogadores — sejam encontrados e comunicados durante todo o desenvolvimento. Cobre testes manuais e automatizados, certificação, compatibilidade, conformidade e desempenho.",
    areas: A("Accessibility QA", "Cinematic QA", "Compatibility QA", "Interruption QA",
      "Performance QA", "Platform QA", "Ratings QA", "QA Analysis", "QA Automation",
      "QA Certification", "QA Compliance", "QA Designing", "QA Engineering",
      "QA Submission", "QA Testing", "SDET (Software Development Engineer in Test)"),
    skills: ["Automação de testes de jogo", "Comunicação escrita e verbal", "Documentação clara", "Forte base na área testada"],
    software: ["TestRail", "Jira", "Perforce", "Power BI", "Office"],
  },

  /* ---------------------------------------------------------- 12 */
  {
    id: "broadcast", n: 12, name: "Transmissão", nameEn: "Broadcast", family: "community",
    desc: "Produção e transmissão de eventos e conteúdo ao vivo — câmeras, gráficos, iluminação, replay, som e engenharia de stream. Leva a ação do jogo à tela para o público, com qualidade de TV.",
    areas: A("Camera Ops", "Floor Management", "Game Observation", "Graphics",
      "Lighting", "Production", "Replay Ops", "Scriptwriting", "Sound Engineering",
      "Stream Engineering", "Studio Management"),
    software: ["OBS Studio", "vMix", "Adobe Premiere", "After Effects"],
  },

  /* ---------------------------------------------------------- 13 */
  {
    id: "competitive", n: 13, name: "Competitivo", nameEn: "Competitive", family: "community",
    desc: "A estrutura por trás dos esports e do jogo competitivo — coaching, análise, scouting, gestão de times e suporte de performance (física, nutrição, psicologia). Ajuda jogadores e equipes a competirem no mais alto nível.",
    areas: A("Analysis", "Coaching", "Fitness", "Nutrition", "Physiotherapy",
      "Playing", "Psychology", "Refereeing", "Scouting", "Team Management"),
  },

  /* ---------------------------------------------------------- 14 */
  {
    id: "finance-legal", n: 14, name: "Finanças & Jurídico", nameEn: "Finance & Legal",
    family: "business",
    desc: "O lado financeiro e jurídico do negócio — contabilidade, auditoria, impostos, folha, licenciamento, contratos, compliance, privacidade e gestão de risco. Mantém a operação saudável e dentro da lei.",
    areas: A("Accounting", "Analysis", "Auditing", "Bookkeeping", "Compliance",
      "Control", "Counsel", "Fraud", "Licensing", "Mergers & Acquisitions",
      "Payroll", "Privacy", "Reporting", "Risk Management", "Tax"),
  },

  /* ---------------------------------------------------------- 15 */
  {
    id: "administrative", n: 15, name: "Administrativo", nameEn: "Administrative",
    family: "production",
    desc: "Suporte operacional que mantém o escritório e o time funcionando — assistência executiva, gestão de instalações, recepção e tarefas administrativas. O alicerce silencioso do dia a dia.",
    areas: A("Data Entry", "Executive & Personal Assistance", "Facilities Support",
      "Office Management", "Reception"),
  },

  /* ---------------------------------------------------------- 16 */
  {
    id: "education", n: 16, name: "Educação", nameEn: "Education", family: "production",
    desc: "Ensino e formação em jogos — pesquisa acadêmica, design de currículo, aulas, gestão de programas e proteção de estudantes. Forma a próxima geração de profissionais.",
    areas: A("Academic Research", "Curriculum Design", "Lecturing",
      "Program Development", "Program Management", "Safeguarding", "Teaching"),
  },

  /* ---------------------------------------------------------- 17 */
  {
    id: "producao", n: 17, name: "Gestão & Produção", nameEn: "Game Production",
    family: "production",
    desc: "Gerencia o desenvolvimento, a criação e o lançamento do jogo. Coordena designers, artistas, programadores e outros especialistas para entregar dentro de prazo e orçamento, supervisionando o processo e tomando decisões-chave para atingir a visão criativa e os padrões de qualidade.",
    areas: A("Accessibility Production", "Archiving", "Creative Direction",
      "Feature Production", "Game Direction", "Knowledge Management", "Live Operations",
      "Operations", "Producing", "Project Management", "Publishing",
      "Release Management", "Studio Management"),
    skills: ["Gestão de pessoas", "Gestão de tempo", "Apresentação", "Comunicação", "Agile / Scrum"],
    software: ["Jira", "Hansoft", "Notion", "Trello", "Power BI", "Power Query", "Miro", "Office"],
  },

  /* ---------------------------------------------------------- 18 */
  {
    id: "audio", n: 18, name: "Áudio", nameEn: "Audio", family: "craft",
    desc: "A criação e implementação de sons e músicas no jogo, nos aspectos técnicos e criativos. Cria efeitos sonoros, diálogos e trilhas que complementam a jogabilidade, colaborando de perto com a programação para integrar tudo perfeitamente à engine.",
    areas: A("Audio Composition", "Audio Engineering", "Audio Production",
      "Audio Programming", "Sound Design", "Technical Design", "Vocal Direction",
      "Voice Design"),
    skills: ["Edição e composição", "Engenharia de som", "Documentação forte e lógica", "Mixagem 5.1 e multicanal"],
    software: ["Pro Tools", "REAPER", "Nuendo", "Audition", "Audacity", "iZotope RX", "Wwise", "FMOD"],
  },

  /* ---------------------------------------------------------- 19 */
  {
    id: "localization", n: 19, name: "Localização", nameEn: "Localization", family: "tech",
    desc: "Adapta o jogo para outros idiomas e culturas — tradução, edição, linguagem inclusiva, testes e engenharia de localização. Faz o jogo parecer nativo em cada mercado.",
    areas: A("Editing", "Engineering", "Inclusive Language", "Technical", "Testing", "Translation"),
  },

  /* ---------------------------------------------------------- 20 */
  {
    id: "ux", n: 20, name: "UX", nameEn: "User Experience", family: "craft",
    desc: "Experiência do usuário — pesquisa, arquitetura de informação, usabilidade, acessibilidade e design de interface. Garante que o jogo seja claro, acessível e agradável de navegar.",
    areas: A("Accessibility", "Design", "Engineering", "Information Architecture",
      "Research", "Strategy", "Usability", "Writing"),
  },

  /* ---------------------------------------------------------- 21 */
  {
    id: "events", n: 21, name: "Eventos", nameEn: "Events", family: "community",
    desc: "Planejamento e operação de eventos presenciais e online — logística, hospitalidade, segurança, audiovisual, instalações e atendimento. Faz convenções, finais e ativações acontecerem.",
    areas: A("Audio/Visual", "Catering", "Customer Service", "Emergency Services",
      "Equipment Management", "Facilities Management", "Game Observation",
      "Hospitality", "Logistics", "Security"),
  },

  /* ---------------------------------------------------------- 22 */
  {
    id: "marketing", n: 22, name: "Marketing & Publicação", nameEn: "Marketing",
    family: "business",
    desc: "Promoção e divulgação de jogos, serviços e personalidades para clientes e seguidores potenciais. Inclui trailers e materiais promocionais, anúncios em TV e redes sociais, e interação com a comunidade via eventos, sorteios e campanhas.",
    areas: A("App Store Marketing", "Brand Marketing", "Campaign Management",
      "Community Management", "Copywriting", "Creator Marketing", "Digital Marketing",
      "Email Marketing", "Influencer Marketing", "Lifecycle Marketing",
      "Product Marketing", "Public Relations", "Social Media", "Storefront Marketing",
      "User Acquisition", "Visual Marketing"),
  },

  /* ---------------------------------------------------------- 23 */
  {
    id: "commercial", n: 23, name: "Comercial", nameEn: "Commercial", family: "business",
    desc: "O lado comercial e de receita — vendas, desenvolvimento de negócios, parcerias, ecommerce, distribuição, merchandising, licenciamento e cadeia de suprimentos. Transforma o jogo e a marca em negócio sustentável.",
    areas: A("Account Management", "Advertising Ops", "Business Development",
      "Business Intelligence", "Communications", "Consumer Research", "Customer Support",
      "Distribution", "Ecommerce", "Manufacturing", "Market Research", "Media Buying",
      "Merchandising", "Monetization", "Packaging", "Partnerships", "Procurement",
      "Product Management", "Retail", "Sales", "Sponsorships", "Supply Chain", "Ticketing"),
  },
];
