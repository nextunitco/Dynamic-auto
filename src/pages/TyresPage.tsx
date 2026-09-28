import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Disc, 
  CheckCircle2, 
  ArrowRight, 
  Tag, 
  Copy, 
  Check, 
  Home,
  ChevronRight,
  Sparkles,
  Percent,
  Search
} from 'lucide-react';
import { TYRE_BRANDS, PROMO_OFFERS, DYNAMIC_AUTO_INFO } from '../data/dynamicAutoData';
import { useNavigation } from '../context/NavigationContext';

interface TyresPageProps {
  onOpenBooking: (service?: string, promoCode?: string) => void;
}

export const TyresPage: React.FC<TyresPageProps> = ({ onOpenBooking }) => {
  const { navigateTo } = useNavigation();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedBrandCategory, setSelectedBrandCategory] = useState('All');

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const filteredBrands = selectedBrandCategory === 'All'
    ? TYRE_BRANDS
    : TYRE_BRANDS.filter(b => b.category.toLowerCase().includes(selectedBrandCategory.toLowerCase()));

  return (
    <div className="text-left space-y-0">
      
      {/* WordPress Page Header with Breadcrumbs */}
      <section className="bg-[#181c24] text-white py-12 lg:py-16 border-b border-[#2a3040] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none automotive-dark-grid opacity-25" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-[#4883ff]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
            <button onClick={() => navigateTo('home')} className="hover:text-white flex items-center gap-1 cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#4883ff] font-semibold">Tyres &amp; Seasonal Offers</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-white bg-[#4883ff] px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GUARANTEED DISTRIBUTOR INVENTORY</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Tyres &amp; Seasonal Promotions
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Nigeria’s trusted destination for guaranteed tyres with Lifetime Mileage Warranty, precision wheel fitting, and seasonal discount vouchers.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Value Pillars from tyres.php */}
      <section className="py-16 bg-white border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
              Guaranteed Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
              Why Buy Tyres from Dynamic Auto?
            </h2>
            <p className="text-xs sm:text-sm text-[#7a7a7a] mt-2">
              Backed by authorized global distributor networks with express workshop and mobile fitting in Lagos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-7 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl space-y-3 wp-card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#edf3ff] flex items-center justify-center text-[#4883ff] mb-4">
                <Disc className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#232323]">
                Unrivalled Choice &amp; Value
              </h3>
              <p className="text-xs text-[#7a7a7a] leading-relaxed">
                We offer one of the widest selections of tyres, catering to every type of vehicle and every budget. Backed by global distributor supply networks, we stock tyres for virtually all makes and models — from passenger cars and SUVs to commercial vans, electric, and hybrid vehicles.
              </p>
            </div>

            <div className="p-7 bg-white border-2 border-[#4883ff] rounded-2xl space-y-3 shadow-md shadow-[#4883ff]/10 wp-card-hover relative">
              <div className="w-12 h-12 rounded-xl bg-[#4883ff] text-white flex items-center justify-center mb-4 shadow-md shadow-[#4883ff]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-[#232323]">
                  Lifetime Mileage Guarantee
                </h3>
                <span className="text-[10px] font-bold text-white bg-[#4883ff] px-2.5 py-0.5 rounded-full animate-wp-pulse-glow">
                  GUARANTEED
                </span>
              </div>
              <p className="text-xs text-[#4a4a4a] leading-relaxed">
                All our new tyres come with a lifetime mileage guarantee, giving you complete peace of mind and protection against manufacturing defects for the legal life of the tyre. Should any fault arise, you will receive a refund based on the remaining tread.
              </p>
            </div>

            <div className="p-7 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl space-y-3 wp-card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#edf3ff] flex items-center justify-center text-[#4883ff] mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#232323]">
                Flexible Fitting Options
              </h3>
              <ul className="text-xs text-[#7a7a7a] space-y-2 leading-relaxed pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4883ff] shrink-0" />
                  <span>Run-flat &amp; reinforced tyres for extra load capacity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4883ff] shrink-0" />
                  <span>EV, hybrid, 4x4, &amp; commercial light truck specs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4883ff] shrink-0" />
                  <span>Express workshop and mobile tyre fitting in Lagos</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured Tyre Brands (WordPress Elementor Showcase) */}
      <section className="py-16 bg-[#f4f4f4] border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
                Direct Distributor Lines
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
                Our Featured Tyre Brands
              </h2>
            </div>
            
            {/* Filter */}
            <div className="flex items-center gap-1.5 bg-white border border-[#dddddd] p-1 rounded-xl">
              {['All', 'Premium', 'Eco'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedBrandCategory(cat)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    selectedBrandCategory === cat
                      ? 'bg-[#4883ff] text-white shadow-xs'
                      : 'text-[#7a7a7a] hover:text-[#232323]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {filteredBrands.map(brand => (
              <div 
                key={brand.name}
                className="bg-white border border-[#dddddd] hover:border-[#4883ff] rounded-2xl p-5 flex flex-col justify-between transition-all group wp-card-hover shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#4883ff] uppercase bg-[#edf3ff] px-2 py-0.5 rounded-full">
                      {brand.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="In Stock" />
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-[#232323] group-hover:text-[#4883ff] transition-colors mt-1">
                    {brand.name}
                  </h3>
                  
                  <p className="text-[11px] text-[#7a7a7a] italic mt-0.5 mb-2">
                    "{brand.tagline}"
                  </p>
                  
                  <p className="text-xs text-[#4a4a4a] leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#dddddd]">
                  <button
                    onClick={() => onOpenBooking(`Tyre (${brand.name})`)}
                    className="w-full py-2 text-xs font-bold text-[#4883ff] hover:bg-[#edf3ff] rounded-xl transition-colors cursor-pointer text-center flex items-center justify-center gap-1 group-hover:translate-x-0.5"
                  >
                    <span>Inquire {brand.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Seasonal Offers & Promo Codes from offers.php */}
      <section className="py-16 bg-white border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
              Vouchers &amp; Promotions
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
              Never Miss a Deal. Browse the Latest Offers.
            </h2>
            <p className="text-xs sm:text-sm text-[#7a7a7a] mt-2">
              Valid promotional discounts for tyres, servicing bundles, and seasonal maintenance. Apply online or quote your code at our Isolo workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROMO_OFFERS.map(offer => (
              <div 
                key={offer.id}
                className="bg-white border border-[#dddddd] hover:border-[#4883ff] rounded-2xl p-6 flex flex-col justify-between transition-all group wp-card-hover shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-[#4883ff] uppercase bg-[#edf3ff] px-2.5 py-0.5 rounded-full">
                      {offer.tag}
                    </span>
                    <span className="text-[11px] text-[#7a7a7a] bg-[#f4f4f4] px-2 py-0.5 rounded-md border border-[#dddddd]">
                      {offer.listingsCount} active listings
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-[#232323] group-hover:text-[#4883ff] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#7a7a7a] leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#dddddd] flex items-center justify-between gap-2">
                  {offer.code ? (
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-[#7a7a7a]">Code:</span>
                      <button
                        onClick={() => handleCopy(offer.code!)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold text-[#4883ff] bg-[#edf3ff] hover:bg-[#4883ff] hover:text-white rounded-lg transition-colors cursor-pointer"
                        title="Click to copy code"
                      >
                        <span>{offer.code}</span>
                        {copiedCode === offer.code ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 opacity-60" />
                        )}
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-[#4883ff]">Online Promo</span>
                  )}

                  <button
                    onClick={() => onOpenBooking(offer.title, offer.code)}
                    className="wp-btn-shine px-3 py-1.5 text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] rounded-lg inline-flex items-center gap-1 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Claim</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lifetime Warranty Banner */}
      <section className="py-14 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#232323] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#4883ff] uppercase tracking-wider block">
                Official Protection
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white">
                Ready to Order Tyres for Your Vehicle?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
                {DYNAMIC_AUTO_INFO.guaranteeText}
              </p>
            </div>
            <button
              onClick={() => onOpenBooking('Tyre')}
              className="wp-btn-shine shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] transition-all cursor-pointer shadow-lg shadow-[#4883ff]/30 active:scale-98"
            >
              Order Tyres Online
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
