import React from 'react';
import { EgCarsLogo } from './EgCarsLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ArrowUp,
  MessageCircle,
  Globe,
  Share2
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenListCar: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenListCar }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#07070a] text-slate-300 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#171725] via-[#1a1720] to-[#12121a] border border-amber-400/30 p-8 sm:p-10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Ready for the Open Road?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] mt-1">
              Book Your Premium Self-Drive Car in Ranchi Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Enjoy unlimited kilometers, zero hidden fees, and doorstep delivery. Birsa Munda Airport handover available 24/7.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="gold-shimmer-btn py-3 px-6 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Book Car Now
            </button>
            <a
              href="https://wa.me/919127088990?text=Hi%20EG%20Cars%20Ranchi,%20I%20would%20like%20to%20rent%20a%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-600/30 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Dispatch</span>
            </a>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <EgCarsLogo size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              EG Cars is Ranchi's premier self-drive car rental network. Committed to absolute pricing transparency, unlimited kilometers, pristine sanitized vehicles, and rapid digital KYC.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-all"
                aria-label="EG Cars Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-all"
                aria-label="EG Cars Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-all"
                aria-label="EG Cars LinkedIn"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919127088990"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-all"
                aria-label="EG Cars WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">Our Fleet</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#ranchi-hubs" className="hover:text-amber-400 transition-colors">Ranchi Hubs</a>
              </li>
              <li>
                <a href="#road-trips" className="hover:text-amber-400 transition-colors">Outstation Trips</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose EG Cars</a>
              </li>
              <li>
                <button onClick={onOpenListCar} className="hover:text-amber-400 text-left transition-colors cursor-pointer">
                  List Your Car (Partner)
                </button>
              </li>
            </ul>
          </div>

          {/* Top Cars in Fleet */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Popular Rentals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">Mahindra Thar 4x4</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">Toyota Innova Crysta (7-Seater)</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">Hyundai Creta Turbo</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">Maruti Suzuki Swift ZXi</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">Toyota Fortuner 4x4</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition-colors">Honda City ZX</a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Office Address */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Ranchi Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>
                  Circular Road, Near Lalpur Chowk & Kantatoli Flyover Link, Ranchi, Jharkhand 834001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919127088990" className="hover:text-white font-mono text-slate-300">
                  +91 91270 88990 / +91 82100 12345
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:bookings@egcars.in" className="hover:text-white">
                  bookings@egcars.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24x7 Customer Support & Handover</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} EG Cars Ranchi (Jharkhand). All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Deposit Policy</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
