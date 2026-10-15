import React from 'react';
import { TESTIMONIALS, TRUST_STATS } from '../data/testimonialsData';
import { Star, ShieldCheck, Quote, CheckCircle2, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#09090b] overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {TRUST_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#111116] border border-white/10 text-center relative overflow-hidden group hover:border-amber-400/30 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-['Outfit'] mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Ranchi Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Trusted by Travelers Across <span className="gold-gradient-text">Jharkhand</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Read authentic reviews from Ranchi locals, corporate guests, and tourists who experienced effortless self-drive mobility.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#111116] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between relative group hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Renter
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Car Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-['Outfit']">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-amber-300 font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {t.carRented}
                  </span>
                  <div className="text-[10px] text-slate-500 mt-1">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
