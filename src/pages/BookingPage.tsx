import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  SERVICES_LIST, 
  ServiceItem, 
  DYNAMIC_AUTO_INFO, 
  formatNgn,
  createWhatsAppBookingLink 
} from '../data/businessData';
import { 
  Car, 
  Check, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  MessageSquare,
  Wrench
} from 'lucide-react';

interface BookingPageProps {
  onNavigate: (page: PageId) => void;
  initialServiceId?: string;
}

interface VehicleClass {
  id: string;
  name: string;
  multiplier: number;
  examples: string;
}

const VEHICLE_CLASSES: VehicleClass[] = [
  { id: 'sedan', name: 'Sedan / Hatchback', multiplier: 1.0, examples: 'Corolla, Civic, Camry, Elantra' },
  { id: 'compact-suv', name: 'Compact SUV / Crossover', multiplier: 1.1, examples: 'RAV4, CR-V, Tucson, RX350' },
  { id: 'full-suv', name: 'Full-Size SUV / Truck', multiplier: 1.25, examples: 'Prado, Land Cruiser, Hilux, Tahoe' },
  { id: 'luxury-euro', name: 'European / German Luxury', multiplier: 1.3, examples: 'Mercedes-Benz, BMW, Audi, Range Rover' },
];

export const BookingPage: React.FC<BookingPageProps> = ({
  onNavigate,
  initialServiceId,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('sedan');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['scheduled-maintenance', 'wheel-alignment']
  );
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('morning');
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [vehicleDetails, setVehicleDetails] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const currentVehicleClass = VEHICLE_CLASSES.find(v => v.id === selectedVehicle) || VEHICLE_CLASSES[0];

  const toggleService = (id: string) => {
    setSelectedServiceIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedServices = SERVICES_LIST.filter(s => selectedServiceIds.includes(s.id));

  const subtotal = selectedServices.reduce((acc, s) => {
    return acc + Math.round(s.estimatedPriceNgn * currentVehicleClass.multiplier);
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !customerName) {
      alert('Please enter your name and phone number.');
      return;
    }
    const ref = `DA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const serviceNames = selectedServices.map(s => s.name).join(', ');
    const slotLabel = timeSlot === 'morning' ? 'Morning (8:30 AM – 11:30 AM)' : timeSlot === 'midday' ? 'Midday (11:30 AM – 2:30 PM)' : 'Afternoon (2:30 PM – 5:30 PM)';
    
    let text = `*New Service Booking Request [${bookingRef || 'Dynamic Auto'}]*\n`;
    text += `👤 *Customer:* ${customerName}\n`;
    text += `📞 *Phone:* ${phone}\n`;
    text += `🚘 *Vehicle:* ${vehicleDetails || currentVehicleClass.name}\n`;
    text += `📅 *Date:* ${date} (${slotLabel})\n`;
    text += `🔧 *Services:* ${serviceNames || 'General Workshop Check'}\n`;
    text += `💰 *Estimated Total:* ${formatNgn(subtotal)}\n`;
    if (notes) text += `📝 *Notes:* ${notes}\n`;
    text += `\nPlease confirm available bay reservation at your Isolo workshop.`;

    return `https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-8 pb-10 border-b border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Service Calculator &amp; Reservation
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-1 tracking-tight">
              Instant Service Cost Estimator
            </h1>
            <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
              Calculate realistic pricing for your vehicle class in Nigerian Naira. Select your required services, choose your preferred time slot, and reserve your workshop bay.
            </p>
          </div>
        </div>
      </section>

      {/* Main Estimator Body */}
      <section className="py-12 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="max-w-xl mx-auto bg-white rounded-xl border border-emerald-200 p-8 shadow-xs text-center space-y-5">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Booking Request Recorded
                </span>
                <h2 className="text-2xl font-bold text-zinc-900 mt-1">
                  Reference: #{bookingRef}
                </h2>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  Thank you, <strong className="text-zinc-900">{customerName}</strong>. Your workshop appointment request for{' '}
                  <strong className="text-zinc-900">{date}</strong> has been logged.
                </p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 text-left border border-zinc-200 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Vehicle Class:</span>
                  <span className="font-semibold text-zinc-800">{currentVehicleClass.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Selected Services:</span>
                  <span className="font-semibold text-zinc-800">{selectedServices.length} service(s)</span>
                </div>
                <div className="flex justify-between border-t border-zinc-200 pt-2 font-bold text-sm">
                  <span className="text-zinc-900">Estimated Total:</span>
                  <span className="text-orange-600">{formatNgn(subtotal)}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 text-xs font-bold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  Forward Booking to WhatsApp Desk
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-2.5 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-md transition-colors cursor-pointer"
                >
                  Calculate Another Estimate
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Selections */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Step 1: Vehicle Platform */}
                <div className="bg-white rounded-lg border border-zinc-200 p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <h3 className="font-bold text-zinc-900 text-base">
                      Select Vehicle Category
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Pricing adjusts based on engine displacement, suspension weight, and fluid capacity.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {VEHICLE_CLASSES.map((vc) => {
                      const isSelected = selectedVehicle === vc.id;
                      return (
                        <button
                          key={vc.id}
                          type="button"
                          onClick={() => setSelectedVehicle(vc.id)}
                          className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-orange-500 bg-orange-50/40 shadow-xs'
                              : 'border-zinc-200 hover:border-zinc-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-zinc-900">
                              {vc.name}
                            </span>
                            {isSelected && <Check className="w-4 h-4 text-orange-600" />}
                          </div>
                          <span className="text-[11px] text-zinc-500 block mt-1">
                            e.g. {vc.examples}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Services Checkboxes */}
                <div className="bg-white rounded-lg border border-zinc-200 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      <h3 className="font-bold text-zinc-900 text-base">
                        Select Needed Services
                      </h3>
                    </div>
                    <span className="text-xs text-zinc-500">
                      {selectedServiceIds.length} selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES_LIST.map((service) => {
                      const isSelected = selectedServiceIds.includes(service.id);
                      const adjustedPrice = Math.round(service.estimatedPriceNgn * currentVehicleClass.multiplier);

                      return (
                        <div
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                            isSelected
                              ? 'border-orange-500 bg-orange-50/30'
                              : 'border-zinc-200 hover:border-zinc-300 bg-white'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'bg-orange-500 border-orange-500 text-white'
                                    : 'border-zinc-300 bg-white'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="font-bold text-xs text-zinc-900">
                                {service.name}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 line-clamp-1 pl-6">
                              {service.summary}
                            </p>
                          </div>

                          <span className="text-xs font-bold text-zinc-900 shrink-0">
                            {formatNgn(adjustedPrice)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Schedule Date & Time Slot */}
                <div className="bg-white rounded-lg border border-zinc-200 p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <h3 className="font-bold text-zinc-900 text-base">
                      Preferred Date &amp; Time
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1.5">
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1.5">
                        Preferred Arrival Window
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-orange-500"
                      >
                        <option value="morning">Morning (8:30 AM – 11:30 AM)</option>
                        <option value="midday">Midday (11:30 AM – 2:30 PM)</option>
                        <option value="afternoon">Afternoon (2:30 PM – 5:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 4: Contact Details */}
                <div className="bg-white rounded-lg border border-zinc-200 p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <h3 className="font-bold text-zinc-900 text-base">
                      Your Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Olumide Johnson"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0803 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1">
                        Vehicle Make, Model &amp; Year
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2017 Lexus RX350"
                        value={vehicleDetails}
                        onChange={(e) => setVehicleDetails(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1">
                        Symptoms or Special Notes
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Steering vibrates at 90 km/h, check brake squeak"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Running Summary Sticky Card */}
              <div className="lg:col-span-4">
                <div className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 sticky top-24 space-y-5">
                  <h4 className="font-bold text-zinc-900 text-sm pb-3 border-b border-zinc-200">
                    Estimate Summary
                  </h4>

                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between text-zinc-600">
                      <span>Vehicle Category:</span>
                      <span className="font-semibold text-zinc-900">{currentVehicleClass.name}</span>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-zinc-200">
                      <span className="text-zinc-500 font-medium block">Selected Items:</span>
                      {selectedServices.length === 0 ? (
                        <p className="text-zinc-400 italic">No services selected yet.</p>
                      ) : (
                        selectedServices.map(s => {
                          const itemPrice = Math.round(s.estimatedPriceNgn * currentVehicleClass.multiplier);
                          return (
                            <div key={s.id} className="flex justify-between items-center text-zinc-700">
                              <span className="truncate pr-2">{s.name}</span>
                              <span className="font-mono font-medium shrink-0">{formatNgn(itemPrice)}</span>
                            </div>
                          );
                        })
                      )}
                    </div>

                    <div className="pt-4 border-t border-zinc-200 flex justify-between items-baseline">
                      <span className="font-bold text-zinc-900 text-sm">Estimated Total:</span>
                      <span className="text-xl font-extrabold text-orange-600">
                        {formatNgn(subtotal)}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-tight">
                      *Includes labor &amp; standard consumables. Itemized quote confirmed upon vehicle check-in.
                    </p>
                  </div>

                  <div className="pt-2 space-y-2.5">
                    <button
                      type="submit"
                      disabled={selectedServiceIds.length === 0}
                      className="w-full py-3 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Reserve Workshop Bay
                    </button>

                    <p className="text-[11px] text-zinc-500 text-center flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Zero cancellation fee · Pay after inspection
                    </p>
                  </div>
                </div>
              </div>

            </form>
          )}
        </div>
      </section>
    </div>
  );
};
