import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { DYNAMIC_AUTO_INFO, SERVICES_LIST, formatNgn } from '../data/businessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultServiceId }) => {
  const [selectedService, setSelectedService] = useState<string>(defaultServiceId || 'diagnostics');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [vehicle, setVehicle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const serviceObj = SERVICES_LIST.find(s => s.id === selectedService);
  const serviceName = serviceObj ? serviceObj.name : selectedService;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = `*New Inspection Booking Request*\n- Customer: ${name}\n- Phone: ${phone}\n- Service: ${serviceName}\n- Vehicle: ${vehicle || 'Not specified'}\n- Date: ${date || 'Earliest available'}\n\nPlease confirm booking at Dynamic Auto & Tyre Isolo.`;
    return `https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white border border-zinc-200 rounded-xl max-w-md w-full overflow-hidden shadow-xl relative text-zinc-900"
      >
        <div className="p-5 border-b border-zinc-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block">
              Quick Reservation
            </span>
            <h3 className="text-base font-bold text-zinc-900">
              Book Workshop Inspection
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <div>
              <h4 className="text-base font-bold text-zinc-900">
                Reservation Details Prepared
              </h4>
              <p className="text-xs text-zinc-600 mt-1">
                Click below to send your structured booking directly to our workshop manager on WhatsApp.
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-xs font-bold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                Send via WhatsApp Desk
              </a>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="w-full py-2 text-xs font-semibold text-zinc-600 bg-zinc-100 hover:bg-zinc-200 rounded-md transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-xs">
            <div>
              <label className="block font-semibold text-zinc-700 mb-1">
                Select Service *
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 text-xs text-zinc-900 rounded p-2 outline-none font-medium cursor-pointer"
              >
                {SERVICES_LIST.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({formatNgn(s.estimatedPriceNgn)})
                  </option>
                ))}
                <option value="tyre-fitting">Tyre Mounting &amp; Wheel Alignment</option>
                <option value="general">General Vehicle Inspection</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-zinc-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 text-xs text-zinc-900 rounded p-2 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-zinc-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0803 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 text-xs text-zinc-900 rounded p-2 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-zinc-700 mb-1">
                Vehicle Model &amp; Year
              </label>
              <input
                type="text"
                placeholder="e.g. 2018 Toyota Highlander"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 text-xs text-zinc-900 rounded p-2 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500 text-xs text-zinc-900 rounded p-2 outline-none cursor-pointer"
              />
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 text-xs font-semibold text-zinc-600 bg-zinc-100 hover:bg-zinc-200 rounded transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Details</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
