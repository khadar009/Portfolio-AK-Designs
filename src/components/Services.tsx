import React from 'react';
import { motion } from 'motion/react';
import { Layout, Sparkles, Palette, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceCategory } from '../types';

const FigmaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

interface ServicesProps {
  onSelectServiceForContact: (service: ServiceCategory) => void;
}

interface ServiceConfig {
  id: string;
  title: string;
  shortLabel: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  accentHoverBorder: string;
  badgeBg: string;
  badgeText: string;
}

const SERVICE_THEMES: Record<string, ServiceConfig> = {
  'product-design': {
    id: 'product-design',
    title: 'Product Design',
    shortLabel: 'SaaS & Web Apps',
    accentBg: 'bg-orange-500/10 dark:bg-orange-500/15',
    accentBorder: 'border-orange-500/20',
    accentText: 'text-orange-500 dark:text-orange-400',
    accentHoverBorder: 'hover:border-orange-500/60 dark:hover:border-orange-500/60',
    badgeBg: 'bg-orange-500/10 text-orange-600 dark:text-orange-300',
    badgeText: 'SaaS • Web • Mobile',
  },
  'ui-ux': {
    id: 'ui-ux',
    title: 'UI/UX Design',
    shortLabel: 'Wireframes & Flows',
    accentBg: 'bg-indigo-500/10 dark:bg-indigo-500/15',
    accentBorder: 'border-indigo-500/20',
    accentText: 'text-indigo-500 dark:text-indigo-400',
    accentHoverBorder: 'hover:border-indigo-500/60 dark:hover:border-indigo-500/60',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300',
    badgeText: 'Figma • Prototypes',
  },
  'branding': {
    id: 'branding',
    title: 'Branding & Identity',
    shortLabel: 'Logos & Guidelines',
    accentBg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    accentBorder: 'border-emerald-500/20',
    accentText: 'text-emerald-500 dark:text-emerald-400',
    accentHoverBorder: 'hover:border-emerald-500/60 dark:hover:border-emerald-500/60',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
    badgeText: 'Logos • Visual Systems',
  },
  'visual-graphic-design': {
    id: 'visual-graphic-design',
    title: 'Visual & Graphic',
    shortLabel: 'Pitch Decks & Motion',
    accentBg: 'bg-rose-500/10 dark:bg-rose-500/15',
    accentBorder: 'border-rose-500/20',
    accentText: 'text-rose-500 dark:text-rose-400',
    accentHoverBorder: 'hover:border-rose-500/60 dark:hover:border-rose-500/60',
    badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-300',
    badgeText: 'Decks • Marketing • Motion',
  },
};

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const getServiceIcon = (iconName: string, accentText: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className={`w-6 h-6 ${accentText}`} />;
      case 'Figma':
        return <FigmaIcon className={`w-6 h-6 ${accentText}`} />;
      case 'Sparkles':
        return <Sparkles className={`w-6 h-6 ${accentText}`} />;
      case 'Palette':
        return <Palette className={`w-6 h-6 ${accentText}`} />;
      default:
        return <Layout className={`w-6 h-6 ${accentText}`} />;
    }
  };

  const handleCardClick = (title: string) => {
    onSelectServiceForContact(title as ServiceCategory);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-100/70 dark:bg-[#0A0C12] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
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
          {SERVICES_DATA.map((service, index) => {
            const theme = SERVICE_THEMES[service.id] || SERVICE_THEMES['product-design'];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => handleCardClick(service.title)}
                className={`group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0E111A] border border-slate-200/90 dark:border-slate-800/90 ${theme.accentHoverBorder} shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full`}
              >
                {/* Top Row: Icon Container + Arrow */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme.accentBg} ${theme.accentBorder} border transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                      {getServiceIcon(service.icon, theme.accentText)}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {theme.title}
                  </h3>
                  
                  {/* Subtle Subtitle / Deliverable preview */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
                    {theme.shortLabel}
                  </p>
                </div>

                {/* Bottom Badge Tag */}
                <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold ${theme.badgeBg}`}>
                    {theme.badgeText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
