import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What documents are required to rent a self-drive car in Ranchi?',
      a: 'You only need two documents: (1) An original Indian or International Driving Licence (must be at least 1 year old), and (2) An Aadhaar Card, Passport, or Voter ID for address verification. The entire KYC process takes under 90 seconds online via WhatsApp or our web portal.'
    },
    {
      q: 'Is the kilometer limit really unlimited? Are there hidden charges?',
      a: 'Yes, 100% unlimited kilometers! Unlike other rental companies that charge ₹12-18/km after 200 km, EG Cars gives you complete odometer freedom. Drive across Ranchi, Netarhat, Betla National Park, Deoghar, or Jamshedpur without watching the odometer.'
    },
    {
      q: 'How does the security deposit refund work?',
      a: 'We process security deposit refunds immediately upon vehicle handover. Once our representative verifies basic fuel levels and body condition, your refund is triggered directly via UPI (Google Pay / PhonePe / Paytm / Bank transfer) within 2 hours. No 7 to 14 day waiting periods.'
    },
    {
      q: 'Can I pick up or drop off the car at Birsa Munda Airport (IXR)?',
      a: 'Yes! We have an express handover station right at Terminal 1 VIP Parking Bay. Our executive will have the vehicle parked, washed, and ready before your flight lands. We also provide doorstep delivery anywhere in Ranchi (Harmu, Lalpur, Kanke, Morabadi, Dhurwa, etc.).'
    },
    {
      q: 'Can I take the car outstation to Bihar, West Bengal, or Odisha?',
      a: 'Absolutely. All EG Cars commercial vehicles have valid All-India National Permits and valid fitness certificates. You can travel freely across state borders. Any interstate road tax can be paid easily at border RTO counters or online.'
    },
    {
      q: 'What is the fuel policy?',
      a: 'We follow a simple "Like-to-Like" policy: vehicles are handed over with a full tank (or marked level) and should be returned with the same fuel level. If you are in a rush and return with less fuel, we only charge standard petrol pump rates without inflated penalty markups.'
    }
  ];

  return (
    <section className="py-24 relative bg-[#0d0d12] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] tracking-tight">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Everything you need to know about renting a premium self-drive car with EG Cars Ranchi.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#121218] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-['Outfit']">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
