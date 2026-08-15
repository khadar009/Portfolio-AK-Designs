import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, CheckCircle2, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface AboutMeProps {
  onNavigateContact?: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onNavigateContact }) => {
  const handleContactClick = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white dark:bg-[#080A10] border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
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

            {/* Main Headline */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Award Winning <span className="text-orange-500 dark:text-orange-400">Designer</span>
            </h2>

            {/* Bio Body Text */}
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Hello! I’m <strong className="font-bold text-slate-900 dark:text-white">Abdul Kareem</strong>, a senior product designer with over a decade of experience crafting high-impact user experiences, intuitive digital ecosystems, and scalable design systems for startups and industry leaders worldwide.
              </p>
              <p>
                My philosophy balances pixel-level precision with commercial clarity. By bridging the gap between business objectives, engineering constraints, and human behavior, I transform complex workflows into elegant, conversion-driven interfaces.
              </p>
            </div>

            {/* Quick Value Pillars */}
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

            {/* Call to Action Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleContactClick}
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
  );
};
