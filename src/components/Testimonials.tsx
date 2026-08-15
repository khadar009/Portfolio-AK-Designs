import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { AnimatedCounter } from './AnimatedCounter';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden bg-slate-50 dark:bg-[#07090E]">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 dark:bg-orange-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header with Eyebrow and Giant Watermark */}
        <div className="text-center relative mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1 mb-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400 block">
              06 // TESTIMONIALS & REVIEWS
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              (Why clients love working with Abdul)
            </span>
          </motion.div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight relative z-10">
            Trusted by Founders & Teams
          </h2>

          {/* Background Ghost Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-8xl lg:text-9xl font-heading font-black text-slate-200/40 dark:text-white/[0.03] select-none pointer-events-none tracking-tighter uppercase">
            Testimonials
          </div>
        </div>

        {/* Bento Grid: Left Stats Card + Right Featured Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT BENTO CARD: Metrics & Track Record with Animated Numbers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between bg-slate-900 dark:bg-[#0B0E17] text-white border border-slate-800 shadow-xl"
          >
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-black/60 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-7">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Proven Impact</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                    <AnimatedCounter value={35} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                    Finalized Digital Projects
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                    <AnimatedCounter value={99} suffix="%" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                    Client Satisfaction & On-Time Rate
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-orange-400 tracking-tight">
                    <AnimatedCounter value={80} prefix="$" suffix="M+" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                    Client Capital & Revenue Scaled
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-7 mt-6 border-t border-slate-800/80 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300">
                <AnimatedCounter value={10} suffix="+ Years" className="text-white font-bold" /> Senior Leadership
              </span>
            </div>
          </motion.div>

          {/* RIGHT BENTO CARD: Interactive Testimonial Spotlight with stable dimensions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            className="lg:col-span-8 rounded-3xl relative overflow-hidden bg-slate-900 border border-slate-800 min-h-[440px] sm:min-h-[460px] flex flex-col justify-between p-7 sm:p-10 lg:p-12 shadow-2xl"
          >
            {/* Background Image with Dark Gradient Scrim */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={activeTestimonial.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop'}
                alt="Workspace"
                className="w-full h-full object-cover object-center opacity-25 scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/70" />
            </div>

            {/* Top Bar: Slide Index & Prev/Next Controls (Clean layout without collapsing pill badges) */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-sm sm:text-base text-orange-400 tracking-wider">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/10 hover:scale-105"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Middle: Active Testimonial Quote */}
            <div className="relative z-10 my-6 sm:my-8 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500/40 shrink-0" />
                  <p className="font-heading font-semibold text-lg sm:text-2xl lg:text-3xl text-white leading-snug tracking-tight">
                    "{activeTestimonial.quote}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Author Details & Fast Switcher Dots */}
            <div className="relative z-10 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 sm:gap-4">
                {activeTestimonial.avatar && (
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.author}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full ring-2 ring-orange-500/50 object-cover shrink-0"
                  />
                )}
                <div>
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-white">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">
                    {activeTestimonial.role}, <span className="text-orange-400 font-semibold">{activeTestimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Slide Selector Indicators */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'w-7 sm:w-8 bg-orange-500' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
