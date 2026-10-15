import React from 'react';
import { ROAD_TRIPS } from '../data/tripsData';
import { RoadTrip, Car } from '../types';
import { CARS_DATA } from '../data/carsData';
import { 
  MapPin, 
  Clock, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Car as CarIcon,
  CheckCircle,
  Navigation
} from 'lucide-react';

interface RoadTripsBannerProps {
  onSelectCarForTrip: (car: Car) => void;
}

export const RoadTripsBanner: React.FC<RoadTripsBannerProps> = ({ onSelectCarForTrip }) => {
  const handleTripBook = (trip: RoadTrip) => {
    const matchedCar = CARS_DATA.find((c) => c.id === trip.recommendedCarId) || CARS_DATA[0];
    onSelectCarForTrip(matchedCar);
  };

  return (
    <section id="road-trips" className="py-24 relative bg-[#0d0d12] border-y border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute -top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-amber-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>Curated Self-Drive Itineraries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
              Popular Ranchi <span className="gold-gradient-text">Road Trips & Getaways</span>
            </h2>
            <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
              Ranchi is the gateway to Eastern India's most scenic waterfalls, hairpin valley passes, and hill stations. Explore our handpicked routes with recommended vehicles.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-amber-400 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <Sparkles className="w-4 h-4" />
            <span>All rentals include Unlimited Kilometers</span>
          </div>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROAD_TRIPS.map((trip) => (
            <div
              key={trip.id}
              className="group rounded-3xl bg-[#13131c] border border-white/10 overflow-hidden hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.15)]"
            >
              {/* Image & Quick Badges */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131c] via-[#13131c]/30 to-black/50" />

                {/* Distance & Duration Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {trip.distance}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {trip.duration}
                  </span>
                </div>

                {/* Terrain Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-amber-400/20 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                    Terrain: {trip.terrain}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] group-hover:text-amber-300 transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-400/90 mt-1 mb-3">
                    {trip.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {trip.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {trip.routeHighlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Recommended Car & Book CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                      <CarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Recommended Vehicle</div>
                      <div className="text-xs sm:text-sm font-bold text-white font-['Outfit']">
                        {trip.recommendedCarName}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleTripBook(trip)}
                    className="w-full sm:w-auto gold-shimmer-btn px-4 py-2.5 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Rent Car For This Trip</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
