import React, { useState, useMemo } from 'react';
import { Car, CarCategory } from '../types';
import { CARS_DATA } from '../data/carsData';
import { 
  Users, 
  Fuel, 
  Gauge, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  Check, 
  Star, 
  SlidersHorizontal,
  ArrowRight,
  Luggage,
  Compass
} from 'lucide-react';

interface FleetShowcaseProps {
  onSelectCar: (car: Car) => void;
  selectedCategory?: CarCategory;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ onSelectCar }) => {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory>('All');
  const [transmissionFilter, setTransmissionFilter] = useState<'All' | 'Automatic' | 'Manual'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

  const categories: CarCategory[] = ['All', 'Hatchbacks', 'Sedans', 'SUVs & MUVs', 'Luxury & Adventure'];

  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Category filter
      if (selectedCategory !== 'All' && car.category !== selectedCategory) {
        return false;
      }
      // Transmission filter
      if (transmissionFilter !== 'All' && car.transmission !== transmissionFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = car.name.toLowerCase().includes(query);
        const matchesBrand = car.brand.toLowerCase().includes(query);
        const matchesCategory = car.category.toLowerCase().includes(query);
        const matchesFeature = car.features.some(f => f.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesFeature) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.dailyRate - b.dailyRate;
      if (sortBy === 'price-desc') return b.dailyRate - a.dailyRate;
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });
  }, [selectedCategory, transmissionFilter, searchQuery, sortBy]);

  return (
    <section id="fleet" className="py-20 relative bg-[#09090b]">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanitized & GPS-Protected Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
              Explore Our <span className="gold-gradient-text">Premier Fleet</span>
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
              From the rugged Mahindra Thar 4x4 for Netarhat trails to the ultra-comfortable Toyota Innova Crysta for family tours. Every car includes <strong className="text-white">Unlimited Kilometers</strong>.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-3 shrink-0">
            <div className="text-center px-3 border-r border-white/10">
              <div className="text-xl font-bold text-amber-400 font-mono">100%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Unlimited KMs</div>
            </div>
            <div className="text-center px-3 border-r border-white/10">
              <div className="text-xl font-bold text-white font-mono">27-Pt</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Safety Inspected</div>
            </div>
            <div className="text-center px-3">
              <div className="text-xl font-bold text-emerald-400 font-mono">₹0</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">FastKYC Deposit</div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#121218]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 mb-10 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Right side controls: Transmission + Search + Sorter */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
              {/* Transmission Toggle */}
              <div className="flex items-center bg-[#181824] p-1 rounded-xl border border-white/10 text-xs">
                {(['All', 'Automatic', 'Manual'] as const).map((trans) => (
                  <button
                    key={trans}
                    onClick={() => setTransmissionFilter(trans)}
                    className={`px-3 py-1 rounded-lg transition-all font-medium cursor-pointer ${
                      transmissionFilter === trans
                        ? 'bg-amber-400/20 text-amber-300 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {trans}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative min-w-[200px] flex-1 sm:flex-initial">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search model, brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#181824] border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
                />
              </div>

              {/* Price Sorter */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#181824] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-16 bg-white/[0.02] rounded-3xl border border-white/5">
            <Compass className="w-12 h-12 text-amber-400 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-bold text-white mb-1">No vehicles matched your criteria</h3>
            <p className="text-sm text-slate-400 mb-4">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setTransmissionFilter('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="group relative rounded-3xl bg-[#111116] border border-white/10 overflow-hidden hover:border-amber-400/40 transition-all duration-300 flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.15)]"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gradient-to-b from-[#1c1c28] to-[#111116]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    {car.badge ? (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                        {car.badge}
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
                        {car.category}
                      </span>
                    )}

                    {/* Rating badge */}
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-bold text-amber-300 border border-amber-400/20">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{car.rating}</span>
                      <span className="text-[10px] text-slate-400">({car.tripsCount})</span>
                    </div>
                  </div>

                  {/* Bottom Image Spec Ribbon */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-400/30 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Unlimited KMs
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                      Deposit: ₹{car.securityDeposit.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Brand & Subtitle */}
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-1">
                      <span>{car.brand}</span>
                      <span className="font-mono text-slate-300">{car.mileage}</span>
                    </div>

                    {/* Car Name */}
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-['Outfit']">
                      {car.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {car.subtitle}
                    </p>

                    {/* Key Specs Pills Grid */}
                    <div className="grid grid-cols-3 gap-2 my-4 py-3 border-y border-white/10 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>{car.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-amber-400" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-amber-400" />
                        <span>{car.fuel}</span>
                      </div>
                    </div>

                    {/* Highlighted Feature tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {car.features.slice(0, 2).map((feat, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5 flex items-center gap-1"
                        >
                          <Check className="w-2.5 h-2.5 text-amber-400" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Daily Rate</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-white font-mono">
                          ₹{car.dailyRate.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400 font-normal">/day</span>
                      </div>
                      <div className="text-[10px] text-amber-400/90 font-mono">
                        (or ₹{car.hourlyRate}/hr)
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectCar(car)}
                      className="gold-shimmer-btn px-5 py-2.5 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
