import {
  ServiceItem,
  ProcessStep,
  WhyMePoint,
  Project,
  Testimonial,
} from '../types';

export const HERO_DATA = {
  yearsExperience: '10+',
  headlineLead: 'ABDUL KHADAR SHAIK',
  headlineMain: 'I turn complex product ideas into clear, intuitive, and high-impact digital experiences.',
  subheadline:
    'With 10 years of experience across product design, UX/UI, web, branding, and motion, I’ve worked with high-growth startups, enterprise teams, and Fortune-level clients to design and shape digital products and experiences at scale.',
  stats: [
    { value: '10+ Yrs', label: 'Design Experience' },
    { value: '35+', label: 'Projects Completed' },
    { value: '$80M+', label: 'Client Capital & Growth' },
    { value: '99%', label: 'On-Time Execution' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'product-design',
    title: 'Product Design',
    badge: 'Product • SaaS • Web • Mobile • Enterprise',
    tagline: 'End-to-End Product Architecture & Scalable Systems',
    description:
      'Designing digital products from early concepts to scalable interfaces. I work across product thinking, UX, UI, design systems, and interaction to create experiences that are clear, useful, and built to scale.',
    icon: 'Layout',
    deliverables: [
      'SaaS & Web App Architecture',
      'Design System Creation & Tokenization',
      'Interactive Figma Prototypes',
      'Developer Handoff & Specs',
    ],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX',
    badge: 'Research • UX • Interaction • UI',
    tagline: 'Wireframes, User Research & Interactive Flow Architecture',
    description:
      'Turning complex workflows into simple, intuitive user experiences. From user flows and wireframes to prototypes and polished interfaces, I focus on making products easier to understand and use.',
    icon: 'Figma',
    deliverables: [
      'User Journey & Task Flows',
      'Low to High-Fidelity Wireframes',
      'Usability Audits & Heuristic Evaluation',
      'Micro-Interactions & Transitions',
    ],
  },
  {
    id: 'branding',
    title: 'Branding',
    badge: 'Identity • Visual Systems • Guidelines',
    tagline: 'Distinct Visual Identity Systems That Command Authority',
    description:
      'Creating identities that give businesses a clear and consistent visual presence. From logos and typography to color systems and brand guidelines, I build visual foundations that can grow with the business.',
    icon: 'Sparkles',
    deliverables: [
      'Logo Marks & Logotype Systems',
      'Typography & Color Palette Guidelines',
      'Brand Asset Kits & Iconography',
      'Comprehensive Brand Style Guides',
    ],
  },
  {
    id: 'visual-graphic-design',
    title: 'Visual & Graphic Design',
    badge: 'Campaigns • Presentations • Marketing • Motion',
    tagline: 'Investor Pitch Decks, Marketing Assets & Digital Collateral',
    description:
      'Designing the visual assets businesses need to communicate, launch, and grow — from pitch decks and campaigns to marketing graphics, digital assets, and motion.',
    icon: 'Palette',
    deliverables: [
      'Investor & Sales Pitch Decks',
      'High-Conversion Marketing Graphics',
      'Product Launch Visual Assets',
      'UI Motion & Lottie Animations',
    ],
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Define',
    summary:
      "Understanding the business, users, goals, constraints, and the problem we're solving before jumping into design.",
    outputArtifact: 'Discovery & Scope Alignment',
    keyActivities: [
      'Stakeholder & User Research',
      'Competitor Benchmarking',
      'Requirement Scoping & KPIs',
    ],
  },
  {
    number: '02',
    title: 'Explore & Structure',
    summary:
      'Turning insights into ideas, user flows, wireframes, concepts, and a clear direction for the experience or visual system.',
    outputArtifact: 'Wireframes & Flow Architecture',
    keyActivities: [
      'Information Architecture Mapping',
      'Low-Fidelity Wireframing',
      'Exploratory Visual Direction',
    ],
  },
  {
    number: '03',
    title: 'Design & Refine',
    summary:
      'Bringing the chosen direction to life through thoughtful UI, visual systems, interaction, branding, and detailed design execution.',
    outputArtifact: 'High-Fidelity UI & Systems',
    keyActivities: [
      'Pixel-Perfect High-Fidelity UI',
      'Design System & Component Library',
      'Micro-Interactions & Prototyping',
    ],
  },
  {
    number: '04',
    title: 'Prototype & Deliver',
    summary:
      'Testing and refining the final work, preparing prototypes and production-ready assets, and handing everything over clearly for launch.',
    outputArtifact: 'Production Handoff & Assets',
    keyActivities: [
      'Interactive Clickable Prototypes',
      'Organized Developer Documentation',
      'Post-Launch QA Support',
    ],
  },
];

export const WHY_ME_DATA: WhyMePoint[] = [
  {
    title: '10+ Years of Experience',
    subtitle: 'Built through real-world design challenges',
    description:
      'A decade of hands-on experience designing digital products, interfaces, brands, and visual experiences for startups, growing businesses, and enterprise teams.',
    impactMetric: '01',
    icon: 'Award',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop',
    tags: ['Battle-Tested', 'Scale-Ready', 'Enterprise & Startups'],
  },
  {
    title: 'Senior-Level Thinking',
    subtitle: 'Experience beyond the pixels',
    description:
      "I don't just make screens look good. I help make sense of complex problems, challenge assumptions, structure experiences, and turn ideas into clear design directions.",
    impactMetric: '02',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    tags: ['Strategic UX', 'Product Architecture', 'Problem Solving'],
  },
  {
    title: 'Multidisciplinary by Nature',
    subtitle: 'Product + UX/UI + Brand + Visual + Motion',
    description:
      'One designer who can move between product thinking, interface design, branding, visual communication, and motion — keeping the experience cohesive from product to brand.',
    impactMetric: '03',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    tags: ['Cross-Discipline', 'Holistic Brand', 'Design & Motion'],
  },
  {
    title: 'Direct & Flexible',
    subtitle: 'Senior expertise without the agency overhead',
    description:
      'You work directly with me — fewer layers, faster communication, and the flexibility to bring in senior design expertise when you need it, without committing to a full-time hire.',
    impactMetric: '04',
    icon: 'Target',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    tags: ['Zero Agency Fluff', 'Rapid Turnaround', 'Direct Access'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexus-saas-platform',
    title: 'Nexus - Enterprise AI Analytics Suite',
    subtitle: 'End-to-end product design & UI/UX architecture for a Series B SaaS platform.',
    category: 'Product Design',
    tags: ['Product Design', 'UI/UX Architecture', 'Design System', 'SaaS'],
    year: '2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    client: 'Nexus Cloud Tech',
    clientType: 'Startup',
    metrics: [
      { label: 'Conversion Uplift', value: '+44%' },
      { label: 'User Retention', value: '+62%' },
      { label: 'Series B Funding', value: '$24M Raised' },
    ],
    problem:
      'Nexus suffered from a multi-tenant analytics dashboard that confused enterprise buyers, resulting in a high drop-off rate during trial onboarding.',
    research:
      'Conducted 18 stakeholder interviews and user session recordings to isolate friction points, discovering key navigation bottlenecks in dashboard views.',
    solution:
      'Redesigned the entire product ecosystem from scratch. Introduced a modular token design system, intuitive data widgets, and streamlined onboarding flows.',
    impact:
      'Reduced trial onboarding drop-off by 62%, helped secure $24M in Series B capital, and cut developer UI build times significantly.',
    outcome:
      'Successfully adopted across 140+ enterprise accounts within 60 days of launch.',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'kroma-fintech-mobile',
    title: 'Kroma - Next-Gen Banking Mobile App',
    subtitle: 'UI/UX design & interactive mobile prototype for medium-scale financial brand.',
    category: 'UI/UX Designing',
    tags: ['UI/UX Designing', 'Mobile App', 'Fintech', 'Micro-Interactions'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    client: 'Kroma Financial Ltd',
    clientType: 'Medium-Scale Industry',
    metrics: [
      { label: 'Active Monthly Users', value: '380K+' },
      { label: 'App Store Rating', value: '4.9 / 5' },
      { label: 'Transfer Speed', value: '3x Faster' },
    ],
    problem:
      'Legacy mobile banking app was slow, stressful, and filled with multi-step transfer forms that caused high customer support ticket volume.',
    research:
      'Mapped customer journeys across age demographics, finding that quick transfers and clear spending visualizers were top priorities.',
    solution:
      'Crafted a vibrant, tactile mobile interface with drag-to-transfer gestures, real-time spending insights, and instant micro-feedback animations.',
    impact:
      'Lowered support ticket volume by 55% and grew active monthly users from 40,000 to 380,000 in 8 months.',
    outcome:
      'Voted Top 3 Regional Banking Mobile App on iOS & Android.',
    galleryImages: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'solaris-brand-identity',
    title: 'Solaris Energy - Brand & Visual Identity',
    subtitle: 'Complete brand identity, logo mark & positioning for clean energy industrial leader.',
    category: 'Branding',
    tags: ['Branding', 'Visual Identity', 'Brand System', 'Industrial'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    client: 'Solaris Green Energy',
    clientType: 'Medium-Scale Industry',
    metrics: [
      { label: 'Brand Valuation', value: '+85%' },
      { label: 'B2B Leads Growth', value: '+3.2x' },
      { label: 'Contract Deal Value', value: '$120M' },
    ],
    problem:
      'Solaris needed to rebrand from a regional installer to a modern clean energy industrial partner across international markets.',
    research:
      'Analyzed B2B industrial competitor landscapes to position Solaris with bold architectural minimalism and clean typography.',
    solution:
      'Engineered a modern geometric logo symbol, high-contrast brand color tokens, typography rules, and digital brand collateral.',
    impact:
      'Elevated brand perception, resulting in a 3.2x surge in high-value B2B commercial inquiries.',
    outcome:
      'Helped close a $120M industrial partnership deal and won 3 national visual design awards.',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'vortex-marketing-deck',
    title: 'Vortex Capital - Investor Pitch & Graphic Collateral',
    subtitle: 'High-impact investor pitch deck & digital graphic marketing collateral.',
    category: 'Graphic Design',
    tags: ['Graphic Design', 'Pitch Deck', 'Marketing Assets', 'Print & Digital'],
    year: '2026',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    client: 'Vortex Ventures',
    clientType: 'Startup',
    metrics: [
      { label: 'Capital Raised', value: '$18.5M' },
      { label: 'Pitch Conversion', value: '82%' },
      { label: 'Turnaround Time', value: '5 Days' },
    ],
    problem:
      'Vortex was pitching top-tier institutional investors but lacked clear, visually compelling presentation decks and financial infographics.',
    research:
      'Distilled complex financial models and market statistics into clear, high-contrast visual slide layouts.',
    solution:
      'Designed a 24-slide custom investor pitch deck, vector diagrams, financial callouts, and digital brand collateral.',
    impact:
      'Achieved an 82% positive investor feedback conversion rate during pitch meetings.',
    outcome:
      'Vortex successfully closed their $18.5M funding round within 3 weeks of presentation.',
    galleryImages: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a3172720177?q=80&w=1200&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'lumina-healthcare-dashboard',
    title: 'Lumina - Telehealth & Clinical Portal',
    subtitle: 'Patient-first clinical dashboard and diagnostic scheduling experience.',
    category: 'Product Design',
    tags: ['Product Design', 'Healthcare', 'Design System', 'Telehealth'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    client: 'Lumina Health Tech',
    clientType: 'Enterprise',
    metrics: [
      { label: 'Patient Engagement', value: '+78%' },
      { label: 'Diagnostic Speed', value: '2.5x' },
      { label: 'HIPAA Certified', value: '100%' },
    ],
    problem:
      'Physicians and clinical coordinators experienced severe workflow fatigue caused by disjointed Electronic Health Record (EHR) screens and slow appointment scheduling.',
    research:
      'Shadowed 14 clinical practitioners and conducted patient usability sessions to streamline prescription routing and teleconsultation queuing.',
    solution:
      'Constructed an unified clinical command center with real-time patient vitals, smart prescription dispatch, and accessible patient portal flows.',
    impact:
      'Decreased doctor consultation documentation time by 38% and reduced patient no-show rates by 46%.',
    outcome:
      'Adopted by 8 regional hospital networks serving over 220,000 active patients.',
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'zenith-ecommerce-experience',
    title: 'Zenith - Luxury Lifestyle & Commerce',
    subtitle: 'High-conversion interactive e-commerce platform & 3D product showcase.',
    category: 'UI/UX Designing',
    tags: ['UI/UX Designing', 'E-Commerce', 'Interaction Design', 'Web App'],
    year: '2026',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    client: 'Zenith Living',
    clientType: 'Medium-Scale Industry',
    metrics: [
      { label: 'Checkout Conversion', value: '+52%' },
      { label: 'Avg Order Value', value: '+$84' },
      { label: 'Mobile Sales Share', value: '71%' },
    ],
    problem:
      'A luxury home architecture and design brand had high desktop traffic but suffered from poor mobile checkout conversion and slow product page load times.',
    research:
      'A/B tested mobile navigation drawers, interactive 3D material selectors, and frictionless one-tap payment checkout funnels.',
    solution:
      'Designed a minimal, editorial-grade shopping experience with smooth motion transitions, interactive swatch previews, and accelerated Apple Pay checkout.',
    impact:
      'Boosted overall cart conversion by 52% and increased average order value by $84.',
    outcome:
      'Featured in Awwwards Site of the Day and drove $14M in direct-to-consumer sales in Q1.',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    ],
    featured: true,
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'Abdul turned our ideas into a sharp, clean brand and high-converting product. Fast, easy, and right on point.',
    author: 'Ethan Moore',
    role: 'Co-Founder & CEO',
    company: 'NovaTech AI',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    metric: '+44%',
    metricLabel: 'Conversion Uplift',
    projectType: 'SaaS & Web Architecture',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    quote: 'Abdul operates like a design co-founder. His UI/UX architecture for our fintech mobile app helped us scale to 380,000 active users effortlessly.',
    author: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'FinScale & Kroma',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    metric: '380K+',
    metricLabel: 'Active Users',
    projectType: 'Mobile App & UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    quote: 'The level of craftsmanship Abdul brought to our brand identity and pitch deck directly contributed to closing our $18.5M venture round.',
    author: 'David Chen',
    role: 'Managing Partner',
    company: 'Vortex Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    metric: '$18.5M',
    metricLabel: 'Capital Closed',
    projectType: 'Brand & Pitch Collateral',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
  },
];
