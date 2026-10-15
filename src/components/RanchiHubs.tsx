import React, { useState } from 'react';
import { RANCHI_HUBS } from '../data/hubsData';
import { HubLocation } from '../types';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Plane, 
  Building2, 
  ShieldCheck, 
  Navigation, 
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface RanchiHubsProps {
  onSelectHubForBooking: (hubName: string) => void;
}

export const RanchiHubs: React.FC<RanchiHubsProps> = ({ onSelectHubForBooking }) => {
  const [selectedHub, setSelectedHub] = useState<HubLocation>(RANCHI_HUBS[0]);

  return (
    <section id="ranchi-hubs" className="py-24 relative bg-[#09090b]">
      {/* Decorative ambient blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Strategic City & Airport Touchpoints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Our Ranchi <span className="gold-gradient-text">Pickup & Drop Hubs</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Collect your car directly from Birsa Munda Airport (IXR), major transit points, or request doorstep delivery anywhere across Ranchi within 45 minutes.
          </p>
        </div>

        {/* Hubs Grid & Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Hubs Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {RANCHI_HUBS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#181824] border-amber-400/60 shadow-[0_0_20px_rgba(212,175,55,0.18)]'
                      : 'bg-[#111116] border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 font-bold'
                          : 'bg-white/5 text-amber-400'
                      }`}
                    >
                      {hub.isAirport ? <Plane className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white font-['Outfit']">{hub.name}</h4>
                        {hub.isAirport && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-bold">
                            Airport VIP
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{hub.address}</p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Selected Hub Feature Display Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#121218] border border-amber-400/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Tag & Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
                  {selectedHub.tag}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Handover Hub
                </span>
              </div>

              {/* Title & Details */}
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] mb-3">
                {selectedHub.name}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div>
                    <strong className="text-white">Full Address: </strong>
                    <span>{selectedHub.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <Navigation className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div>
                    <strong className="text-white">Landmark: </strong>
                    <span>{selectedHub.landmark}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white">Operational Hours: </strong>
                    <span className="text-amber-300 font-mono">{selectedHub.timing}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white">Station Hotline: </strong>
                    <a href={`tel:${selectedHub.phone}`} className="text-amber-400 hover:underline font-mono">
                      {selectedHub.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Features info box */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                <div className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Handover Highlights at this Hub:</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Instant key collection with digital pre-verified OTP</li>
                  <li>Complimentary airport terminal parking exit ticket provided</li>
                  <li>Clean vehicle exterior and fresh scented interior guarantee</li>
                  <li>Doorstep delivery option available within 15 km radius</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectHubForBooking(selectedHub.name)}
                  className="w-full sm:flex-1 gold-shimmer-btn py-3 px-5 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select {selectedHub.name.split('(')[0]} for Pickup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${selectedHub.phone}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-slate-200 hover:text-white hover:bg-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Station</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
