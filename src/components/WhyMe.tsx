import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Zap, Target, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { WHY_ME_DATA } from '../data/portfolioData';

export const WhyMe: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const itemWidth = 360;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(index, 0), WHY_ME_DATA.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (idx: number) => {
    if (scrollContainerRef.current) {
      const children = scrollContainerRef.current.children;
      if (children[idx]) {
        (children[idx] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-me" className="py-20 md:py-28 bg-slate-100/70 dark:bg-[#0A0C12] border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Carousel Navigation Buttons */}
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

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
            <button
              onClick={() => scroll('left')}
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
              onClick={() => scroll('right')}
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

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:-mx-8 sm:px-8"
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
                {/* Visual Image Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  {/* Floating Icon Badge (Pillar capsule removed) */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  {/* Tags on Image Base */}
                  {item.tags && item.tags.length > 0 && (
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

                {/* Text Content */}
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

              {/* Bottom Subtle Indicator */}
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

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {WHY_ME_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-8 bg-orange-500'
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
