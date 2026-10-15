import React, { useState, useEffect } from 'react';
import { EgCarsLogo } from './EgCarsLogo';
import { Phone, Car, Menu, X, ShieldCheck, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenListCar: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenListCar, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fleet', href: '#fleet' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Ranchi Hubs', href: '#ranchi-hubs' },
    { label: 'Road Trips', href: '#road-trips' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-amber-400/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#09090b]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <EgCarsLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Quick Actions Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {/* 24/7 Support Hotline Button */}
              <a
                href="tel:+919127088990"
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 rounded-full hover:border-amber-400/40 transition-all"
                title="Call 24/7 EG Cars Dispatch"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono text-slate-200">+91 91270 88990</span>
              </a>

              {/* "List Your Car" Button */}
              <button
                onClick={onOpenListCar}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-xl hover:bg-amber-400/20 hover:border-amber-400/60 transition-all flex items-center gap-1.5 group cursor-pointer"
              >
                <Car className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>List Your Car</span>
              </button>

              {/* "Book Now" CTA Button */}
              <button
                onClick={onOpenBooking}
                className="gold-shimmer-btn px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.35)] flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="gold-shimmer-btn px-3 py-1.5 text-xs font-bold text-slate-950 rounded-lg cursor-pointer"
              >
                Book
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg border border-white/10"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#111116]/95 backdrop-blur-xl border border-amber-400/20 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="tel:+919127088990"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-xl"
              >
                <Phone className="w-4 h-4" />
                <span>24/7 Helpline: +91 91270 88990</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenListCar();
                  }}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-center text-slate-200 bg-white/5 border border-white/15 rounded-xl hover:bg-white/10"
                >
                  List Your Car
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 px-3 text-xs font-bold text-center text-slate-950 gold-shimmer-btn rounded-xl"
                >
                  Book Instant
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
