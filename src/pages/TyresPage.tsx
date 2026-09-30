import React, { useState, useMemo } from 'react';
import { PageId } from '../components/Navbar';
import { 
  TYRES_CATALOG, 
  TyreProduct, 
  REAL_IMAGES, 
  DYNAMIC_AUTO_INFO, 
  formatNgn,
  createWhatsAppTyreInquiry 
} from '../data/businessData';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Info,
  Layers,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Wrench
} from 'lucide-react';

interface TyresPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (serviceId?: string) => void;
}

export const TyresPage: React.FC<TyresPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [selectedWidth, setSelectedWidth] = useState<string>('all');
  const [selectedAspect, setSelectedAspect] = useState<string>('all');
  const [selectedRim, setSelectedRim] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({});

  // Filter options
  const widths = [195, 205, 215, 225, 235, 265, 275];
  const aspects = [45, 50, 55, 60, 65, 70];
  const rims = [15, 16, 17, 18];
  const brands = ['Michelin', 'Pirelli', 'Bridgestone', 'Continental', 'Dunlop', 'Goodyear'];

  const filteredTyres = useMemo(() => {
    return TYRES_CATALOG.filter((t) => {
      if (selectedWidth !== 'all' && t.width !== Number(selectedWidth)) return false;
      if (selectedAspect !== 'all' && t.aspectRatio !== Number(selectedAspect)) return false;
      if (selectedRim !== 'all' && t.rim !== Number(selectedRim)) return false;
      if (selectedBrand !== 'all' && t.brand !== selectedBrand) return false;
      return true;
    });
  }, [selectedWidth, selectedAspect, selectedRim, selectedBrand]);

  const handleQtyChange = (tyreId: string, qty: number) => {
    setSelectedQuantities(prev => ({
      ...prev,
      [tyreId]: qty
    }));
  };

  const getQty = (tyreId: string) => selectedQuantities[tyreId] || 4;

  const resetFilters = () => {
    setSelectedWidth('all');
    setSelectedAspect('all');
    setSelectedRim('all');
    setSelectedBrand('all');
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-8 pb-10 border-b border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Tyre Showroom &amp; Sizing Centre
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-1 tracking-tight">
              100% Genuine Tyres with Touchless Mounting
            </h1>
            <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
              Every tyre includes free computerized wheel balancing, brand new tubeless valves, and dry nitrogen inflation. Zero counterfeit rubber. Fresh production date codes.
            </p>
          </div>
        </div>
      </section>

      {/* Touchless Mounting Equipment Spotlight featuring Real User Photo */}
      <section className="py-8 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-64 md:h-full min-h-[240px]">
              <img
                src={REAL_IMAGES.mechanicsTeam}
                alt="Dynamic Auto tyre technicians operating the touchless tyre mounting arm"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Rim-Safe Touchless Technology
              </span>
              <h3 className="text-xl font-bold text-zinc-900">
                Pneumatic Leverless Tyre Mounting Machine
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Unlike roadside mechanics who use metal crowbars and hammers that scrape alloy wheels, our workshop uses automated robotic arms that never contact the rim surface.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 text-xs text-zinc-700">
                <div className="p-2.5 rounded bg-zinc-50 border border-zinc-100">
                  <span className="font-bold text-zinc-900 block">Free Mounting</span>
                  <span className="text-[11px] text-zinc-500">Zero alloy scratching</span>
                </div>
                <div className="p-2.5 rounded bg-zinc-50 border border-zinc-100">
                  <span className="font-bold text-zinc-900 block">Digital Balancing</span>
                  <span className="text-[11px] text-zinc-500">Highway smooth</span>
                </div>
                <div className="p-2.5 rounded bg-zinc-50 border border-zinc-100">
                  <span className="font-bold text-zinc-900 block">Nitrogen Gas</span>
                  <span className="text-[11px] text-zinc-500">Stable tire pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Bar */}
      <section className="py-8 bg-zinc-50 border-b border-zinc-200 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-4 sm:p-5 rounded-lg border border-zinc-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  Filter by Size or Brand:
                </span>
              </div>
              <div className="text-xs text-zinc-500">
                Showing <span className="font-bold text-zinc-900">{filteredTyres.length}</span> verified tyres in stock
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {/* Width */}
              <div>
                <label className="block text-zinc-600 font-medium mb-1">Width (mm)</label>
                <select
                  value={selectedWidth}
                  onChange={(e) => setSelectedWidth(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded px-2.5 py-1.5 text-xs text-zinc-800 focus:outline-none focus:border-orange-500"
                >
                  <option value="all">All Widths</option>
                  {widths.map(w => (
                    <option key={w} value={w}>{w} mm</option>
                  ))}
                </select>
              </div>

              {/* Aspect */}
              <div>
                <label className="block text-zinc-600 font-medium mb-1">Profile / Aspect</label>
                <select
                  value={selectedAspect}
                  onChange={(e) => setSelectedAspect(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded px-2.5 py-1.5 text-xs text-zinc-800 focus:outline-none focus:border-orange-500"
                >
                  <option value="all">All Profiles</option>
                  {aspects.map(a => (
                    <option key={a} value={a}>/{a}</option>
                  ))}
                </select>
              </div>

              {/* Rim */}
              <div>
                <label className="block text-zinc-600 font-medium mb-1">Rim Diameter</label>
                <select
                  value={selectedRim}
                  onChange={(e) => setSelectedRim(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded px-2.5 py-1.5 text-xs text-zinc-800 focus:outline-none focus:border-orange-500"
                >
                  <option value="all">All Rims</option>
                  {rims.map(r => (
                    <option key={r} value={r}>R{r}&quot; inch</option>
                  ))}
                </select>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-zinc-600 font-medium mb-1">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded px-2.5 py-1.5 text-xs text-zinc-800 focus:outline-none focus:border-orange-500"
                >
                  <option value="all">All Brands</option>
                  {brands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {(selectedWidth !== 'all' || selectedAspect !== 'all' || selectedRim !== 'all' || selectedBrand !== 'all') && (
              <div className="pt-1 flex items-center justify-between">
                <span className="text-xs text-orange-600 font-medium">
                  Active filters applied
                </span>
                <button
                  onClick={resetFilters}
                  className="text-xs text-zinc-500 hover:text-zinc-900 underline cursor-pointer"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tyre Inventory Cards */}
      <section className="py-12 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {filteredTyres.length === 0 ? (
            <div className="text-center py-16 bg-zinc-50 rounded-xl border border-zinc-200 p-8">
              <p className="text-base font-bold text-zinc-800">
                No tyres match your exact filter combination.
              </p>
              <p className="text-xs text-zinc-500 mt-1 max-w-md mx-auto">
                We carry custom, staggered, and commercial sizes not listed online. Chat with our inventory manager directly.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 text-xs font-semibold text-zinc-800 bg-white border border-zinc-300 rounded hover:bg-zinc-100"
                >
                  Reset Filters
                </button>
                <a
                  href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=Hello%20Dynamic%20Auto,%20I%20am%20looking%20for%20a%20specific%20tyre%20size.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-green-600 rounded hover:bg-green-700"
                >
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTyres.map((tyre) => {
                const qty = getQty(tyre.id);
                const totalPrice = tyre.priceNgn * qty;

                return (
                  <div
                    key={tyre.id}
                    className="bg-white rounded-lg border border-zinc-200 p-5 flex flex-col justify-between hover:border-zinc-300 hover:shadow-xs transition-all"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-extrabold text-zinc-900 tracking-tight text-sm">
                          {tyre.brand}
                        </span>
                        <span className="text-[11px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                          {tyre.type}
                        </span>
                      </div>

                      {/* Main Tyre Size */}
                      <div className="text-2xl font-black text-zinc-900 tracking-tight mb-1">
                        {tyre.size}
                      </div>

                      {/* Model */}
                      <p className="text-xs font-semibold text-zinc-700 mb-3">
                        {tyre.model}
                      </p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-600 py-2 border-y border-zinc-100 mb-4">
                        <div>
                          <span className="text-zinc-400 block">Speed Rating:</span>
                          <span className="font-semibold text-zinc-800">{tyre.speedRating}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 block">Load Index:</span>
                          <span className="font-semibold text-zinc-800">{tyre.loadIndex}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 block">Warranty:</span>
                          <span className="font-semibold text-zinc-800">{tyre.warranty}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 block">Availability:</span>
                          <span className="font-semibold text-emerald-600 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            In Stock Isolo
                          </span>
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="space-y-1.5 mb-4">
                        <span className="text-[11px] font-semibold text-zinc-500 block">
                          Select Quantity:
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {[1, 2, 4].map((count) => (
                            <button
                              key={count}
                              onClick={() => handleQtyChange(tyre.id, count)}
                              className={`py-1 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                                qty === count
                                  ? 'bg-zinc-900 text-white border-zinc-900'
                                  : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'
                              }`}
                            >
                              {count === 1 ? '1 Tyre' : count === 2 ? 'Pair (2)' : 'Set of 4'}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="pt-4 border-t border-zinc-100 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] text-zinc-400 uppercase block">
                            Total for {qty} {qty === 1 ? 'tyre' : 'tyres'}
                          </span>
                          <span className="text-lg font-bold text-zinc-900">
                            {formatNgn(totalPrice)}
                          </span>
                        </div>
                        <span className="text-xs text-zinc-500">
                          ({formatNgn(tyre.priceNgn)} each)
                        </span>
                      </div>

                      <a
                        href={createWhatsAppTyreInquiry(tyre, qty)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Inquire &amp; Reserve via WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Special Size Request Form */}
      <section className="py-12 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Special Orders
              </span>
              <h3 className="text-xl font-bold text-zinc-900 mt-1">
                Don&apos;t See Your Vehicle&apos;s Tyre Size?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                Whether you drive a high-performance sports car, an armored bulletproof vehicle, or a commercial van, we procure rare tyre profiles within 24 hours directly from authorized factory distributors.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a
                href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=Hello%20Dynamic%20Auto,%20I%20need%20a%20custom%20tyre%20size%20quote.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Request Custom Size Quote
              </a>
              <a
                href={`tel:${DYNAMIC_AUTO_INFO.phone}`}
                className="px-5 py-2.5 text-xs font-bold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Workshop Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
