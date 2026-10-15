import React, { useState, useMemo } from 'react';
import egLogo from '../assets/EG.png';
import { Car, SearchState } from '../types';
import confetti from 'canvas-confetti';
import { 
  X, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Send, 
  Clock, 
  CreditCard,
  Tag,
  AlertCircle,
  FileCheck2,
  Users,
  Gauge,
  Fuel
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: Car | null;
  searchState: SearchState;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  car,
  searchState
}) => {
  if (!isOpen || !car) return null;

  // Form states
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userDl, setUserDl] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Add-ons
  const [addInsurance, setAddInsurance] = useState(true); // ₹399/day
  const [addFasttag, setAddFasttag] = useState(false);     // ₹500 flat
  const [addChildSeat, setAddChildSeat] = useState(false); // ₹250 flat

  // Calculate rental duration in days
  const days = useMemo(() => {
    try {
      const start = new Date(searchState.startDate);
      const end = new Date(searchState.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  }, [searchState.startDate, searchState.endDate]);

  // Pricing calculations
  const baseRental = car.dailyRate * days;
  const insuranceFee = addInsurance ? 399 * days : 0;
  const fasttagFee = addFasttag ? 500 : 0;
  const childSeatFee = addChildSeat ? 250 : 0;

  const subtotalBeforeDiscount = baseRental + insuranceFee + fasttagFee + childSeatFee;
  const discountAmount = Math.round(subtotalBeforeDiscount * appliedDiscount);
  const discountedSubtotal = subtotalBeforeDiscount - discountAmount;

  const gstAmount = Math.round(discountedSubtotal * 0.18);
  const securityDeposit = car.securityDeposit;
  const grandTotal = discountedSubtotal + gstAmount + securityDeposit;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'RANCHIFIRST') {
      setAppliedDiscount(0.10); // 10% off
      setCouponMessage('Success! 10% discount applied to your booking.');
    } else if (couponCode.trim().toUpperCase() === 'EGCARS') {
      setAppliedDiscount(0.15); // 15% off
      setCouponMessage('VIP Code Active! 15% discount applied.');
    } else {
      setCouponMessage('Invalid coupon code. Try "RANCHIFIRST" for 10% off.');
    }
  };

  const handleWhatsAppBooking = () => {
    const message = `*EG CARS RANCHI - SELF-DRIVE BOOKING INQUIRY*
---------------------------------------
*Vehicle:* ${car.name} (${car.transmission} | ${car.fuel})
*Rate:* ₹${car.dailyRate}/day (Unlimited KMs)
*Trip Dates:* ${searchState.startDate} (${searchState.startTime}) to ${searchState.endDate} (${searchState.endTime})
*Duration:* ${days} Day(s)
*Pickup Hub:* ${searchState.pickupLocation}
${searchState.deliveryType === 'doorstep' ? `*Doorstep Delivery Address:* ${searchState.doorstepAddress || 'Address to be shared'}` : '*Collection:* Hub Self-Pickup'}

*Add-ons:* ${addInsurance ? 'Comprehensive Insurance Waiver (Yes)' : 'Standard'} ${addFasttag ? '| FastTag ₹500 Preloaded' : ''} ${addChildSeat ? '| Child Seat' : ''}

*Fare Estimate:*
- Base Rental: ₹${baseRental}
- GST (18%): ₹${gstAmount}
- Refundable Security Deposit: ₹${securityDeposit}
*Total Payable:* ₹${grandTotal}

*Renter Details:*
- Name: ${userName || 'Not provided'}
- Mobile: ${userPhone || 'Not provided'}
- DL / Aadhaar: ${userDl || 'To verify on WhatsApp'}

Please confirm availability and booking!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919127088990?text=${encoded}`, '_blank');
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      alert('Please fill in your Name and Mobile Number for KYC confirmation.');
      return;
    }

    setIsSuccess(true);

    // Fire celebration confetti!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-[#111116] border border-amber-400/30 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#161622] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-black/60 border border-amber-400/30 p-1 flex items-center justify-center">
              <img src={egLogo} alt="EG Cars" className="h-full w-auto object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                  Complete Your Booking
                </h3>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-bold">
                  EG Cars Ranchi
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Instant KYC • Zero Hidden Fees • 100% Refundable Deposit</p>
          </div>
        </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-3">
              Booking Reserved Successfully
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] mb-2">
              Get Ready to Drive Your {car.name}!
            </h2>

            <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
              We've received your booking request for <strong>{days} day(s)</strong>. Our Ranchi dispatch manager has locked this vehicle for you at <strong>{searchState.pickupLocation}</strong>.
            </p>

            <div className="bg-[#181824] border border-white/10 rounded-2xl p-4 max-w-md w-full text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between text-slate-400">
                <span>Renter Name:</span>
                <span className="text-white font-semibold">{userName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Contact Phone:</span>
                <span className="text-amber-300 font-mono">{userPhone}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Pickup Location:</span>
                <span className="text-white font-semibold">{searchState.pickupLocation}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Estimated Total:</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <button
                onClick={handleWhatsAppBooking}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Car details & Customer info */}
            <div className="lg:col-span-7 p-6 sm:p-7 border-b lg:border-b-0 lg:border-r border-white/10 space-y-6">
              {/* Selected Car Highlight Banner */}
              <div className="flex gap-4 items-center bg-[#171724] border border-white/10 rounded-2xl p-3.5">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-24 h-16 sm:w-28 sm:h-20 object-cover rounded-xl border border-white/10 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                      {car.category}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                      Unlimited KMs
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white truncate font-['Outfit']">
                    {car.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>{car.seats} Seats</span>
                    <span>•</span>
                    <span>{car.transmission}</span>
                    <span>•</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>
              </div>

              {/* Trip Parameters Summary */}
              <div className="bg-[#151520] border border-white/5 rounded-2xl p-4 text-xs space-y-2.5">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Pickup Location:
                  </span>
                  <span className="font-semibold text-white truncate max-w-[220px]">
                    {searchState.pickupLocation}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Trip Dates:
                  </span>
                  <span className="font-mono text-slate-200">
                    {searchState.startDate} to {searchState.endDate} ({days} Day{days > 1 ? 's' : ''})
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Pickup & Return Time:
                  </span>
                  <span className="font-mono text-slate-200">
                    {searchState.startTime} – {searchState.endTime}
                  </span>
                </div>
              </div>

              {/* Add-ons Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  Optional Trip Protection & Add-ons
                </label>
                <div className="space-y-2">
                  {/* Insurance */}
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/30 cursor-pointer transition-all">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addInsurance}
                        onChange={(e) => setAddInsurance(e.target.checked)}
                        className="rounded border-slate-700 text-amber-400 focus:ring-amber-400"
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">Zero Damage Liability Protection</div>
                        <div className="text-[10px] text-slate-400">Covers minor scratches and collision protection</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      +₹{399 * days}
                    </span>
                  </label>

                  {/* FastTag */}
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/30 cursor-pointer transition-all">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addFasttag}
                        onChange={(e) => setAddFasttag(e.target.checked)}
                        className="rounded border-slate-700 text-amber-400 focus:ring-amber-400"
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">Pre-Loaded FastTag Toll Pass</div>
                        <div className="text-[10px] text-slate-400">Pre-charged with ₹500 balance for toll gates</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      +₹500
                    </span>
                  </label>

                  {/* Child Seat */}
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/30 cursor-pointer transition-all">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addChildSeat}
                        onChange={(e) => setAddChildSeat(e.target.checked)}
                        className="rounded border-slate-700 text-amber-400 focus:ring-amber-400"
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">Infant / Child Safety Seat</div>
                        <div className="text-[10px] text-slate-400">Sanitized ISOFIX compatible booster seat</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300">
                      +₹250
                    </span>
                  </label>
                </div>
              </div>

              {/* Customer KYC Form */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  Renter Details for Instant KYC
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name (as on DL) *"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-[#181824] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp Mobile Number *"
                      required
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full bg-[#181824] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full bg-[#181824] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Driving Licence Number"
                      value={userDl}
                      onChange={(e) => setUserDl(e.target.value)}
                      className="w-full bg-[#181824] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Breakdown & Checkout Action */}
            <div className="lg:col-span-5 p-6 sm:p-7 bg-[#0e0e14] flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span>Fare Summary & Breakdown</span>
                </h4>

                {/* Breakdown List */}
                <div className="space-y-2.5 text-xs pb-4 border-b border-white/10">
                  <div className="flex justify-between text-slate-300">
                    <span>Base Rental ({days} Day{days > 1 ? 's' : ''} × ₹{car.dailyRate})</span>
                    <span className="font-mono text-white">₹{baseRental.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-emerald-400">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Unlimited Kilometers
                    </span>
                    <span className="font-mono font-semibold">FREE (₹0)</span>
                  </div>

                  <div className="flex justify-between text-emerald-400">
                    <span>27-Point Inspection & Sanitization</span>
                    <span className="font-mono font-semibold">FREE (₹0)</span>
                  </div>

                  {addInsurance && (
                    <div className="flex justify-between text-slate-300">
                      <span>Damage Protection Waiver</span>
                      <span className="font-mono text-white">₹{insuranceFee}</span>
                    </div>
                  )}

                  {addFasttag && (
                    <div className="flex justify-between text-slate-300">
                      <span>FastTag Balance Preloaded</span>
                      <span className="font-mono text-white">₹{fasttagFee}</span>
                    </div>
                  )}

                  {addChildSeat && (
                    <div className="flex justify-between text-slate-300">
                      <span>Child Safety Seat</span>
                      <span className="font-mono text-white">₹{childSeatFee}</span>
                    </div>
                  )}

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-amber-300 font-semibold">
                      <span>Coupon Discount ({(appliedDiscount * 100).toFixed(0)}%)</span>
                      <span className="font-mono">-₹{discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-400">
                    <span>Applicable GST (18%)</span>
                    <span className="font-mono text-slate-300">₹{gstAmount}</span>
                  </div>
                </div>

                {/* Refundable Security Deposit Badge */}
                <div className="my-4 p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs">
                  <div className="flex items-center justify-between font-bold text-amber-300 mb-0.5">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Refundable Security Deposit:
                    </span>
                    <span className="font-mono text-sm">₹{securityDeposit.toLocaleString()}</span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    100% refunded to your UPI account within 2 hours of vehicle drop-off.
                  </p>
                </div>

                {/* Coupon Code Input */}
                <form onSubmit={handleApplyCoupon} className="mb-4">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Coupon code (try RANCHIFIRST)"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full bg-[#181824] border border-white/10 rounded-xl pl-8 pr-2 py-2 text-xs text-white uppercase placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {couponMessage && (
                    <div className={`text-[10px] mt-1 ${appliedDiscount > 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {couponMessage}
                    </div>
                  )}
                </form>

                {/* Grand Total */}
                <div className="pt-3 border-t border-white/10 flex items-baseline justify-between mb-6">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Total Payable Now</span>
                    <span className="text-[10px] text-slate-500">(Includes refundable deposit)</span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-white font-mono text-amber-400">
                      ₹{grandTotal.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                {/* Instant Book Confirmation */}
                <button
                  type="button"
                  onClick={handleConfirmBooking}
                  className="w-full gold-shimmer-btn py-3.5 px-4 rounded-xl text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.35)] cursor-pointer active:scale-95 transition-all"
                >
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>Instant Reserve & FastKYC</span>
                </button>

                {/* WhatsApp Direct Booking Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp Direct</span>
                </button>

                <p className="text-[10px] text-center text-slate-500">
                  By clicking reserve, you agree to EG Cars Terms & Policies. No cancellation fees up to 6 hours before pickup.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
