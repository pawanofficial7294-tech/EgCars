import React from 'react';
import egLogo from '../assets/EG.png';

interface EgCarsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  standalone?: boolean;
}

export const EgCarsLogo: React.FC<EgCarsLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  standalone = false
}) => {
  const imageSizes = {
    sm: 'h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-14 sm:h-16 w-auto',
    xl: 'h-20 sm:h-24 w-auto'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  if (standalone) {
    return (
      <div className={`relative inline-block select-none ${className}`}>
        <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full pointer-events-none" />
        <img
          src={egLogo}
          alt="EG Cars Logo"
          className={`${imageSizes[size]} object-contain relative z-10 transition-transform duration-300 hover:scale-105 drop-shadow-[0_4px_20px_rgba(212,175,55,0.35)]`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official EG Cars Crest Image */}
      <div className="relative group shrink-0">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-300/10 rounded-xl blur-sm group-hover:opacity-100 opacity-60 transition duration-300 pointer-events-none" />
        <div className="relative rounded-xl overflow-hidden bg-black/60 p-1 border border-amber-400/30 group-hover:border-amber-400/60 transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <img
            src={egLogo}
            alt="EG Cars Ranchi"
            className={`${imageSizes[size]} object-contain transition-transform duration-300 group-hover:scale-105`}
          />
        </div>
      </div>

      {/* Brand Text Branding with Ranchi Location Badge */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-black tracking-wider ${titleSizes[size]} text-white font-['Outfit']`}>
            EG <span className="gold-gradient-text font-black">CARS</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono hidden sm:inline-block">
            Ranchi
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium font-mono -mt-0.5">
            Premier Self-Drive Rentals
          </span>
        )}
      </div>
    </div>
  );
};
