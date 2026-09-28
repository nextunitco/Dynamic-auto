import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Home,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { DYNAMIC_AUTO_INFO, FAQS } from '../data/dynamicAutoData';
import { useNavigation } from '../context/NavigationContext';
import { FacebookBadgeIcon, InstagramBadgeIcon } from '../components/SocialIcons';

export const ContactPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dynamic Auto & Tyre Centre,\n\nName: ${name || 'Customer'}\nPhone: ${telephone || 'Not provided'}\nSubject: ${subject || 'Inquiry'}\nMessage: ${message || 'I would like to inquire about services at Oyemat House, Isolo.'}`
    );
    window.open(`https://wa.me/2349126983699?text=${text}`, '_blank');
  };

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
            <span className="text-[#4883ff] font-semibold">Contact &amp; Location</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-white bg-[#4883ff] px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DYNAMIC AUTO CUSTOMER CARE</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Contact Us &amp; Workshop Location
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              We want to hear from you. Visit our central automotive centre in Isolo, Lagos or get in touch directly via telephone, WhatsApp, or email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Strip with WordPress Elementor Hover Lift */}
      <section className="py-14 bg-white border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Address */}
            <div className="p-6 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl space-y-2 wp-card-hover shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#dddddd] flex items-center justify-center text-[#4883ff] mb-3 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#232323]">
                Workshop Address
              </h3>
              <p className="text-xs text-[#7a7a7a] leading-relaxed">
                Oyemat House, 45 Alhaja Kudirat Adenekan Road, Isolo, Lagos, Nigeria.
              </p>
            </div>

            {/* Operating Hours */}
            <div className="p-6 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl space-y-2 wp-card-hover shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#dddddd] flex items-center justify-center text-[#4883ff] mb-3 shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#232323]">
                Business Hours
              </h3>
              <p className="text-xs text-[#7a7a7a] leading-relaxed">
                Monday – Saturday: 8:00 AM – 6:00 PM<br />
                <span className="font-semibold text-neutral-500">Sunday: Closed</span>
              </p>
            </div>

            {/* Telephone */}
            <div className="p-6 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl space-y-2 wp-card-hover shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#dddddd] flex items-center justify-center text-[#4883ff] mb-3 shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#232323]">
                Telephone Lines
              </h3>
              <div className="text-xs space-y-1">
                <a href={`tel:${DYNAMIC_AUTO_INFO.phonePrimaryRaw}`} className="text-[#232323] hover:text-[#4883ff] font-bold block">
                  {DYNAMIC_AUTO_INFO.phonePrimary}
                </a>
                <a href="tel:+2347034113411" className="text-[#7a7a7a] hover:text-[#4883ff] block">
                  {DYNAMIC_AUTO_INFO.phoneSecondary}
                </a>
              </div>
            </div>

            {/* WhatsApp & Email */}
            <div className="p-6 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl space-y-2 wp-card-hover shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-3 shadow-2xs">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[#232323]">
                WhatsApp &amp; Email
              </h3>
              <div className="text-xs space-y-1">
                <a 
                  href={`https://wa.me/2349126983699?text=${encodeURIComponent("Hello Dynamic Auto, I would like to inquire about services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline font-bold block"
                >
                  WhatsApp: {DYNAMIC_AUTO_INFO.whatsappDisplay}
                </a>
                <a href={`mailto:${DYNAMIC_AUTO_INFO.emailPrimary}`} className="text-[#7a7a7a] hover:text-[#4883ff] block">
                  {DYNAMIC_AUTO_INFO.emailPrimary}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Grid: Map & Talk to Us Form */}
      <section className="py-16 bg-[#f4f4f4] border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Google Map Embed */}
            <div className="lg:col-span-6 bg-white border border-[#dddddd] rounded-2xl overflow-hidden shadow-sm space-y-0 wp-card-hover">
              <div className="p-4.5 border-b border-[#dddddd] flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-[#232323]">
                    Interactive Workshop Map
                  </h3>
                  <p className="text-xs text-[#7a7a7a]">
                    Oyemat House, Isolo, Lagos
                  </p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Oyemat+House+Alhaja+Kudirat+Adenekan+Road+Isolo+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#4883ff] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="h-80 sm:h-96 w-full">
                <iframe
                  title="Dynamic Auto Location at Oyemat House"
                  src={DYNAMIC_AUTO_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Social Channels Callout */}
              <div className="p-4 bg-[#f4f4f4] border-t border-[#dddddd] flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="font-bold text-[#7a7a7a]">Follow Us on Social Media:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={DYNAMIC_AUTO_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#dddddd] hover:border-[#1877F2] text-[#232323] text-xs font-bold transition-all shadow-2xs group"
                    title="Dynamic Auto on Facebook"
                  >
                    <FacebookBadgeIcon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={DYNAMIC_AUTO_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#dddddd] hover:border-[#e1306c] text-[#232323] text-xs font-bold transition-all shadow-2xs group"
                    title="Dynamic Auto on Instagram"
                  >
                    <InstagramBadgeIcon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Talk to Us Form from original site */}
            <div className="lg:col-span-6 bg-white border border-[#dddddd] rounded-2xl p-6 sm:p-8 shadow-sm wp-card-hover">
              <div className="border-b border-[#dddddd] pb-3.5 mb-5">
                <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block">
                  Talk To Us
                </span>
                <h3 className="font-display font-bold text-xl text-[#232323]">
                  Let's Have a Discussion
                </h3>
                <p className="text-xs text-[#7a7a7a] mt-0.5">
                  Send our service managers a direct message for tyre quotes, corporate fleet plans, or general inquiries.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3.5">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#232323]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-[#4a4a4a] max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>! Your message regarding "{subject}" has been delivered to Dynamic Auto &amp; Tyre Centre. We will contact you at <strong>{telephone}</strong>.
                  </p>
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="wp-btn-shine px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Continue on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setTelephone('');
                        setSubject('');
                        setMessage('');
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[#232323] bg-[#f4f4f4] hover:bg-neutral-200 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#232323] mb-1.5">
                        Your Name <span className="text-[#4883ff]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-1 focus:ring-[#4883ff] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#232323] mb-1.5">
                        Telephone <span className="text-[#4883ff]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0912 698 3699..."
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-1 focus:ring-[#4883ff] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#232323] mb-1.5">
                      Subject <span className="text-[#4883ff]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tyres quote, MOT inquiry, Fleet maintenance..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-1 focus:ring-[#4883ff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#232323] mb-1.5">
                      Your Message <span className="text-[#4883ff]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can Dynamic Auto assist you? Please include car model if applicable..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#f4f4f4] border border-[#dddddd] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#232323] placeholder-[#7a7a7a] focus:outline-none focus:border-[#4883ff] focus:ring-1 focus:ring-[#4883ff] transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="wp-btn-shine w-full sm:flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md shadow-[#4883ff]/30 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
              Help &amp; Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 shadow-xs ${
                    isOpen ? 'border-[#4883ff]' : 'border-[#dddddd]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-bold text-xs sm:text-sm text-[#232323] hover:text-[#4883ff] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#7a7a7a] shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#4883ff]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs text-[#4a4a4a] leading-relaxed border-t border-[#dddddd]/60">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
