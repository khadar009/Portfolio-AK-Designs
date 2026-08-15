import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2, Building, Calendar, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigateContact,
}) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl min-h-screen sm:min-h-0 sm:max-h-[92vh] rounded-none sm:rounded-3xl bg-white dark:bg-[#0E111A] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        >
          
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-white/90 dark:bg-[#0E111A]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-orange-500 text-white font-heading font-extrabold text-xs uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                Detailed Case Study
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10">
            
            {/* Title & Metadata Banner */}
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-600 dark:text-slate-300 max-w-3xl">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <Building className="w-4 h-4 text-slate-400" />
                  <span>Client: {project.client} ({project.clientType})</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Year: {project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <Layers className="w-4 h-4 text-slate-400" />
                  <span>Core Discipline: {project.category}</span>
                </div>
              </div>
            </div>

            {/* Impact Metrics Highlights Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    {m.label}
                  </span>
                  <span className="font-heading font-extrabold text-2xl text-orange-500 dark:text-orange-400">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Cover Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 sm:h-[420px] object-cover"
              />
            </div>

            {/* Structured Sections: Problem, Research, Solution, Impact, Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Section 1: Problem Statement */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-orange-400 block">
                  01 // The Problem
                </span>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                  Core Bottleneck & Challenge
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Section 2: Research & Insights */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-orange-400 block">
                  02 // UX Research
                </span>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                  User Insights & Architecture
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.research}
                </p>
              </div>

              {/* Section 3: The Solution */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-orange-400 block">
                  03 // Execution & Solution
                </span>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                  Product & UI/UX Execution
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Section 4: Impact & Measurable Outcome */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0E111A] border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-orange-400 block">
                  04 // Impact & Business Outcome
                </span>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                  Results & Business Growth
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.impact} {project.outcome}
                </p>
              </div>

            </div>

            {/* Gallery Images */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4 pt-4">
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                  Visual Systems & Interface Artifacts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((imgUrl, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                      <img src={imgUrl} alt={`Gallery artifact ${i}`} className="w-full h-56 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Banner inside Modal */}
            <div className="p-8 rounded-2xl bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Need a similar outcome for your product?
                </h3>
                <p className="text-xs font-semibold text-slate-300">
                  Book a direct 1-on-1 strategy call to discuss your startup or scale-up requirements.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onNavigateContact();
                }}
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 cursor-pointer hover:scale-105 transition-transform"
              >
                <span>Inquire For Project</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
