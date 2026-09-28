import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, MessageCircle, ArrowRight, Tag } from 'lucide-react';
import { BOOKING_CATEGORIES, DYNAMIC_AUTO_INFO } from '../data/dynamicAutoData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPhone?: string;
  initialName?: string;
  initialCode?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialPhone,
  initialName,
  initialCode
}) => {
  const [service, setService] = useState('Tyre');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      const found = BOOKING_CATEGORIES.find(c => c.toLowerCase() === initialService.toLowerCase()) 
        || BOOKING_CATEGORIES.find(c => initialService.toLowerCase().includes(c.toLowerCase()));
      setService(found || initialService);
    }
    if (initialPhone) setTelephone(initialPhone);
    if (initialName) setName(initialName);
    if (initialCode) setPromoCode(initialCode);
  }, [initialService, initialPhone, initialName, initialCode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `*Dynamic Auto Service Booking Request*\n\n` +
      `*Service:* ${service}\n` +
      `*Customer:* ${name}\n` +
      `*Telephone:* ${telephone}\n` +
      `*Vehicle:* ${vehicle || 'Not specified'}\n` +
      `*Preferred Date:* ${preferredDate || 'Earliest available'}\n` +
      `*Preferred Time:* ${preferredTime}\n` +
      (promoCode ? `*Promo Code:* ${promoCode}\n` : '') +
      (notes ? `*Notes:* ${notes}\n` : '') +
      `\n_Sent via dynamicauto.com.ng redesign portal_`
    );
    window.open(`https://wa.me/2349126983699?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-[#dddddd] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden text-left relative max-h-[90vh] flex flex-col text-[#232323]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#dddddd] flex items-center justify-between bg-[#f4f4f4]">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#4883ff]" />
              <h3 className="text-lg sm:text-xl font-display font-bold text-[#232323]">
                Book a Service or Tyre Fitting
              </h3>
            </div>
            <p className="text-xs text-[#7a7a7a] mt-0.5">
              Oyemat House, Isolo, Lagos · Direct Workshop Scheduling
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-[#7a7a7a] hover:text-[#232323] hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-display font-bold text-[#232323]">
                Booking Request Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-[#4a4a4a] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>! We have received your booking request for <strong>{service}</strong>. A service advisor from Dynamic Auto &amp; Tyre Centre will confirm your appointment at <strong>{telephone}</strong>.
              </p>

              <div className="p-4 bg-[#f4f4f4] rounded-xl border border-[#dddddd] text-left text-xs text-[#232323] space-y-1.5 max-w-sm mx-auto">
                <div><strong>Service:</strong> {service}</div>
                <div><strong>Date &amp; Window:</strong> {preferredDate || 'Earliest available'} ({preferredTime})</div>
                {vehicle && <div><strong>Vehicle:</strong> {vehicle}</div>}
                {promoCode && <div><strong>Promo Discount:</strong> {promoCode}</div>}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm Instantly via WhatsApp</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-[#232323] bg-[#f4f4f4] hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category selector */}
              <div>
                <label className="block text-xs font-bold text-[#232323] mb-1.5">
                  Select Item / Service <span className="text-[#4883ff]">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2.5 text-sm text-[#232323] focus:outline-none focus:border-[#4883ff] focus:ring-2 focus:ring-[#4883ff]/20 transition-colors cursor-pointer font-medium"
                >
                  {BOOKING_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#232323] mb-1.5">
                    Your Name <span className="text-[#4883ff]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tunde Balogun"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2 text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-2 focus:ring-[#4883ff]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#232323] mb-1.5">
                    Telephone / WhatsApp <span className="text-[#4883ff]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0912 698 3699"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2 text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-2 focus:ring-[#4883ff]/20 transition-colors"
                  />
                </div>
              </div>

              {/* Vehicle & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#232323] mb-1.5">
                    Vehicle Make / Model / Year
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Toyota Camry 2018 or Ford Explorer"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2 text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-2 focus:ring-[#4883ff]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#232323] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2 text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-2 focus:ring-[#4883ff]/20 transition-colors cursor-pointer"
                  />
                </div>
              </div>

              {/* Time window & Promo Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#232323] mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2 text-sm text-[#232323] focus:outline-none focus:border-[#4883ff] focus:ring-2 focus:ring-[#4883ff]/20 transition-colors cursor-pointer font-medium"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="Late Afternoon (3:00 PM - 6:00 PM)">Late Afternoon (3:00 PM - 6:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#232323] mb-1.5">
                    Promo Code (e.g. DYNAMIC26)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="DYNAMIC26"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2 text-sm text-[#4883ff] font-mono font-bold placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-2 focus:ring-[#4883ff]/20 transition-colors"
                    />
                    <Tag className="w-4 h-4 text-[#4883ff] absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Special notes */}
              <div>
                <label className="block text-xs font-bold text-[#232323] mb-1.5">
                  Special Notes or Specific Vehicle Issues
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Steering vibration at 80km/h, need 4 tyres 215/55R17, or battery check..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2 text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-2 focus:ring-[#4883ff]/20 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4883ff]/25 cursor-pointer"
                >
                  <span>Send Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-[#7a7a7a] text-center">
                Need urgent assistance? Call our Isolo workshop directly at{' '}
                <a href={`tel:${DYNAMIC_AUTO_INFO.phonePrimaryRaw}`} className="text-[#4883ff] font-bold underline">
                  {DYNAMIC_AUTO_INFO.phonePrimary}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
