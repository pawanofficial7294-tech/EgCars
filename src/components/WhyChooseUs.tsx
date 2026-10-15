import React from 'react';
import { 
  Infinity, 
  ShieldCheck, 
  Zap, 
  RotateCcw, 
  Headphones, 
  Plane, 
  Sparkles, 
  Fuel, 
  Award,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const mainFeatures = [
    {
      icon: Infinity,
      title: 'Unlimited Kilometers (Odometer Freedom)',
      tagline: 'Drive without anxiety. No per-km penalties.',
      description: 'Unlike standard car rentals that cap you at 200 km/day, every car at EG Cars comes with 100% unrestricted kilometers. Head from Ranchi to Netarhat, Betla, Deoghar, or Jamshedpur with total freedom.',
      highlight: 'Zero per-kilometer billing'
    },
    {
      icon: ShieldCheck,
      title: '27-Point Safety Checked & Sanitized',
      tagline: 'Mechanical excellence & hospital-grade sanitization.',
      description: 'Every car goes through a meticulous 27-point pre-delivery inspection covering brake pads, tire treads, fluid levels, wipers, and battery health. Handed over spotless, odor-free, and highway ready.',
      highlight: 'Pre-flight check certificate'
    },
    {
      icon: Zap,
      title: '90-Second Instant Digital KYC',
      tagline: 'Zero physical paperwork. WhatsApp/Web verified.',
      description: 'Simply take a photo of your Aadhaar Card and valid Indian / International Driving Licence. Our instant digital engine verifies your credentials in under 90 seconds. No cumbersome security forms.',
      highlight: 'Paperless 1-minute approval'
    },
    {
      icon: RotateCcw,
      title: 'Instant Same-Day Security Deposit Refund',
      tagline: 'No 7-day waiting. Refunded within 2 hours.',
      description: 'We believe your money belongs to you. Once you complete vehicle handover and basic odometer inspection, your refundable deposit is triggered directly into your original UPI / Bank account within 2 hours.',
      highlight: 'Guaranteed 2-hour UPI refund'
    }
  ];

  const secondaryPillars = [
    {
      icon: Plane,
      title: 'Airport IXR VIP Delivery',
      desc: 'Vehicle waiting at Birsa Munda Airport Terminal 1 before your flight touches down.'
    },
    {
      icon: Headphones,
      title: '24/7 Highway Assistance',
      desc: 'On-demand mechanical support and towing coverage across NH-33 and all state roads.'
    },
    {
      icon: Fuel,
      title: 'Fair Fuel Guarantee',
      desc: 'Receive full tank, return full tank. No inflated fuel surcharge penalties.'
    },
    {
      icon: Sparkles,
      title: 'Doorstep Delivery',
      desc: 'Get your car delivered directly to your home, office, or hotel in Ranchi on time.'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-[#09090b] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>The EG Cars Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Why Ranchi Chooses <span className="gold-gradient-text">EG Cars</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            We’ve eliminated everything people hate about traditional car rentals: hidden per-kilometer charges, delayed deposit refunds, and tired old vehicles.
          </p>
        </div>

        {/* 4 Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {mainFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="relative rounded-3xl bg-[#111116] border border-white/10 p-6 sm:p-8 hover:border-amber-400/40 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.12)] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-amber-300/80 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors font-['Outfit'] mb-2">
                    {feat.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400 mb-3 font-mono">
                    {feat.tagline}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Secondary Pillars Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-400/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1 font-['Outfit']">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
