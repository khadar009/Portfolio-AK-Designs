import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      const total = scrollWidth - clientWidth;
      setScrollProgress(total > 0 ? (scrollLeft / total) * 100 : 0);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 460;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="works" className="py-20 md:py-28 bg-slate-50 dark:bg-[#07090E] border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Left/Right Navigation Controls (No "See All Works" button) */}
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
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                canScrollLeft
                  ? 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-sm hover:scale-105'
                  : 'bg-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous work"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                canScrollRight
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
          ref={scrollContainerRef}
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
              onClick={() => onSelectProject(project)}
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

                {/* Card Content Body: Skills Badge, Heading, Subtext */}
                <div className="p-6 space-y-3.5">
                  {/* Skills Badges */}
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

                  {/* Heading & Subtext */}
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

        {/* Carousel Progress Bar Track */}
        <div className="mt-4 max-w-xs mx-auto flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-orange-500 rounded-full"
              style={{ width: `${Math.max(16, scrollProgress)}%` }}
            />
          </div>
          <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">
            Swipe to see all 6
          </span>
        </div>

      </div>
    </section>
  );
};

