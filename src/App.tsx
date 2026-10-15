import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FleetShowcase } from './components/FleetShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { RoadTripsBanner } from './components/RoadTripsBanner';
import { HowItWorks } from './components/HowItWorks';
import { RanchiHubs } from './components/RanchiHubs';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HostCarModal } from './components/HostCarModal';
import { Car, SearchState } from './types';
import { CARS_DATA } from './data/carsData';

export default function App() {
  // Format default dates (tomorrow and +2 days)
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [searchState, setSearchState] = useState<SearchState>({
    durationType: 'Daily',
    pickupLocation: 'Birsa Munda Airport (IXR)',
    dropoffLocation: 'Birsa Munda Airport (IXR)',
    deliveryType: 'hub',
    doorstepAddress: '',
    startDate: formatDate(tomorrow),
    startTime: '09:00',
    endDate: formatDate(dayAfter),
    endTime: '20:00'
  });

  // Modal states
  const [selectedCarForBooking, setSelectedCarForBooking] = useState<Car | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isListCarModalOpen, setIsListCarModalOpen] = useState(false);

  // Handlers
  const handleOpenBooking = (car?: Car) => {
    if (car) {
      setSelectedCarForBooking(car);
    } else {
      setSelectedCarForBooking(CARS_DATA[0]); // default to flagship Thar
    }
    setIsBookingModalOpen(true);
  };

  const handleFindCars = () => {
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectHub = (hubName: string) => {
    setSearchState((prev) => ({
      ...prev,
      pickupLocation: hubName,
      dropoffLocation: hubName
    }));
  };

  const handleSelectCarForTrip = (car: Car) => {
    setSelectedCarForBooking(car);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-100 flex flex-col font-['Outfit'] selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        onOpenListCar={() => setIsListCarModalOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* Hero Section with Quick Booking Search Widget */}
        <HeroSection
          searchState={searchState}
          setSearchState={setSearchState}
          onFindCars={handleFindCars}
          onSelectHub={handleSelectHub}
        />

        {/* Fleet Showcase & Filtering */}
        <FleetShowcase
          onSelectCar={(car) => handleOpenBooking(car)}
        />

        {/* Why Choose EG Cars Feature Grid */}
        <WhyChooseUs />

        {/* Popular Ranchi Road Trips & Getaways Banner */}
        <RoadTripsBanner
          onSelectCarForTrip={handleSelectCarForTrip}
        />

        {/* How It Works (4-Step Process) */}
        <HowItWorks />

        {/* Ranchi Pickup & Drop Hubs */}
        <RanchiHubs
          onSelectHubForBooking={(hubName) => {
            handleSelectHub(hubName);
            handleFindCars();
          }}
        />

        {/* Customer Testimonials & Trust Stats */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenListCar={() => setIsListCarModalOpen(true)}
      />

      {/* Interactive Booking / Checkout Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        car={selectedCarForBooking}
        searchState={searchState}
      />

      {/* "List Your Car" Host Partner Modal */}
      <HostCarModal
        isOpen={isListCarModalOpen}
        onClose={() => setIsListCarModalOpen(false)}
      />
    </div>
  );
}
