import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { ArrowUpRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onNavigateWorks: () => void;
  onNavigateContact: () => void;
}

const AnimatedStatNumber: React.FC<{ valueStr: string }> = ({ valueStr }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState("0");

  const match = valueStr.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const targetNum = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    if (!isInView || targetNum === 0) return;

    const controls = animate(0, targetNum, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        setDisplayValue(Math.floor(value).toString());
      },
    });

    return () => controls.stop();
  }, [isInView, targetNum]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
      {isInView ? `${prefix}${displayValue}${suffix}` : `${prefix}0${suffix}`}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onNavigateWorks, onNavigateContact }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50 dark:bg-[#07090E]">
      
      {/* Ambient Lighting Gradient Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-orange-500/10 dark:bg-orange-500/12 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Availability Badge & Social Proof Stack */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for New Projects</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400"
          >
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                alt="Founder"
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                alt="Founder"
              />
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
                alt="Founder"
              />
            </div>
            <span>Trusted by founders & leaders</span>
          </motion.div>
        </div>

        {/* Main Headline & Bio */}
        <div className="max-w-4xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[62px] text-slate-900 dark:text-white leading-[1.12] tracking-tight"
          >
            I turn complex product ideas into{' '}
            <span className="text-orange-500">
              clear, intuitive, and high-impact
            </span>{' '}
            digital experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-3xl"
          >
            {HERO_DATA.subheadline}
          </motion.p>

          {/* Core Discipline Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            {['Product Design', 'UI/UX Architecture', 'Design Systems', 'Branding', 'Web Apps', 'Motion'].map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Action Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <button
              onClick={onNavigateWorks}
              className="px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Selected Works</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onNavigateContact}
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-heading font-extrabold text-sm transition-all cursor-pointer border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Build Together</span>
            </button>
          </motion.div>
        </div>

        {/* Stats Section with animated scroll counter */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200/90 dark:border-slate-800 shadow-sm"
        >
          {HERO_DATA.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-orange-500 pl-4 sm:pl-6">
              <AnimatedStatNumber valueStr={stat.value} />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

