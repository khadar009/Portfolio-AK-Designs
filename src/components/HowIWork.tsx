import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { PROCESS_DATA } from '../data/portfolioData';
import { CheckCircle2, Layers, Compass, Cpu, Rocket } from 'lucide-react';

export const HowIWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const progressLineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.28) {
      setActiveStep(0);
    } else if (latest < 0.55) {
      setActiveStep(1);
    } else if (latest < 0.8) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  const getPhaseIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Compass className="w-6 h-6" />;
      case '02':
        return <Layers className="w-6 h-6" />;
      case '03':
        return <Cpu className="w-6 h-6" />;
      case '04':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="how-i-work"
      ref={containerRef}
      className="py-20 md:py-28 bg-slate-50 dark:bg-[#07090E] border-t border-slate-200/80 dark:border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
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
            
            {/* Background Track */}
            <div className="absolute top-5 left-6 right-6 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full" />

            {/* Scroll-Driven Animated Fill Line */}
            <motion.div
              className="absolute top-5 left-6 h-1.5 bg-orange-500 rounded-full"
              style={{ width: progressLineWidth, maxWidth: 'calc(100% - 48px)' }}
            />

            {/* Step Indicators */}
            <div className="relative z-10 flex justify-between items-center">
              {PROCESS_DATA.map((step, idx) => {
                const isActive = idx <= activeStep;
                const isCurrent = idx === activeStep;

                return (
                  <div
                    key={step.number}
                    className="flex flex-col items-center gap-1.5 cursor-pointer group/step"
                    onClick={() => {
                      const el = document.getElementById(`step-card-${idx}`);
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
                    <span
                      className={`text-[11px] font-extrabold tracking-wide transition-colors ${
                        isCurrent
                          ? 'text-orange-500 dark:text-orange-400'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Scroll-Driven Falling-Back Card Stack Container */}
        <div className="relative max-w-4xl mx-auto pb-24 space-y-12 sm:space-y-16">
          {PROCESS_DATA.map((step, idx) => {
            const isCurrent = idx === activeStep;
            const isPassed = idx < activeStep;
            const distance = activeStep - idx;

            // Staggered sticky top with ample clearance below top-20 progress bar
            const stickyTopStyle = {
              top: `${165 + idx * 12}px`,
              zIndex: 10 + idx,
            };

            // Dynamic depth transform values for the "falling back into space" effect
            const scaleVal = isPassed ? Math.max(0.88, 1 - distance * 0.05) : 1;
            const opacityVal = isPassed ? Math.max(0.35, 0.7 - distance * 0.25) : 1;
            const yOffset = isPassed ? -(distance * 16) : 0;
            const blurVal = isPassed ? `${Math.min(distance * 1.5, 3)}px` : '0px';

            return (
              <div
                id={`step-card-${idx}`}
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
                    
                    {/* Card Top: Number Badge + Title + Icon */}
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

                    {/* Summary */}
                    <p className="text-sm sm:text-base font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                      {step.summary}
                    </p>

                    {/* Key Activities & Deliverables */}
                    {step.keyActivities && step.keyActivities.length > 0 && (
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

                    {/* Output Artifact Footer */}
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
  );
};
