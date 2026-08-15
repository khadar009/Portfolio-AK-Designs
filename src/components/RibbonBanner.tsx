import React from 'react';

export const RibbonBanner: React.FC = () => {
  const itemsTop = [
    'Brand Design',
    'Logo Design',
    'Website Design',
    'UI/UX Architecture',
    'Design Systems',
    'Product Strategy',
    'Motion & Interactions',
  ];

  const itemsBottom = [
    'Senior Product Designer',
    '10 Years of Experience',
    '35+ Completed Products',
    '$80M+ Client Growth',
    'Startups & Enterprise',
    'Direct Collaboration',
  ];

  const repeatedTop = [...itemsTop, ...itemsTop, ...itemsTop, ...itemsTop];
  const repeatedBottom = [...itemsBottom, ...itemsBottom, ...itemsBottom, ...itemsBottom];

  return (
    <div className="relative py-12 md:py-16 overflow-hidden select-none pointer-events-none">
      
      {/* Background Dark Tape Ribbon (Angled +2 deg) */}
      <div className="transform rotate-2 scale-105 shadow-xl bg-slate-950 border-y border-slate-800/80 py-3.5 sm:py-4.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-white font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
          {repeatedBottom.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-slate-200">{item}</span>
              <span className="text-orange-500 font-normal">✻</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Foreground Orange Tape Ribbon (Angled -2 deg, intersecting) */}
      <div className="transform -rotate-2 -mt-7 sm:-mt-9 scale-105 shadow-2xl bg-orange-500 border-y border-orange-400 py-3.5 sm:py-4.5 overflow-hidden z-10 relative">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-white font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase" style={{ animationDirection: 'reverse', animationDuration: '28s' }}>
          {repeatedTop.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-white drop-shadow-sm">{item}</span>
              <span className="text-slate-950 font-normal">✻</span>
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
};
