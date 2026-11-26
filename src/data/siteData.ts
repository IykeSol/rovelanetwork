export interface ServiceCategory {
  id: string;
  index: string;
  slug: string;
  title: string;
  shortTitle: string;
  categoryGroup: 'Intelligence & Data' | 'Engineering & Infrastructure' | 'Strategy & Digital Growth';
  iconName:
    | 'Cpu'
    | 'BarChart3'
    | 'Blocks'
    | 'Code2'
    | 'ServerCog'
    | 'Megaphone'
    | 'Briefcase'
    | 'GraduationCap';
  tagline: string;
  description: string;
  capabilities: string[];
  applications: string[];
  valueDelivered: string;
  ctaLabel: string;
}

export interface ApproachStep {
  number: string;
  phase: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
  clientOutcome: string;
}

export interface IndustrySector {
  id: string;
  index: string;
  title: string;
  iconName:
    | 'Terminal'
    | 'Landmark'
    | 'Building2'
    | 'ShoppingBag'
    | 'BookOpenCheck'
    | 'Sparkles';
  summary: string;
  opportunityFocus: string;
  relevantCapabilities: string[];
  useCases: string[];
}

export const BRAND_PILLARS = [
  {
    syllable: 'RO',
    title: 'Relationships',
    subtitle: 'Partnership & Collective Trust',
    description:
      'People, partnership, and disciplined collaboration form the foundation of everything we build. Every enduring business opportunity begins with a trusted professional relationship.'
  },
  {
    syllable: 'VE',
    title: 'Value',
    subtitle: 'Excellence & Shared Prosperity',
    description:
      'Like the four-point brass-gold diamond at the centre of our symbol, true value is discovered and engineered through connection, delivering measurable commercial and operational clarity.'
  },
  {
    syllable: 'LA',
    title: 'Leadership & Advancement',
    subtitle: 'An Upward Flow of Growth',
    description:
      'Our symbol sweeps upward toward a summit. We combine forward-looking technological leadership, strategic initiative, and continuous advancement to help organisations scale sustainably.'
  }
] as const;

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'ai-automation',
    index: '01',
    slug: 'ai-automation',
    title: 'Artificial Intelligence and Automation',
    shortTitle: 'AI & Automation',
    categoryGroup: 'Intelligence & Data',
    iconName: 'Cpu',
    tagline: 'Intelligent workflow orchestration and applied AI systems built for operational precision.',
    description:
      'ROVELA designs and integrates practical artificial intelligence and process automation solutions that reduce operational friction, accelerate complex workflows, and elevate institutional decision-making.',
    capabilities: [
      'Applied Generative AI & Large Language Model (LLM) integration',
      'Intelligent business process & document workflow automation',
      'Custom AI assistants, knowledge retrieval (RAG) & domain copilots',
      'Automated quality assurance, classification & triage pipelines'
    ],
    applications: [
      'Automating multi-step operations, client onboarding, and back-office reconciliation',
      'Deploying secure internal knowledge search across institutional repositories',
      'Augmenting customer support and advisory workflows with context-aware assistants'
    ],
    valueDelivered:
      'Eliminates repetitive manual bottlenecks, lowers operational overhead, and enables specialist teams to focus on high-judgment strategic initiatives.',
    ctaLabel: 'Explore AI & Automation'
  },
  {
    id: 'data-analytics-bi',
    index: '02',
    slug: 'data-analytics-bi',
    title: 'Data Analytics and Business Intelligence',
    shortTitle: 'Data Analytics & BI',
    categoryGroup: 'Intelligence & Data',
    iconName: 'BarChart3',
    tagline: 'Transforming fragmented organizational data into verifiable strategic clarity.',
    description:
      'We architect clean data pipelines, analytical models, and executive business intelligence systems that turn raw operational metrics into actionable foresight.',
    capabilities: [
      'Executive BI dashboards & real-time KPI reporting architectures',
      'Data engineering, ETL/ELT pipeline design & data warehouse structuring',
      'Predictive analytics, forecasting models & trend diagnostics',
      'Data governance, quality auditing & instrumentation strategy'
    ],
    applications: [
      'Unifying commercial, financial, and operational metrics into a single source of truth',
      'Identifying revenue leakage, customer retention drivers, and margin expansion opportunities',
      'Equipping leadership teams with automated board-level and operational reporting'
    ],
    valueDelivered:
      'Replaces guesswork with evidence-backed clarity, enabling faster and more confident capital and operational allocation.',
    ctaLabel: 'Discuss Data & BI Solutions'
  },
  {
    id: 'web3-blockchain',
    index: '03',
    slug: 'web3-blockchain',
    title: 'Web3, Blockchain and Decentralized Technologies',
    shortTitle: 'Web3 & Blockchain',
    categoryGroup: 'Engineering & Infrastructure',
    iconName: 'Blocks',
    tagline: 'Verifiable digital ecosystems, smart contract architecture, and decentralized innovation.',
    description:
      'ROVELA provides technical architecture, smart contract engineering, and strategic advisory for organizations exploring decentralized infrastructure, tokenized workflows, and Web3 protocols.',
    capabilities: [
      'Smart contract architecture, development & security-first review',
      'Decentralized application (dApp) frontends & wallet integration',
      'Tokenomics analysis, digital asset utility design & protocol research',
      'On-chain data indexing, analytics & verifiable credential systems'
    ],
    applications: [
      'Building transparent settlement, provenance, or verifiable registry mechanisms',
      'Designing intuitive Web3 interfaces that bridge traditional users to on-chain protocols',
      'Evaluating blockchain feasibility and architecture for emerging digital ventures'
    ],
    valueDelivered:
      'Delivers cryptographic transparency, programmable trust, and standards-compliant architecture in decentralized environments.',
    ctaLabel: 'Consult on Web3 Architecture'
  },
  {
    id: 'software-web-development',
    index: '04',
    slug: 'software-web-development',
    title: 'Software and Web Development',
    shortTitle: 'Software & Web Engineering',
    categoryGroup: 'Engineering & Infrastructure',
    iconName: 'Code2',
    tagline: 'Bespoke web applications, digital platforms, and resilient software engineering.',
    description:
      'We engineer high-performance web applications, corporate digital platforms, and custom software products tailored to demanding business requirements and international UX standards.',
    capabilities: [
      'Full-stack web application development & modular frontend architecture',
      'Premium corporate websites, client portals & digital product interfaces',
      'API design, third-party platform integrations & microservices orchestration',
      'Performance optimization, accessibility (WCAG) & technical SEO engineering'
    ],
    applications: [
      'Launching flagship corporate digital experiences that command market credibility',
      'Developing custom SaaS products, partner portals, and internal operational tools',
      'Modernizing legacy web interfaces into fast, responsive, maintainable platforms'
    ],
    valueDelivered:
      'Creates durable, high-converting digital assets engineered for speed, security, maintainability, and long-term scalability.',
    ctaLabel: 'Start a Software Project'
  },
  {
    id: 'it-services-technical-solutions',
    index: '05',
    slug: 'it-services-technical-solutions',
    title: 'IT Services and Technical Solutions',
    shortTitle: 'IT & Technical Solutions',
    categoryGroup: 'Engineering & Infrastructure',
    iconName: 'ServerCog',
    tagline: 'Dependable technical infrastructure, cloud readiness, and systems integration.',
    description:
      'ROVELA supports organizations with structured IT advisory, systems integration, cloud environment configuration, and operational reliability improvements.',
    capabilities: [
      'Cloud architecture planning, deployment & DevOps pipeline setup',
      'Enterprise software evaluation, procurement advisory & system integration',
      'Technical infrastructure diagnostics, security hygiene & performance audits',
      'Business continuity planning & collaborative workspace tooling setup'
    ],
    applications: [
      'Streamlining fragmented SaaS toolstacks into cohesive, secure operational environments',
      'Establishing reliable deployment workflows and infrastructure monitoring',
      'Advising growing organizations on scalable, cost-effective technical foundations'
    ],
    valueDelivered:
      'Strengthens operational resilience, reduces technical debt, and ensures technology investments align with organizational scale.',
    ctaLabel: 'Explore IT & Technical Advisory'
  },
  {
    id: 'digital-marketing-social-media',
    index: '06',
    slug: 'digital-marketing-social-media',
    title: 'Digital Marketing and Social Media Management',
    shortTitle: 'Digital Growth & Brand Presence',
    categoryGroup: 'Strategy & Digital Growth',
    iconName: 'Megaphone',
    tagline: 'Strategic brand positioning, authority building, and data-informed audience engagement.',
    description:
      'We help ambitious brands articulate their value proposition, build authoritative digital presence, and execute measurable growth campaigns across search, content, and social channels.',
    capabilities: [
      'Digital brand positioning, content strategy & executive thought leadership',
      'Strategic social media management & multi-channel campaign execution',
      'Search engine optimization (SEO), conversion rate optimization & analytics',
      'Performance campaign tracking, audience segmentation & growth experimentation'
    ],
    applications: [
      'Establishing a coherent, high-trust digital voice across corporate channels',
      'Driving qualified inbound pipeline through technical SEO and authoritative content',
      'Executing targeted product, service, or market-entry communications'
    ],
    valueDelivered:
      'Amplifies market visibility, builds enduring brand equity, and connects business capabilities with qualified commercial demand.',
    ctaLabel: 'Elevate Your Digital Presence'
  },
  {
    id: 'business-development-consulting',
    index: '07',
    slug: 'business-development-consulting',
    title: 'Business Development and Consulting',
    shortTitle: 'Business Strategy & Consulting',
    categoryGroup: 'Strategy & Digital Growth',
    iconName: 'Briefcase',
    tagline: 'Commercial strategy, opportunity structuring, and partnership-driven growth.',
    description:
      'Rooted in our philosophy that strong relationships create opportunities, ROVELA advises organizations on market expansion, digital transformation roadmaps, and strategic partnership structuring.',
    capabilities: [
      'Digital transformation roadmapping & commercial feasibility assessments',
      'Go-to-market strategy, value proposition refinement & monetization design',
      'Strategic partnership identification, ecosystem mapping & alliance structuring',
      'Operational process redesign & performance benchmarking'
    ],
    applications: [
      'Structuring new commercial initiatives, service lines, or technology-enabled ventures',
      'Aligning technical investments with clear revenue and efficiency milestones',
      'Bridging technical execution teams and executive commercial objectives'
    ],
    valueDelivered:
      'Unlocks new avenues for sustainable revenue, sharpens competitive positioning, and turns strategic intent into disciplined execution.',
    ctaLabel: 'Engage Strategic Consulting'
  },
  {
    id: 'technology-training-digital-solutions',
    index: '08',
    slug: 'technology-training-digital-solutions',
    title: 'Technology Training and Digital Solutions',
    shortTitle: 'Technology Training & Enablement',
    categoryGroup: 'Strategy & Digital Growth',
    iconName: 'GraduationCap',
    tagline: 'Equipping teams and professionals with applied capabilities for the modern digital economy.',
    description:
      'Technology delivers its highest return when people understand how to wield it effectively. ROVELA designs structured capability-building programs and digital enablement initiatives for teams and organizations.',
    capabilities: [
      'Corporate AI literacy, prompt engineering & workflow automation workshops',
      'Data literacy, business intelligence & analytical decision-making training',
      'Modern software engineering, Web3 fundamentals & digital tooling bootcamps',
      'Custom digital adoption playbooks, documentation & internal enablement systems'
    ],
    applications: [
      'Upskilling internal teams to adopt new AI, data, and software systems confidently',
      'Delivering practical, project-based technology workshops for institutions and enterprises',
      'Building sustainable internal digital competence that outlasts external engagements'
    ],
    valueDelivered:
      'Accelerates organizational adoption of modern technology, closes critical capability gaps, and multiplies team productivity.',
    ctaLabel: 'Inquire About Training Programs'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    phase: 'Discover',
    subtitle: 'Understand the client’s needs and objectives',
    description:
      'Every engagement begins with disciplined listening and diagnostic clarity. We examine your business context, operational constraints, stakeholder goals, and existing technical landscape before prescribing any solution.',
    keyActivities: [
      'Stakeholder alignment & objective definition',
      'Current-state technical & operational audit',
      'Problem framing, risk identification & success metrics'
    ],
    clientOutcome: 'A clear, documented shared understanding of the core challenge and measurable target outcomes.'
  },
  {
    number: '02',
    phase: 'Strategise',
    subtitle: 'Identify opportunities and develop a practical approach',
    description:
      'We translate findings into an actionable architectural and commercial roadmap, prioritizing high-leverage opportunities, selecting appropriate technologies, and defining realistic milestones.',
    keyActivities: [
      'Solution architecture & technology stack selection',
      'Commercial & operational feasibility mapping',
      'Phased delivery roadmap with clear governance checkpoints'
    ],
    clientOutcome: 'A structured execution blueprint designed to maximize return on effort and minimize delivery risk.'
  },
  {
    number: '03',
    phase: 'Collaborate',
    subtitle: 'Bring relevant expertise together',
    description:
      'ROVELA mobilizes multidisciplinary capability, aligning software engineers, data specialists, strategists, and domain experts directly with your internal stakeholders in a transparent working rhythm.',
    keyActivities: [
      'Cross-functional capability alignment',
      'Transparent communication cadences & shared workspaces',
      'Co-design with client domain owners and decision-makers'
    ],
    clientOutcome: 'Collective intelligence applied seamlessly to your initiative without bureaucratic friction.'
  },
  {
    number: '04',
    phase: 'Execute',
    subtitle: 'Develop and deliver appropriate solutions',
    description:
      'We build, integrate, test, and deploy with engineering rigor. Whether delivering custom software, analytical systems, or strategic initiatives, we maintain strict standards for quality, security, and usability.',
    keyActivities: [
      'Iterative engineering, design & implementation sprints',
      'Rigorous quality assurance, accessibility & performance verification',
      'Structured deployment, documentation & stakeholder handover'
    ],
    clientOutcome: 'Production-ready solutions delivered cleanly, reliably, and aligned with the agreed specification.'
  },
  {
    number: '05',
    phase: 'Evolve',
    subtitle: 'Evaluate results and identify opportunities for improvement',
    description:
      'Value creation is continuous. Following delivery, we evaluate real-world performance against baseline objectives, refine systems, transfer knowledge, and identify the next horizon of growth.',
    keyActivities: [
      'Post-implementation impact assessment & KPI tracking',
      'Team enablement, training & operational refinement',
      'Continuous optimization & strategic roadmap evolution'
    ],
    clientOutcome: 'Compounding long-term value and an adaptable foundation prepared for future advancement.'
  }
];

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: 'technology-software',
    index: '01',
    title: 'Technology and Software',
    iconName: 'Terminal',
    summary:
      'Supporting software ventures, digital platforms, and technology-driven businesses with product engineering, AI integration, and scalable architecture.',
    opportunityFocus:
      'Accelerating product velocity, modernizing web architectures, embedding intelligent automation, and strengthening technical market positioning.',
    relevantCapabilities: [
      'Software & Web Development',
      'Artificial Intelligence & Automation',
      'IT Services & Technical Solutions',
      'Digital Marketing & Brand Positioning'
    ],
    useCases: [
      'Engineering responsive web platforms, SaaS dashboards, and developer-facing portals',
      'Embedding LLM-powered workflows and intelligent automation into core product experiences',
      'Articulating complex technical value propositions for enterprise and developer audiences'
    ]
  },
  {
    id: 'financial-services-fintech',
    index: '02',
    title: 'Financial Services and Fintech',
    iconName: 'Landmark',
    summary:
      'Enabling modern financial platforms, analytical operations, and emerging fintech initiatives with high-trust interfaces, data intelligence, and verifiable architectures.',
    opportunityFocus:
      'Enhancing analytical visibility, streamlining operational workflows, designing high-trust digital client interfaces, and exploring programmable Web3 infrastructure.',
    relevantCapabilities: [
      'Data Analytics & Business Intelligence',
      'Software & Web Development',
      'Web3, Blockchain & Decentralized Technologies',
      'Artificial Intelligence & Automation'
    ],
    useCases: [
      'Architecting executive financial dashboards, risk analytics, and automated reporting pipelines',
      'Designing institutional-grade digital interfaces with strict accessibility and security standards',
      'Assessing and engineering smart contract or digital asset infrastructure where appropriate'
    ]
  },
  {
    id: 'business-professional-services',
    index: '03',
    title: 'Business and Professional Services',
    iconName: 'Building2',
    summary:
      'Helping advisory firms, corporate enterprises, and service organizations digitize workflows, harness institutional knowledge, and elevate their market authority.',
    opportunityFocus:
      'Eliminating administrative friction through automation, establishing authoritative corporate web presence, and unlocking insights from internal data.',
    relevantCapabilities: [
      'Business Development & Consulting',
      'Artificial Intelligence & Automation',
      'Software & Web Development',
      'Digital Marketing & Social Media Management'
    ],
    useCases: [
      'Deploying AI-assisted knowledge retrieval and automated document intake workflows',
      'Building flagship corporate websites that project institutional credibility and clarity',
      'Structuring client acquisition funnels, CRM integrations, and executive thought leadership'
    ]
  },
  {
    id: 'digital-commerce',
    index: '04',
    title: 'Digital Commerce',
    iconName: 'ShoppingBag',
    summary:
      'Empowering modern commerce operators and digital marketplaces to optimize customer journeys, leverage demand analytics, and automate fulfillment operations.',
    opportunityFocus:
      'Improving conversion performance, unifying inventory and customer analytics, and automating post-purchase and operational workflows.',
    relevantCapabilities: [
      'Software & Web Development',
      'Data Analytics & Business Intelligence',
      'Digital Marketing & Social Media Management',
      'Artificial Intelligence & Automation'
    ],
    useCases: [
      'Engineering fast, mobile-first commerce experiences and custom catalog integrations',
      'Building cohort retention, unit-economics, and demand-forecasting BI dashboards',
      'Integrating automated customer communication and multi-channel growth campaigns'
    ]
  },
  {
    id: 'education-digital-skills',
    index: '05',
    title: 'Education and Digital Skills',
    iconName: 'BookOpenCheck',
    summary:
      'Supporting educational bodies, training academies, and corporate learning teams with modern digital platforms and applied technology curricula.',
    opportunityFocus:
      'Bridging the gap between theoretical knowledge and applied industry capability across AI, data analytics, software engineering, and digital productivity.',
    relevantCapabilities: [
      'Technology Training & Digital Solutions',
      'Software & Web Development',
      'Artificial Intelligence & Automation',
      'Data Analytics & Business Intelligence'
    ],
    useCases: [
      'Designing and delivering practical workshops on applied AI, data analytics, and modern web engineering',
      'Developing custom learning portals, cohort management systems, and interactive digital resources',
      'Advising organizations on structured digital literacy and workforce capability roadmaps'
    ]
  },
  {
    id: 'emerging-technologies',
    index: '06',
    title: 'Emerging Technologies',
    iconName: 'Sparkles',
    summary:
      'Partnering with forward-looking initiatives operating at the intersection of decentralized systems, autonomous software agents, and next-generation digital infrastructure.',
    opportunityFocus:
      'Translating frontier technological potential into coherent product architectures, credible brand narratives, and viable commercial strategies.',
    relevantCapabilities: [
      'Web3, Blockchain & Decentralized Technologies',
      'Artificial Intelligence & Automation',
      'Business Development & Consulting',
      'Software & Web Development'
    ],
    useCases: [
      'Prototyping and engineering decentralized applications (dApps) and AI-native web products',
      'Conducting technical and commercial feasibility modeling for novel protocol or platform concepts',
      'Crafting clear, trustworthy brand identities and digital experiences for complex technical innovations'
    ]
  }
];

