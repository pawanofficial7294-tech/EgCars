import React, { useState } from 'react';
import egLogo from '../assets/EG.png';
import { 
  X, 
  Car, 
  Coins, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Smartphone, 
  Send,
  HelpCircle,
  Building
} from 'lucide-react';

interface HostCarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostCarModal: React.FC<HostCarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [carModel, setCarModel] = useState('Mahindra Thar');
  const [carYear, setCarYear] = useState('2023');
  const [daysPerMonth, setDaysPerMonth] = useState(18);
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerLocation, setOwnerLocation] = useState('Lalpur, Ranchi');
  const [submitted, setSubmitted] = useState(false);

  const earningsRates: Record<string, number> = {
    'Mahindra Thar': 2600,
    'Toyota Innova Crysta': 2300,
    'Hyundai Creta': 1800,
    'Maruti Swift': 1050,
    'Toyota Fortuner': 3800,
    'Other Car / SUV': 1500
  };

  const dailyPayout = earningsRates[carModel] || 1500;
  const monthlyEarnings = dailyPayout * daysPerMonth;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = `*EG CARS RANCHI - HOST PARTNER INQUIRY*
---------------------------------------
Hello EG Cars Team, I would like to list my car on your Ranchi rental fleet.
*Car Model:* ${carModel} (${carYear})
*Available Days/Month:* ${daysPerMonth} days
*Estimated Monthly Earning:* ₹${monthlyEarnings.toLocaleString()}
*Owner Name:* ${ownerName || 'Car Owner'}
*Phone:* ${ownerPhone || 'Provided on chat'}
*Location in Ranchi:* ${ownerLocation}

Please guide me on onboarding, GPS device installation, and documentation.`;
    window.open(`https://wa.me/919127088990?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-[#111116] border border-amber-400/30 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#161622] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-black/60 border border-amber-400/30 p-1 flex items-center justify-center">
              <img src={egLogo} alt="EG Cars" className="h-full w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                List Your Car on EG Cars
              </h3>
              <p className="text-[11px] text-slate-400">Turn your idle car into ₹35,000 – ₹70,000/month passive income</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-2">
              Inquiry Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mb-6">
              Our Ranchi fleet onboarding manager will contact you at <strong>{ownerPhone || '+91 91270...'}</strong> within 3 business hours to schedule a complimentary vehicle inspection and GPS installation.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleWhatsAppInquiry}
                className="gold-shimmer-btn py-2.5 px-5 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                Instant WhatsApp Chat
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-5 rounded-xl bg-white/10 text-white font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-6">
            {/* Earnings Calculator Widget */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-950/20 via-[#181824] to-[#14141e] border border-amber-400/20 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Coins className="w-4 h-4" />
                  Monthly Earnings Calculator
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Net Payout to Host</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Select Your Vehicle</label>
                  <select
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="w-full bg-[#111116] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Mahindra Thar">Mahindra Thar 4x4</option>
                    <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                    <option value="Hyundai Creta">Hyundai Creta / Seltos</option>
                    <option value="Maruti Swift">Maruti Swift / Baleno / Altroz</option>
                    <option value="Toyota Fortuner">Toyota Fortuner / XUV700</option>
                    <option value="Other Car / SUV">Other Car / Hatchback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Days Hosted per Month: <span className="text-amber-400 font-bold">{daysPerMonth} Days</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="28"
                    value={daysPerMonth}
                    onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer mt-2"
                  />
                </div>
              </div>

              {/* Earnings Result Banner */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Estimated Monthly Income</span>
                  <span className="text-[10px] text-slate-500">Transferred weekly via direct bank NEFT/UPI</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                  ₹{monthlyEarnings.toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal">/mo</span>
                </div>
              </div>
            </div>

            {/* Host Safety Guarantees */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Full GPS Tracking</div>
                <div className="text-[9px] text-slate-400">Live 24x7 Geo-fencing</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Verified Renters</div>
                <div className="text-[9px] text-slate-400">Aadhaar + DL checked</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <Sparkles className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Free Detailing</div>
                <div className="text-[9px] text-slate-400">Returned spotless</div>
              </div>
            </div>

            {/* Host Contact Form */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full bg-[#181824] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number *"
                  required
                  value={ownerPhone}
                  onChange={(e) => setOwnerPhone(e.target.value)}
                  className="w-full bg-[#181824] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Registration Year (e.g. 2022 / 2023)"
                  value={carYear}
                  onChange={(e) => setCarYear(e.target.value)}
                  className="w-full bg-[#181824] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="text"
                  placeholder="Location in Ranchi (e.g. Kanke, Lalpur, Harmu)"
                  value={ownerLocation}
                  onChange={(e) => setOwnerLocation(e.target.value)}
                  className="w-full bg-[#181824] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 gold-shimmer-btn py-3 px-4 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Submit Car for Onboarding
              </button>
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="py-3 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp Partner Desk</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
