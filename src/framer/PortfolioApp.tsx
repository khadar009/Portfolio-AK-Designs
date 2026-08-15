import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useInView, animate } from 'framer-motion';
import {
  Sun,
  Moon,
  ArrowUpRight,
  ArrowUp,
  Menu,
  X,
  Sparkles,
  Award,
  TrendingUp,
  Zap,
  Target,
  Send,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Layout,
  Palette,
  Briefcase,
  Mail,
  MapPin,
  Clock,
  FolderKanban,
  Building,
  Calendar,
  Layers,
  Compass,
  Cpu,
  Rocket,
  Quote,
  ShieldCheck
} from 'lucide-react';
interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const anim = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * value);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(anim);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(anim);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {hasAnimated ? count : 0}
      {suffix}
    </span>
  );
};

const FigmaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

/* ==========================================================================
   AUTHENTIC CLIENT LOGOS (SVGs)
   ========================================================================== */
const CLIENTS = [
  {
    id: 'google',
    name: 'Google',
    logoSvg: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
      </svg>
    ),
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logoSvg: (
      <div className="grid grid-cols-2 gap-0.5 w-4.5 h-4.5 shrink-0">
        <div className="bg-[#F25022] w-2 h-2" />
        <div className="bg-[#7FBA00] w-2 h-2" />
        <div className="bg-[#00A4EF] w-2 h-2" />
        <div className="bg-[#FFB900] w-2 h-2" />
      </div>
    ),
  },
  {
    id: 'accenture',
    name: 'accenture',
    logoSvg: (
      <svg className="w-5 h-5 text-orange-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 18l12-6L4 6v4l6 2-6 2v4z" />
      </svg>
    ),
  },
  {
    id: 'touchnote',
    name: 'TouchNote',
    logoSvg: (
      <svg className="w-5.5 h-5.5 text-orange-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 8l9 6 9-6" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'verizon',
    name: 'verizon',
    logoSvg: (
      <svg className="w-5.5 h-5.5 text-red-600 dark:text-red-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.8 4L10 20l-5.8-8.7 2.3-1.5 3.5 5.2L17.5 4h2.3z" />
      </svg>
    ),
  },
  {
    id: 'sr22',
    name: 'SR22 Insurance Now',
    logoSvg: (
      <svg className="w-5.5 h-5.5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'tigerbrokers',
    name: 'Tiger Brokers',
    logoSvg: (
      <svg className="w-5.5 h-5.5 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.5v-3.8l-3.2 2.2 1.2-4.5-3.3-2.8 4.4-.2L11 3.5l1.8 3.9 4.4.2-3.3 2.8 1.2 4.5-3.2-2.2v3.8z" />
      </svg>
    ),
  },
  {
    id: 'qentelli',
    name: 'Qentelli',
    logoSvg: (
      <svg className="w-5.5 h-5.5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="11" r="7" />
        <path d="M16 16l4.5 4.5" />
      </svg>
    ),
  },
];

/* ==========================================================================
   PORTFOLIO DATA
   ========================================================================== */
const HERO_DATA = {
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

const SERVICES_DATA = [
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

const PROCESS_DATA = [
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

const WHY_ME_DATA = [
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

const PROJECTS_DATA = [
  {
    id: 'nexus-saas-platform',
    title: 'Nexus - Enterprise AI Analytics Suite',
    subtitle: 'End-to-end product design & UI/UX architecture for a Series B SaaS platform.',
    category: 'Product Design',
    client: 'Nexus Cloud Tech',
    clientType: 'Startup',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tags: ['Product Design', 'UI/UX Architecture', 'Design System', 'SaaS'],
    metrics: [
      { label: 'Conversion Uplift', value: '+44%' },
      { label: 'User Retention', value: '+62%' },
      { label: 'Series B Funding', value: '$24M Raised' },
    ],
    problem: 'Nexus suffered from a multi-tenant analytics dashboard that confused enterprise buyers, resulting in a high drop-off rate during trial onboarding.',
    research: 'Conducted 18 stakeholder interviews and user session recordings to isolate friction points, discovering key navigation bottlenecks in dashboard views.',
    solution: 'Redesigned the entire product ecosystem from scratch. Introduced a modular token design system, intuitive data widgets, and streamlined onboarding flows.',
    impact: 'Reduced trial onboarding drop-off by 62%, helped secure $24M in Series B capital, and cut developer UI build times significantly.',
    outcome: 'Successfully adopted across 140+ enterprise accounts within 60 days of launch.',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'kroma-fintech-mobile',
    title: 'Kroma - Next-Gen Banking Mobile App',
    subtitle: 'UI/UX design & interactive mobile prototype for medium-scale financial brand.',
    category: 'UI/UX',
    client: 'Kroma Financial Ltd',
    clientType: 'Medium-Scale Industry',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    tags: ['UI/UX', 'Mobile App', 'Fintech', 'Micro-Interactions'],
    metrics: [
      { label: 'Active Monthly Users', value: '380K+' },
      { label: 'App Store Rating', value: '4.9 / 5' },
      { label: 'Transfer Speed', value: '3x Faster' },
    ],
    problem: 'Legacy mobile banking app was slow, stressful, and filled with multi-step transfer forms that caused high customer support ticket volume.',
    research: 'Mapped customer journeys across age demographics, finding that quick transfers and clear spending visualizers were top priorities.',
    solution: 'Crafted a vibrant, tactile mobile interface with drag-to-transfer gestures, real-time spending insights, and instant micro-feedback animations.',
    impact: 'Lowered support ticket volume by 55% and grew active monthly users from 40,000 to 380,000 in 8 months.',
    outcome: 'Voted Top 3 Regional Banking Mobile App on iOS & Android.',
    galleryImages: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'solaris-brand-identity',
    title: 'Solaris Energy - Brand & Visual Identity',
    subtitle: 'Complete brand identity, logo mark & positioning for clean energy industrial leader.',
    category: 'Branding',
    client: 'Solaris Green Energy',
    clientType: 'Medium-Scale Industry',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['Branding', 'Visual Identity', 'Brand System', 'Industrial'],
    metrics: [
      { label: 'Brand Valuation', value: '+85%' },
      { label: 'B2B Leads Growth', value: '+3.2x' },
      { label: 'Contract Deal Value', value: '$120M' },
    ],
    problem: 'Solaris needed to rebrand from a regional installer to a modern clean energy industrial partner across international markets.',
    research: 'Analyzed B2B industrial competitor landscapes to position Solaris with bold architectural minimalism and clean typography.',
    solution: 'Engineered a modern geometric logo symbol, high-contrast brand color tokens, typography rules, and digital brand collateral.',
    impact: 'Elevated brand perception, resulting in a 3.2x surge in high-value B2B commercial inquiries.',
    outcome: 'Helped close a $120M industrial partnership deal and won 3 national visual design awards.',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'vortex-marketing-deck',
    title: 'Vortex Capital - Investor Pitch & Graphic Collateral',
    subtitle: 'High-impact investor pitch deck & digital graphic marketing collateral.',
    category: 'Visual & Graphic Design',
    client: 'Vortex Ventures',
    clientType: 'Startup',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    tags: ['Graphic Design', 'Pitch Deck', 'Marketing Assets', 'Print & Digital'],
    metrics: [
      { label: 'Capital Raised', value: '$18.5M' },
      { label: 'Pitch Conversion', value: '82%' },
      { label: 'Turnaround Time', value: '5 Days' },
    ],
    problem: 'Vortex was pitching top-tier institutional investors but lacked clear, visually compelling presentation decks and financial infographics.',
    research: 'Distilled complex financial models and market statistics into clear, high-contrast visual slide layouts.',
    solution: 'Designed a 24-slide custom investor pitch deck, vector diagrams, financial callouts, and digital brand collateral.',
    impact: 'Achieved an 82% positive investor feedback conversion rate during pitch meetings.',
    outcome: 'Vortex successfully closed their $18.5M funding round within 3 weeks of presentation.',
    galleryImages: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a3172720177?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'lumina-healthcare-dashboard',
    title: 'Lumina - Telehealth & Clinical Portal',
    subtitle: 'Patient-first clinical dashboard and diagnostic scheduling experience.',
    category: 'Product Design',
    client: 'Lumina Health Tech',
    clientType: 'Enterprise',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Product Design', 'Healthcare', 'Design System', 'Telehealth'],
    metrics: [
      { label: 'Patient Engagement', value: '+78%' },
      { label: 'Diagnostic Speed', value: '2.5x' },
      { label: 'HIPAA Certified', value: '100%' },
    ],
    problem: 'Physicians and clinical coordinators experienced severe workflow fatigue caused by disjointed EHR screens and slow appointment scheduling.',
    research: 'Shadowed 14 clinical practitioners and conducted patient usability sessions to streamline prescription routing and teleconsultation queuing.',
    solution: 'Constructed an unified clinical command center with real-time patient vitals, smart prescription dispatch, and accessible patient portal flows.',
    impact: 'Decreased doctor consultation documentation time by 38% and reduced patient no-show rates by 46%.',
    outcome: 'Adopted by 8 regional hospital networks serving over 220,000 active patients.',
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'zenith-ecommerce-experience',
    title: 'Zenith - Luxury Lifestyle & Commerce',
    subtitle: 'High-conversion interactive e-commerce platform & 3D product showcase.',
    category: 'UI/UX',
    client: 'Zenith Living',
    clientType: 'Brand & Retail',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    tags: ['UI/UX', 'E-Commerce', 'Interaction Design', 'Web App'],
    metrics: [
      { label: 'Checkout Conversion', value: '+52%' },
      { label: 'Avg Order Value', value: '+$84' },
      { label: 'Mobile Sales Share', value: '71%' },
    ],
    problem: 'A luxury home architecture and design brand had high desktop traffic but suffered from poor mobile checkout conversion and slow product page load times.',
    research: 'A/B tested mobile navigation drawers, interactive 3D material selectors, and frictionless one-tap payment checkout funnels.',
    solution: 'Designed a minimal, editorial-grade shopping experience with smooth motion transitions, interactive swatch previews, and accelerated Apple Pay checkout.',
    impact: 'Boosted overall cart conversion by 52% and increased average order value by $84.',
    outcome: 'Featured in Awwwards Site of the Day and drove $14M in direct-to-consumer sales in Q1.',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    ],
  },
];

const TESTIMONIALS_DATA = [
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


/* ==========================================================================
   ANIMATED STAT NUMBER COMPONENT
   ========================================================================== */
const AnimatedStatNumber: React.FC<{ valueStr: string }> = ({ valueStr }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState('0');

  const match = valueStr.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const targetNum = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    if (!isInView || targetNum === 0) return;

    const controls = animate(0, targetNum, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        setDisplayValue(Math.floor(value).toString());
      },
    });

    return () => controls.stop();
  }, [isInView, targetNum]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-2xl sm:text-3xl text-orange-500 tracking-tight">
      {isInView ? `${prefix}${displayValue}${suffix}` : `${prefix}0${suffix}`}
    </span>
  );
};

/* ==========================================================================
   MAIN FRAMER PORTFOLIO COMPONENT
   ========================================================================== */
export default function FramerPortfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<string>('Product Design');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('product-design');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Tailwind CDN Injection for Framer Canvas compatibility
  useEffect(() => {
    const scriptId = 'framer-tailwind-cdn';
    const configureTailwind = () => {
      if ((window as any).tailwind) {
        (window as any).tailwind.config = {
          darkMode: 'class',
        };
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.tailwindcss.com';
      script.onload = configureTailwind;
      document.head.appendChild(script);
    } else {
      configureTailwind();
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$500 - $1,000',
    message: '',
  });

  // Process Scroll Tracking
  const howIWorkRef = useRef<HTMLDivElement>(null);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: howIWorkRef,
    offset: ['start start', 'end end'],
  });

  const progressLineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.28) setActiveProcessStep(0);
    else if (latest < 0.55) setActiveProcessStep(1);
    else if (latest < 0.8) setActiveProcessStep(2);
    else setActiveProcessStep(3);
  });

  // Why Me Carousel Scroll
  const whyMeScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);

  // Works Horizontal Carousel Scroll
  const worksScrollRef = useRef<HTMLDivElement>(null);
  const [canWorksScrollLeft, setCanWorksScrollLeft] = useState(false);
  const [canWorksScrollRight, setCanWorksScrollRight] = useState(true);
  const [worksScrollProgress, setWorksScrollProgress] = useState(0);

  const checkWorksScroll = () => {
    if (worksScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = worksScrollRef.current;
      setCanWorksScrollLeft(scrollLeft > 10);
      setCanWorksScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      const total = scrollWidth - clientWidth;
      setWorksScrollProgress(total > 0 ? (scrollLeft / total) * 100 : 0);
    }
  };

  useEffect(() => {
    const el = worksScrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkWorksScroll, { passive: true });
      checkWorksScroll();
      return () => el.removeEventListener('scroll', checkWorksScroll);
    }
  }, []);

  const scrollWorks = (direction: 'left' | 'right') => {
    if (worksScrollRef.current) {
      const scrollAmount = 440;
      worksScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const checkWhyScroll = () => {
    if (whyMeScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = whyMeScrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      const itemWidth = 360;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveWhyIndex(Math.min(Math.max(index, 0), WHY_ME_DATA.length - 1));
    }
  };

  useEffect(() => {
    const el = whyMeScrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkWhyScroll);
      checkWhyScroll();
      return () => el.removeEventListener('scroll', checkWhyScroll);
    }
  }, []);

  const scrollWhy = (direction: 'left' | 'right') => {
    if (whyMeScrollRef.current) {
      const { clientWidth } = whyMeScrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      whyMeScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollWhyToIndex = (idx: number) => {
    if (whyMeScrollRef.current) {
      const children = whyMeScrollRef.current.children;
      if (children[idx]) {
        (children[idx] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const marqueeClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Figma': return <FigmaIcon className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      default: return <Layout className="w-6 h-6" />;
    }
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  const getPhaseIcon = (number: string) => {
    switch (number) {
      case '01': return <Compass className="w-6 h-6" />;
      case '02': return <Layers className="w-6 h-6" />;
      case '03': return <Cpu className="w-6 h-6" />;
      case '04': return <Rocket className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <div className={`framer-root ${theme === 'dark' ? 'dark' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .framer-root {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          background-color: #f8fafc;
          color: #0f172a;
          min-height: 100vh;
          width: 100%;
        }
        .framer-root.dark {
          background-color: #07090e;
          color: #f1f5f9;
        }

        .font-heading {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="min-h-screen bg-slate-50 dark:bg-[#07090E] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500 text-white font-heading font-extrabold text-sm flex items-center justify-center">AK</div>
              <span className="font-heading font-extrabold text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                AK Designs <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
              {[
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Process', id: 'how-i-work' },
                { label: 'Why Partner', id: 'why-me' },
                { label: 'Works', id: 'works' },
                { label: 'Testimonials', id: 'testimonials' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3.5 py-1.5 text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 rounded-lg transition-all cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center gap-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
                <span className="hidden sm:inline">{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-xs lg:text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="lg:hidden mt-2 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col gap-1.5"
              >
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Process', id: 'how-i-work' },
                  { label: 'Why Partner', id: 'why-me' },
                  { label: 'Works', id: 'works' },
                  { label: 'Testimonials', id: 'testimonials' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-xl bg-orange-500 text-white font-heading font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* HERO */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl space-y-6">
              {/* Badges Stack */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold border border-orange-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{HERO_DATA.headlineLead}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for New Projects</span>
                </div>
              </div>

              {/* Main Display Headline */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                {HERO_DATA.headlineMain}
              </h1>

              {/* Refined Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
                {HERO_DATA.subheadline}
              </p>

              {/* Specialization Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {['Product Design', 'UI/UX', 'Web', 'Branding', 'Graphic Design', 'Motion'].map((badge) => (
                  <span key={badge} className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-200 dark:border-slate-800 shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Primary Actions & Social Proof */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button onClick={() => scrollToSection('contact')} className="px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button onClick={() => scrollToSection('works')} className="px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-heading font-extrabold text-sm border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                  <span>View Recent Work</span>
                </button>

                {/* Social Proof Stack */}
                <div className="flex items-center gap-3 sm:ml-4 pt-2 sm:pt-0">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop" alt="Client" />
                    <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop" alt="Client" />
                    <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&auto=format&fit=crop" alt="Client" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Trusted by 35+ Founders
                  </span>
                </div>
              </div>
            </div>

            {/* FULL-WIDTH STATS ROW (Fixed Framer inconsistency) */}
            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200/90 dark:border-slate-800 shadow-sm">
              {HERO_DATA.stats.map((stat, i) => (
                <div key={i} className={`space-y-1 ${i !== 0 ? 'lg:pl-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800' : ''}`}>
                  <AnimatedStatNumber valueStr={stat.value} />
                  <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 01 // ABOUT ME */}
        <section id="about" className="py-20 md:py-28 bg-white dark:bg-[#080A10] border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 dark:bg-orange-500/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* CONTENT COLUMN (Full width on mobile/tablet, Left 7 Cols on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7 flex flex-col justify-center order-1 w-full max-w-3xl lg:max-w-none mx-auto"
              >
                {/* Section Eyebrow + Mini Mobile Avatar */}
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400">
                      01 // ABOUT ME
                    </span>
                  </div>
                  
                  {/* Compact Mobile Designer Pill */}
                  <div className="lg:hidden flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-orange-500 ring-1 ring-orange-500/50">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                        alt="Abdul"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Abdul Kareem</span>
                  </div>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                  Award Winning <span className="text-orange-500 dark:text-orange-400">Designer</span>
                </h2>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    Hello! I’m <strong className="font-bold text-slate-900 dark:text-white">Abdul Kareem</strong>, a senior product designer with over a decade of experience crafting high-impact user experiences, intuitive digital ecosystems, and scalable design systems for startups and industry leaders worldwide.
                  </p>
                  <p>
                    My philosophy balances pixel-level precision with commercial clarity. By bridging the gap between business objectives, engineering constraints, and human behavior, I transform complex workflows into elegant, conversion-driven interfaces.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-8">
                  {[
                    { title: '10+ Years Industry Leadership', subtitle: 'Leading product initiatives from concept to IPO' },
                    { title: 'Data-Driven UX Methodologies', subtitle: 'Validating every interaction with analytics' },
                    { title: 'Enterprise-Grade Design Systems', subtitle: 'Consistent, reusable Figma component architecture' },
                    { title: 'Direct Founder & Team Synergy', subtitle: 'Zero agency fluff, transparent daily communication' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0E111A] border border-slate-200/80 dark:border-slate-800"
                    >
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-orange-500/25 transition-all cursor-pointer hover:scale-105"
                  >
                    <span>Let's Discuss Your Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Available for Select Q3/Q4 Projects</span>
                  </div>
                </div>
              </motion.div>

              {/* VISUAL COLUMN: ORANGE CIRCLE + PERSON CUTOUT (Desktop Only, hidden on Mobile/Tablet) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="hidden lg:flex lg:col-span-5 items-center justify-center order-2 group"
              >
                <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] flex items-end justify-center">
                  
                  {/* Vibrant Orange Backdrop Circle (edges peeking out around the figure) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[340px] h-[270px] sm:h-[340px] rounded-full bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 shadow-2xl shadow-orange-500/30 ring-8 ring-orange-500/20 group-hover:scale-105 group-hover:shadow-orange-500/50 transition-all duration-700" />

                  {/* Decorative Floating Badges */}
                  <div className="absolute top-6 -left-2 sm:-left-6 z-20 bg-white dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-extrabold text-orange-500 tracking-wider">Top Rated</div>
                      <div className="text-xs font-extrabold text-slate-900 dark:text-white">Senior Product Lead</div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 -right-2 sm:-right-6 z-20 bg-white dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 transition-transform duration-300 group-hover:translate-y-1">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-extrabold text-emerald-500 tracking-wider">Experience</div>
                      <div className="text-xs font-extrabold text-slate-900 dark:text-white">10+ Years Craft</div>
                    </div>
                  </div>

                  {/* Cutout PNG Image with Black & White (Grayscale) to Color on Hover */}
                  <div className="relative z-10 w-full h-[92%] flex items-end justify-center overflow-hidden pb-0">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop"
                      alt="Abdul Kareem - Award Winning Designer"
                      className="w-auto h-full max-h-[460px] object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-500 ease-out drop-shadow-2xl rounded-b-3xl pointer-events-auto"
                    />
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CLIENT LOGOS */}
        <section className="py-10 md:py-14 bg-transparent overflow-hidden relative border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6 text-center">
            <h2 className="font-heading font-extrabold text-xs sm:text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Companies and Clients where I worked on Full time and Consultant Basis
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-2">
              {marqueeClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex items-center gap-3 px-3.5 py-1.5 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all shrink-0 cursor-pointer text-slate-800 dark:text-slate-200"
                >
                  <div className="flex items-center justify-center">
                    {client.logoSvg}
                  </div>
                  <span className="font-heading font-extrabold text-[15px] sm:text-[17px] tracking-tight whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 // SERVICES (FOUR WAYS I CAN HELP - 4 CLEAN SIDE-BY-SIDE CARDS) */}
        <section id="services" className="py-16 md:py-24 bg-slate-100/70 dark:bg-[#0A0C12] border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400 block mb-2">
                  02 // CORE SPECIALIZATIONS
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
                  Four ways I can help
                </h2>
              </div>
              <p className="text-sm sm:text-base font-normal text-slate-600 dark:text-slate-400 max-w-md">
                10 years of multidisciplinary design experience focused on the work that drives user engagement and product growth.
              </p>
            </div>

            {/* 4 Simple Side-by-Side Cards / Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {[
                {
                  id: 'product-design',
                  title: 'Product Design',
                  shortLabel: 'SaaS & Web Apps',
                  icon: 'Layout',
                  accentBg: 'bg-orange-500/10 dark:bg-orange-500/15',
                  accentBorder: 'border-orange-500/20',
                  accentText: 'text-orange-500 dark:text-orange-400',
                  accentHoverBorder: 'hover:border-orange-500/60 dark:hover:border-orange-500/60',
                  badgeBg: 'bg-orange-500/10 text-orange-600 dark:text-orange-300',
                  badgeText: 'SaaS • Web • Mobile',
                },
                {
                  id: 'ui-ux',
                  title: 'UI/UX Design',
                  shortLabel: 'Wireframes & Flows',
                  icon: 'Figma',
                  accentBg: 'bg-indigo-500/10 dark:bg-indigo-500/15',
                  accentBorder: 'border-indigo-500/20',
                  accentText: 'text-indigo-500 dark:text-indigo-400',
                  accentHoverBorder: 'hover:border-indigo-500/60 dark:hover:border-indigo-500/60',
                  badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300',
                  badgeText: 'Figma • Prototypes',
                },
                {
                  id: 'branding',
                  title: 'Branding & Identity',
                  shortLabel: 'Logos & Guidelines',
                  icon: 'Sparkles',
                  accentBg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
                  accentBorder: 'border-emerald-500/20',
                  accentText: 'text-emerald-500 dark:text-emerald-400',
                  accentHoverBorder: 'hover:border-emerald-500/60 dark:hover:border-emerald-500/60',
                  badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
                  badgeText: 'Logos • Visual Systems',
                },
                {
                  id: 'visual-graphic-design',
                  title: 'Visual & Graphic',
                  shortLabel: 'Pitch Decks & Motion',
                  icon: 'Palette',
                  accentBg: 'bg-rose-500/10 dark:bg-rose-500/15',
                  accentBorder: 'border-rose-500/20',
                  accentText: 'text-rose-500 dark:text-rose-400',
                  accentHoverBorder: 'hover:border-rose-500/60 dark:hover:border-rose-500/60',
                  badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-300',
                  badgeText: 'Decks • Marketing • Motion',
                },
              ].map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => {
                    setActiveService(service.title);
                    scrollToSection('contact');
                  }}
                  className={`group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0E111A] border border-slate-200/90 dark:border-slate-800/90 ${service.accentHoverBorder} shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.accentBg} ${service.accentBorder} border transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                        {getServiceIcon(service.icon)}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
                      {service.shortLabel}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold ${service.badgeBg}`}>
                      {service.badgeText}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* INTERSECTING RIBBON TAPE BANNER (CLEAR DIVISION) */}
        <div className="relative py-12 md:py-16 overflow-hidden select-none pointer-events-none">
          {/* Black Ribbon */}
          <div className="transform rotate-2 scale-105 shadow-xl bg-slate-950 border-y border-slate-800/80 py-3.5 sm:py-4.5 overflow-hidden">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-white font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
              {['Senior Product Designer', '10 Years of Experience', '35+ Completed Products', '$80M+ Client Growth', 'Startups & Enterprise', 'Direct Collaboration', 'Senior Product Designer', '10 Years of Experience', '35+ Completed Products', '$80M+ Client Growth'].map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-slate-200">{item}</span>
                  <span className="text-orange-500 font-normal">✻</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Orange Ribbon */}
          <div className="transform -rotate-2 -mt-7 sm:-mt-9 scale-105 shadow-2xl bg-orange-500 border-y border-orange-400 py-3.5 sm:py-4.5 overflow-hidden z-10 relative">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-white font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase" style={{ animationDirection: 'reverse', animationDuration: '28s' }}>
              {['Brand Design', 'Logo Design', 'Website Design', 'UI/UX Architecture', 'Design Systems', 'Product Strategy', 'Brand Design', 'Logo Design', 'Website Design', 'UI/UX Architecture'].map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-white drop-shadow-sm">{item}</span>
                  <span className="text-slate-950 font-normal">✻</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 03 // HOW I WORK (STICKY STACKING CARDS ON SCROLL) */}
        <section id="how-i-work" ref={howIWorkRef} className="py-20 md:py-28 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200/80 dark:border-slate-800/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400 block mb-2">
                  03 // HOW I WORK
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                  A simple, focused process
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 max-w-md">
                Every project is different, but the goal is always the same — understand the problem, find the right direction, and turn it into work that is ready to ship.
              </p>
            </div>

            {/* Sticky Step Progress Bar */}
            <div className="sticky top-20 z-40 py-3.5 mb-14 bg-slate-50/95 dark:bg-[#07090E]/95 backdrop-blur-md rounded-2xl px-4 sm:px-6 border border-slate-200/80 dark:border-slate-800/80 shadow-md">
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute top-5 left-6 right-6 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full" />
                <motion.div
                  className="absolute top-5 left-6 h-1.5 bg-orange-500 rounded-full"
                  style={{ width: progressLineWidth, maxWidth: 'calc(100% - 48px)' }}
                />
                <div className="relative z-10 flex justify-between items-center">
                  {PROCESS_DATA.map((step, idx) => {
                    const isActive = idx <= activeProcessStep;
                    const isCurrent = idx === activeProcessStep;
                    return (
                      <div
                        key={step.number}
                        className="flex flex-col items-center gap-1.5 cursor-pointer group/step"
                        onClick={() => {
                          const el = document.getElementById(`framer-step-${idx}`);
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                      >
                        <div
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-heading font-extrabold text-xs sm:text-sm transition-all duration-300 border-2 ${
                            isCurrent
                              ? 'bg-orange-500 text-white border-orange-500 scale-110 shadow-lg shadow-orange-500/30 ring-4 ring-orange-500/20'
                              : isActive
                              ? 'bg-slate-800 text-white dark:bg-slate-800 dark:text-orange-400 border-slate-800 dark:border-slate-700'
                              : 'bg-white dark:bg-[#0E111A] text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800 group-hover/step:border-orange-500/50'
                          }`}
                        >
                          {step.number}
                        </div>
                        <span className={`text-[11px] font-extrabold tracking-wide transition-colors ${isCurrent ? 'text-orange-500 dark:text-orange-400' : 'text-slate-400 dark:text-slate-500'}`}>
                          {step.number}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Scroll-Driven Falling-Back Card Stack */}
            <div className="relative max-w-4xl mx-auto pb-24 space-y-12 sm:space-y-16">
              {PROCESS_DATA.map((step, idx) => {
                const isCurrent = idx === activeProcessStep;
                const isPassed = idx < activeProcessStep;
                const distance = activeProcessStep - idx;

                const stickyTopStyle = {
                  top: `${165 + idx * 12}px`,
                  zIndex: 10 + idx,
                };

                const scaleVal = isPassed ? Math.max(0.88, 1 - distance * 0.05) : 1;
                const opacityVal = isPassed ? Math.max(0.35, 0.7 - distance * 0.25) : 1;
                const yOffset = isPassed ? -(distance * 16) : 0;
                const blurVal = isPassed ? `${Math.min(distance * 1.5, 3)}px` : '0px';

                return (
                  <div
                    id={`framer-step-${idx}`}
                    key={step.number}
                    style={stickyTopStyle}
                    className="sticky transition-all duration-500 ease-out"
                  >
                    <div
                      style={{
                        transform: `scale(${scaleVal}) translateY(${yOffset}px)`,
                        opacity: opacityVal,
                        filter: `blur(${blurVal})`,
                        transformOrigin: 'top center',
                      }}
                      className={`p-6 sm:p-9 rounded-2xl sm:rounded-3xl border transition-all duration-500 shadow-2xl backdrop-blur-sm ${
                        isCurrent
                          ? 'bg-white dark:bg-[#0E111A] border-orange-500 ring-2 ring-orange-500/20 shadow-orange-500/10'
                          : 'bg-white/95 dark:bg-[#0E111A]/95 border-slate-200 dark:border-slate-800/90'
                      }`}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <span className="w-9 h-9 rounded-xl bg-orange-500 text-white font-heading font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-md shadow-orange-500/25">
                              {step.number}
                            </span>
                            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                              {step.title}
                            </h3>
                          </div>

                          <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-orange-500 flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-slate-700 shadow-sm">
                            {getPhaseIcon(step.number)}
                          </div>
                        </div>

                        <p className="text-sm sm:text-base font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                          {step.summary}
                        </p>

                        {step.keyActivities && (
                          <div className="pt-2">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                              Key Sprint Activities
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {step.keyActivities.map((act) => (
                                <span
                                  key={act}
                                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200/80 dark:border-slate-800 flex items-center gap-1.5"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                                  <span>{act}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                          <span className="uppercase tracking-wider">Outcome:</span>
                          <span className="font-heading font-extrabold text-slate-900 dark:text-white px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                            {step.outputArtifact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04 // WHY ME (HORIZONTAL SCROLLABLE CAROUSEL WITH IMAGERY) */}
        <section id="why-me" className="py-20 md:py-28 bg-slate-100/70 dark:bg-[#0A0C12] border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400 block mb-2">
                  04 // WHY WORK WITH ME
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                  Senior experience. Direct collaboration. Less overhead.
                </h2>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 max-w-3xl mt-1">
                  Scroll horizontally to explore why startups and enterprises partner directly with me to craft scale-ready products.
                </p>
              </div>

              <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
                <button
                  onClick={() => scrollWhy('left')}
                  disabled={!canScrollLeft}
                  aria-label="Scroll left"
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    canScrollLeft
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-orange-500 hover:text-orange-500 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 border-slate-200/50 dark:border-slate-800/50 cursor-not-allowed opacity-50'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => scrollWhy('right')}
                  disabled={!canScrollRight}
                  aria-label="Scroll right"
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    canScrollRight
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-orange-500 hover:text-orange-500 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 border-slate-200/50 dark:border-slate-800/50 cursor-not-allowed opacity-50'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Cards Container */}
            <div
              ref={whyMeScrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:-mx-8 sm:px-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {WHY_ME_DATA.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 snap-start rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200/90 dark:border-slate-800 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden flex flex-col justify-between group cursor-grab active:cursor-grabbing"
                >
                  <div>
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">
                          {getWhyIcon(item.icon)}
                        </div>
                      </div>

                      {item.tags && (
                        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-200 backdrop-blur-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white leading-snug group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm font-normal text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1.5 text-orange-500 dark:text-orange-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        {idx === 0 && 'Experience Advantage'}
                        {idx === 1 && 'Enterprise Advantage'}
                        {idx === 2 && 'Skillset Advantage'}
                        {idx === 3 && 'Collaboration Advantage'}
                        {idx > 3 && 'Senior Advantage'}
                      </span>
                    </span>
                    <span className="uppercase text-[10px] tracking-wider">0{idx + 1} / 0{WHY_ME_DATA.length}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {WHY_ME_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollWhyToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeWhyIndex === idx
                      ? 'w-8 bg-orange-500'
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 05 // WORKS (HORIZONTAL SCROLLABLE CAROUSEL - 06 WORKS) */}
        <section id="works" className="py-20 md:py-28 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400">
                    05 // PORTFOLIO & CASE STUDIES
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80">
                    06 Works
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                  Selected Works
                </h2>
              </div>

              {/* Carousel Navigation Buttons */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                  <span>Scroll horizontally</span>
                </div>

                <button
                  onClick={() => scrollWorks('left')}
                  disabled={!canWorksScrollLeft}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                    canWorksScrollLeft
                      ? 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-sm hover:scale-105'
                      : 'bg-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-50'
                  }`}
                  aria-label="Previous work"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => scrollWorks('right')}
                  disabled={!canWorksScrollRight}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                    canWorksScrollRight
                      ? 'bg-orange-500 hover:bg-orange-600 text-white border-orange-500 shadow-md hover:scale-105 shadow-orange-500/20'
                      : 'bg-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-50'
                  }`}
                  aria-label="Next work"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Carousel Track */}
            <div
              ref={worksScrollRef}
              className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory -mx-4 sm:-mx-8 px-4 sm:px-8 cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PROJECTS_DATA.slice(0, 6).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0 snap-start group relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0E111A] border border-slate-200/90 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 overflow-hidden shadow-md hover:shadow-2xl cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Image Showcase */}
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      
                      {/* Category & Client Badge */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-lg bg-orange-500 text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-md">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 text-white font-bold text-xs backdrop-blur-md border border-white/10">
                          {project.clientType}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-semibold">
                        <span>{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 space-y-3.5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors leading-snug line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-normal text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="px-6 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 mt-2">
                    <span className="text-xs font-bold text-slate-400">
                      Case Study 0{index + 1}
                    </span>

                    <div className="flex items-center gap-1.5 font-heading font-extrabold text-xs uppercase tracking-wider text-orange-500 dark:text-orange-400 group-hover:translate-x-1 transition-transform">
                      <span>Explore Project</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar Track */}
            <div className="mt-4 max-w-xs mx-auto flex items-center gap-3">
              <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full transition-all duration-150"
                  style={{ width: `${Math.max(16, worksScrollProgress)}%` }}
                />
              </div>
              <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">
                Swipe to see all 6
              </span>
            </div>
          </div>
        </section>

        {/* 06 // TESTIMONIALS (BENTO GRID WITH ANIMATED METRICS ON SCROLL & STABLE SPOTLIGHT) */}
        <section id="testimonials" className="py-20 md:py-28 bg-slate-50 dark:bg-[#07090E] border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            
            {/* Header with Eyebrow and Ghost Watermark */}
            <div className="text-center relative mb-14 sm:mb-18">
              <div className="flex flex-col items-center gap-1 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400 block">
                  06 // TESTIMONIALS & REVIEWS
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  (Why clients love working with Abdul)
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight relative z-10">
                Trusted by Founders & Teams
              </h2>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-8xl lg:text-9xl font-heading font-black text-slate-200/40 dark:text-white/[0.03] select-none pointer-events-none tracking-tighter uppercase">
                Testimonials
              </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Bento: Metrics Card with Animated Numbers */}
              <div className="lg:col-span-4 rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between bg-slate-900 dark:bg-[#0B0E17] text-white border border-slate-800 shadow-xl">
                <div className="space-y-7 relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Proven Impact</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                        <AnimatedCounter value={35} suffix="+" />
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Finalized Digital Projects</div>
                    </div>
                    <div className="pt-4 border-t border-slate-800">
                      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                        <AnimatedCounter value={99} suffix="%" />
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Client Satisfaction & On-Time Rate</div>
                    </div>
                    <div className="pt-4 border-t border-slate-800">
                      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-orange-400 tracking-tight">
                        <AnimatedCounter value={80} prefix="$" suffix="M+" />
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Client Capital & Revenue Scaled</div>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 pt-7 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-300">
                    <AnimatedCounter value={10} suffix="+ Years" className="text-white font-bold" /> Senior Leadership
                  </span>
                </div>
              </div>

              {/* Right Bento: Featured Quote Spotlight with Stable Dimensions */}
              <div className="lg:col-span-8 rounded-3xl relative overflow-hidden bg-slate-900 border border-slate-800 min-h-[440px] sm:min-h-[460px] flex flex-col justify-between p-7 sm:p-10 lg:p-12 shadow-2xl">
                {/* Background Image Scrim */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img
                    src={TESTIMONIALS_DATA[currentTestimonialIndex]?.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop'}
                    alt="Workspace"
                    className="w-full h-full object-cover object-center opacity-25 scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/70" />
                </div>

                {/* Top Controls (Clean layout without collapsing pill badges) */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-extrabold text-sm sm:text-base text-orange-400 tracking-wider">
                      0{currentTestimonialIndex + 1} / 0{TESTIMONIALS_DATA.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length)}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/10 hover:scale-105"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length)}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                {/* Quote Content */}
                <div className="relative z-10 my-6 sm:my-8 flex-1 flex flex-col justify-center">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500/40 shrink-0 mb-3" />
                  <p className="font-heading font-semibold text-lg sm:text-2xl lg:text-3xl text-white leading-snug tracking-tight">
                    "{TESTIMONIALS_DATA[currentTestimonialIndex]?.quote}"
                  </p>
                </div>

                {/* Bottom Author Info & Pills */}
                <div className="relative z-10 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <img
                      src={TESTIMONIALS_DATA[currentTestimonialIndex]?.avatar}
                      alt={TESTIMONIALS_DATA[currentTestimonialIndex]?.author}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full ring-2 ring-orange-500/50 object-cover shrink-0"
                    />
                    <div>
                      <h4 className="font-heading font-extrabold text-sm sm:text-base text-white">
                        {TESTIMONIALS_DATA[currentTestimonialIndex]?.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium">
                        {TESTIMONIALS_DATA[currentTestimonialIndex]?.role}, <span className="text-orange-400 font-semibold">{TESTIMONIALS_DATA[currentTestimonialIndex]?.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {TESTIMONIALS_DATA.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentTestimonialIndex(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === currentTestimonialIndex ? 'w-7 sm:w-8 bg-orange-500' : 'w-2 bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 07 // CONTACT */}
        <section id="contact" className="py-20 md:py-28 bg-slate-100/70 dark:bg-[#0A0C12]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400 block mb-2">
                  07 // Direct Inquiries
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
                  Let's Build Together
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 max-w-md">
                Have a startup or medium-scale project in mind? Reach out directly or select a service line below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4 space-y-6">
                <div className="p-8 rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 inline-block">
                      ● Available for New Projects
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                      Let's Discuss Your Product
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Fill in the project details to kick off a conversation. Guaranteed response within 24 hours.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>Experience Level:</span>
                      <span className="font-bold text-slate-900 dark:text-white">10+ Years</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>Specialization:</span>
                      <span className="font-bold text-slate-900 dark:text-white">Product & UI/UX Design</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>Target Clients:</span>
                      <span className="font-bold text-slate-900 dark:text-white">Startups & Scale-ups</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="p-8 rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200 dark:border-slate-800 shadow-sm">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                        Inquiry Received!
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 max-w-md mx-auto">
                        Thank you for reaching out. I'll review your project details and respond within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-orange-500 text-white font-heading font-bold text-xs uppercase tracking-wider cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Select Service Line
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['Product Design', 'UI/UX', 'Branding', 'Visual & Graphic Design'].map((srv) => (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => setActiveService(srv)}
                              className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                activeService === srv
                                  ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                                  : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                              }`}
                            >
                              {srv}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Your Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold focus:outline-none focus:border-orange-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Your Email *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold focus:outline-none focus:border-orange-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Company / Startup
                          </label>
                          <input
                            type="text"
                            placeholder="Acme Inc."
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold focus:outline-none focus:border-orange-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Estimated Budget
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold focus:outline-none focus:border-orange-500 transition-colors"
                          >
                            <option value="$500 - $1,000">$500 - $1,000</option>
                            <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                            <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                            <option value="$5,000+">$5,000+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Project Details & Goals *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell me about your product, timeline, and what you're looking to achieve..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold focus:outline-none focus:border-orange-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-900 dark:bg-[#05070B] text-slate-300 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-heading font-extrabold text-base shadow-sm">
                  AK
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-sm text-white">AK Designs</span>
                  <span className="text-[11px] font-semibold text-slate-400">Senior Product Design & Experience Architecture</span>
                </div>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer border border-slate-700"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
              <p>© 2026 | AK Designs. All right reserved.</p>
              <div className="flex items-center gap-4">
                <span>Product Design</span>
                <span>•</span>
                <span>UI/UX</span>
                <span>•</span>
                <span>Branding</span>
                <span>•</span>
                <span>Graphic Design</span>
              </div>
            </div>
          </div>
        </footer>

        {/* CASE STUDY MODAL OVERLAY */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0E111A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-orange-500 text-white font-heading font-extrabold text-xs uppercase">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {selectedProject.client} • {selectedProject.year}
                    </span>
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden h-64 sm:h-80 bg-slate-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  {selectedProject.metrics.map((m: any, idx: number) => (
                    <div key={idx} className="text-center space-y-1">
                      <span className="font-heading font-extrabold text-lg sm:text-xl text-orange-500 block">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm font-normal text-slate-700 dark:text-slate-300">
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-slate-900 dark:text-white mb-1">
                      The Challenge
                    </h4>
                    <p>{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-slate-900 dark:text-white mb-1">
                      UX Research & Strategy
                    </h4>
                    <p>{selectedProject.research}</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-slate-900 dark:text-white mb-1">
                      Design Execution & Solution
                    </h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-slate-900 dark:text-white mb-1">
                      Impact & Measurable Outcome
                    </h4>
                    <p>{selectedProject.impact}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      scrollToSection('contact');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-orange-500 text-white font-heading font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