export const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'rovelanetwork',
    url: 'https://www.linkedin.com/company/rovelanetwork/',
    ariaLabel: 'Follow ROVELA on LinkedIn'
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    handle: '@RovelaNetwork',
    url: 'https://x.com/RovelaNetwork',
    ariaLabel: 'Follow ROVELA on X'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@rovelanetwork_1',
    url: 'https://www.instagram.com/rovelanetwork_1?dmpr=MWptOG5kaHN3c3pybw==&utm_source=ig_contact_invite',
    ariaLabel: 'Follow ROVELA on Instagram'
  }
] as const;

export const WHY_ROVELA_PILLARS = [
  {
    index: '01',
    title: 'Multidisciplinary Collective Intelligence',
    description:
      'Complex challenges rarely sit inside a single silo. ROVELA connects software engineering, data intelligence, emerging technology, and commercial strategy into one cohesive perspective.'
  },
  {
    index: '02',
    title: 'Practical, Value-First Engineering',
    description:
      'We do not pursue technology for novelty. Every architecture, automation workflow, or strategic recommendation is evaluated by the tangible clarity, efficiency, and value it creates.'
  },
  {
    index: '03',
    title: 'Relationship-Driven Accountability',
    description:
      'Our name stands for Relationships Evolving into Lasting Value. We operate with transparent communication, intellectual honesty, and long-term commitment to our partners’ progress.'
  },
  {
    index: '04',
    title: 'International Standards of Execution',
    description:
      'From typographic precision and accessible interfaces to clean code and structured strategy, our work is built to compete confidently in global markets.'
  }
] as const;
