import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const isDarkBg = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon: Dynamic Speed Rim in authentic #4883ff */}
      <div className="relative w-10 h-10 rounded-xl bg-[#4883ff] flex items-center justify-center shadow-md shadow-[#4883ff]/30 text-white shrink-0 overflow-hidden">
        {/* Tyre / Wheel alloy graphic */}
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-white"
          strokeWidth="2.2"
        >
          <circle cx="16" cy="16" r="13" className="stroke-white/40" />
          <circle cx="16" cy="16" r="9" className="stroke-white" />
          <circle cx="16" cy="16" r="3.5" fill="white" className="stroke-none" />
          {/* 4 aerodynamic rotational spokes */}
          <line x1="16" y1="3" x2="16" y2="7" strokeLinecap="round" />
          <line x1="16" y1="25" x2="16" y2="29" strokeLinecap="round" />
          <line x1="3" y1="16" x2="7" y2="16" strokeLinecap="round" />
          <line x1="25" y1="16" x2="29" y2="16" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="text-left leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-extrabold text-lg sm:text-xl tracking-tight ${
            isDarkBg ? 'text-white' : 'text-[#232323]'
          }`}>
            DYNAMIC AUTO
          </span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[10px] font-bold tracking-widest text-[#4883ff] uppercase">
            &amp; TYRE CENTRE
          </span>
          <span className="text-[10px] text-[#7a7a7a]">·</span>
          <span className={`text-[10px] font-medium tracking-tight ${
            isDarkBg ? 'text-neutral-400' : 'text-[#7a7a7a]'
          }`}>
            LAGOS
          </span>
        </div>
      </div>
    </div>
  );
};
