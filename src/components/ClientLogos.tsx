import React from 'react';

interface ClientItem {
  id: string;
  name: string;
  logoSvg: React.ReactNode;
}

const CLIENTS: ClientItem[] = [
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

export const ClientLogos: React.FC = () => {
  // Duplicate array three times for smooth uninterrupted infinite marquee loop
  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-10 md:py-14 bg-transparent overflow-hidden relative">
      
      {/* Edge Gradient Mask Overlays */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-[#07090E] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-[#07090E] to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6 text-center">
        <h2 className="font-heading font-extrabold text-sm sm:text-base text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          Companies and Clients where I worked on Full time and Consultant Basis
        </h2>
      </div>

      {/* Clean Seamless Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-2">
          {marqueeItems.map((client, index) => (
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
  );
};

