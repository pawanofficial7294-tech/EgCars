import React from 'react';
import { MousePointerClick, FileCheck, KeyRound, Banknote, ArrowRight, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MousePointerClick,
      title: 'Choose & Customize',
      desc: 'Select from our luxury Thar, Innova Crysta, Creta, or Swift. Pick your dates, pickup hub (or doorstep delivery in Ranchi).'
    },
    {
      num: '02',
      icon: FileCheck,
      title: '90-Sec Digital KYC',
      desc: 'Submit your Aadhaar & Driving Licence directly via WhatsApp or web portal. Automated instant verification in under 90 seconds.'
    },
    {
      num: '03',
      icon: KeyRound,
      title: 'Unlock & Drive',
      desc: 'Collect keys at Birsa Munda Airport Terminal 1, Lalpur Hub, or at your doorstep. Clean, full tank, 27-point inspected.'
    },
    {
      num: '04',
      icon: Banknote,
      title: 'Drop & Instant Refund',
      desc: 'Drop off the vehicle at any designated hub or home pickup. Your security deposit is processed back to your UPI within 2 hours.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Effortless Self-Drive Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            How Renting Works with <span className="gold-gradient-text">EG Cars</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            From booking to keys in hand in under 5 minutes. No physical paperwork, zero delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-[#121218] border border-white/10 p-6 sm:p-7 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black font-mono text-slate-700 group-hover:text-amber-400/50 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-['Outfit'] group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-[11px] text-amber-400/80 font-mono">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="w-3 h-3 hidden lg:inline-block ml-auto text-slate-600" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
