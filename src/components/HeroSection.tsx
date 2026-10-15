import React, { useState } from 'react';
import egLogo from '../assets/EG.png';
import { SearchState, RentalDurationType } from '../types';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Infinity, 
  Zap, 
  ChevronRight, 
  Plane, 
  Building2,
  CheckCircle2,
  CarFront
} from 'lucide-react';

interface HeroSectionProps {
  searchState: SearchState;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
  onFindCars: () => void;
  onSelectHub: (hubName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchState,
  setSearchState,
  onFindCars,
  onSelectHub
}) => {
  const [activeTab, setActiveTab] = useState<RentalDurationType>(searchState.durationType || 'Daily');

  const durationTabs: { type: RentalDurationType; label: string; badge?: string }[] = [
    { type: 'Daily', label: 'Daily Rental', badge: 'Most Popular' },
    { type: 'Hourly', label: 'Hourly Flex', badge: 'Min 4 hrs' },
    { type: 'Weekly', label: 'Weekly Tour', badge: '15% Off' },
    { type: 'Monthly', label: 'Monthly Sub', badge: 'Best Value' }
  ];

  const pickupOptions = [
    { label: 'Birsa Munda Airport (IXR) - Terminal Gate Handover', value: 'Birsa Munda Airport (IXR)', icon: Plane },
    { label: 'Lalpur Central Hub (Circular Road / Nucleus Mall)', value: 'Lalpur Central Hub', icon: Building2 },
    { label: 'Ranchi Railway Junction (Platform 1 Exit)', value: 'Ranchi Railway Junction', icon: Building2 },
    { label: 'Kanke Road & Morabadi Ground Hub', value: 'Kanke Road & Morabadi Hub', icon: Building2 },
    { label: 'Harmu Housing Colony / Argora Bypass', value: 'Harmu Housing Colony', icon: Building2 },
    { label: 'Kantatoli & Namkum Highway Gateway', value: 'Kantatoli & Namkum Gateway', icon: Building2 }
  ];

  const handleTabChange = (tab: RentalDurationType) => {
    setActiveTab(tab);
    setSearchState((prev) => ({ ...prev, durationType: tab }));
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-[#09090b] pointer-events-none">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-600/15 via-yellow-500/10 to-transparent blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-amber-400/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-20 left-10 w-[350px] h-[250px] bg-slate-700/10 blur-[90px] rounded-full pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          
          {/* Prominent EG Cars Emblem */}
          <div className="relative mb-5 group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-amber-600/30 rounded-3xl blur-md group-hover:opacity-100 opacity-70 transition duration-500" />
            <div className="relative rounded-2xl bg-[#09090b]/80 border border-amber-400/30 p-2 sm:p-2.5 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.25)] flex items-center gap-3">
              <img
                src={egLogo}
                alt="EG Cars Premier Self-Drive Ranchi"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_4px_15px_rgba(212,175,55,0.4)]"
              />
            </div>
          </div>

          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)] animate-in fade-in slide-in-from-top-3 duration-500">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
              Ranchi's Highest Rated Self-Drive Rental Platform
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="hidden sm:inline-flex items-center text-xs text-slate-300">
              <span className="text-amber-400 font-bold mr-1">★ 4.94</span> (1,200+ Reviews)
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Outfit'] leading-[1.1] mb-6">
            Experience Ranchi & Beyond with{' '}
            <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.25)]">
              EG Cars
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
            <span className="text-white font-medium">Zero Hidden Fees.</span>{' '}
            <span className="text-amber-300 font-medium">Unlimited Kilometers.</span>{' '}
            <span>Premium Self-Drive Rentals delivered to Airport IXR or right to your doorstep.</span>
          </p>

          {/* Quick Value Props Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-300 mb-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              <Infinity className="w-4 h-4 text-amber-400" />
              <span>Unlimited KMs</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>90-Sec Instant KYC</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Same-Day Deposit Refund</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              <Plane className="w-4 h-4 text-amber-400" />
              <span>Airport VIP Terminal Drop</span>
            </div>
          </div>
        </div>

        {/* Quick Booking Search Widget */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-[#121218]/90 backdrop-blur-2xl border border-white/15 p-4 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.12)]">
            {/* Header Tabs: Hourly / Daily / Weekly / Monthly */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6 overflow-x-auto no-scrollbar">
              {durationTabs.map((tab) => {
                const isActive = activeTab === tab.type;
                return (
                  <button
                    key={tab.type}
                    onClick={() => handleTabChange(tab.type)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          isActive
                            ? 'bg-slate-950/20 text-slate-950'
                            : 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Delivery Mode Toggle */}
              <div className="ml-auto flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 shrink-0">
                <button
                  type="button"
                  onClick={() => setSearchState(prev => ({ ...prev, deliveryType: 'hub' }))}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    searchState.deliveryType === 'hub'
                      ? 'bg-white/15 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Hub Pickup
                </button>
                <button
                  type="button"
                  onClick={() => setSearchState(prev => ({ ...prev, deliveryType: 'doorstep' }))}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    searchState.deliveryType === 'doorstep'
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Doorstep Delivery
                </button>
              </div>
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* Pickup Location Selector */}
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Pickup & Drop Location
                </label>
                <div className="relative">
                  <select
                    value={searchState.pickupLocation}
                    onChange={(e) => {
                      setSearchState((prev) => ({
                        ...prev,
                        pickupLocation: e.target.value,
                        dropoffLocation: e.target.value
                      }));
                      onSelectHub(e.target.value);
                    }}
                    className="w-full bg-[#181824] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all appearance-none cursor-pointer pr-10"
                  >
                    {pickupOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#181824] text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
                </div>
              </div>

              {/* Start Date & Time */}
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Trip Starts
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={searchState.startDate}
                    onChange={(e) => setSearchState((prev) => ({ ...prev, startDate: e.target.value }))}
                    className="w-full bg-[#181824] border border-white/15 rounded-xl px-3 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-all cursor-pointer"
                  />
                  <input
                    type="time"
                    value={searchState.startTime}
                    onChange={(e) => setSearchState((prev) => ({ ...prev, startTime: e.target.value }))}
                    className="w-full bg-[#181824] border border-white/15 rounded-xl px-3 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* End Date & Time */}
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Trip Ends
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={searchState.endDate}
                    onChange={(e) => setSearchState((prev) => ({ ...prev, endDate: e.target.value }))}
                    className="w-full bg-[#181824] border border-white/15 rounded-xl px-3 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-all cursor-pointer"
                  />
                  <input
                    type="time"
                    value={searchState.endTime}
                    onChange={(e) => setSearchState((prev) => ({ ...prev, endTime: e.target.value }))}
                    className="w-full bg-[#181824] border border-white/15 rounded-xl px-3 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Primary CTA Find Cars */}
              <div className="md:col-span-2">
                <button
                  onClick={onFindCars}
                  className="w-full gold-shimmer-btn py-3.5 px-4 rounded-xl text-slate-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <CarFront className="w-4 h-4 fill-slate-950" />
                  <span>Find Cars</span>
                </button>
              </div>
            </div>

            {/* Optional Doorstep Delivery Address Input */}
            {searchState.deliveryType === 'doorstep' && (
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-xs font-medium text-amber-300 shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Doorstep Handover in Ranchi:</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter house / hotel / society address in Ranchi (e.g. Radisson Blu / Kanke Road / Morabadi)"
                  value={searchState.doorstepAddress}
                  onChange={(e) => setSearchState((prev) => ({ ...prev, doorstepAddress: e.target.value }))}
                  className="w-full bg-[#181824] border border-amber-400/30 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            )}

            {/* Bottom highlights ribbon */}
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Security Deposit on FastKYC verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Free cancellation up to 6 hours before pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>24x7 Roadside Assistance across Jharkhand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
