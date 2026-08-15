import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#05070B] text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-heading font-extrabold text-base shadow-sm">
              AK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm text-white">
                AK Designs
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                Senior Product Design & Experience Architecture
              </span>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer border border-slate-700"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>© 2026 | AK Designs. All right reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Product Design</span>
            <span>•</span>
            <span className="text-slate-400">UI/UX</span>
            <span>•</span>
            <span className="text-slate-400">Branding</span>
            <span>•</span>
            <span className="text-slate-400">Graphic Design</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
