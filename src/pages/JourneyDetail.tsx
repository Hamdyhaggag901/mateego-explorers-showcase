import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, Users, MapPin, DollarSign, Check, X, MessageCircle, Sunrise, Ship, Landmark, Camera } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const itinerary = [
  { day: 1, title: "Arrive in Cairo", desc: "Private airport transfer. Evening welcome dinner at a rooftop restaurant overlooking the Pyramids." },
  { day: 2, title: "The Great Pyramids & Sphinx", desc: "Private guided tour of Giza with an Egyptologist. Afternoon visit to the Grand Egyptian Museum." },
  { day: 3, title: "Old Cairo & Khan el-Khalili", desc: "Explore Coptic Cairo, the Citadel, and the legendary Khan el-Khalili bazaar with a local guide." },
  { day: 4, title: "Fly to Aswan", desc: "Morning flight. Afternoon felucca sailing to Elephantine Island and Nubian village visit." },
  { day: 5, title: "Abu Simbel Excursion", desc: "Private dawn excursion to the monumental temples of Ramses II at Abu Simbel." },
  { day: 6, title: "Board the Dahabiya", desc: "Embark on your boutique sailing vessel. Afternoon visit to Kom Ombo Temple." },
  { day: 7, title: "Edfu Temple", desc: "Morning visit to the best-preserved temple in Egypt. Afternoon sailing through the Nile valley." },
  { day: 8, title: "Luxor West Bank", desc: "Valley of the Kings, Temple of Hatshepsut, and Colossi of Memnon — all with private access." },
  { day: 9, title: "Karnak & Luxor Temples", desc: "Morning at the vast Karnak complex. Evening sound and light show at Luxor Temple." },
  { day: 10, title: "Departure", desc: "Private transfer to Luxor airport. Optional hot air balloon at dawn (additional cost)." },
];

const highlights = [
  { icon: Sunrise, text: "Private dawn visit to Abu Simbel" },
  { icon: Ship, text: "Boutique dahabiya Nile cruise" },
  { icon: Landmark, text: "Private access to Valley of the Kings" },
  { icon: Camera, text: "Grand Egyptian Museum VIP tour" },
];

const photoGallery = [
  "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600",
  "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600",
  "https://images.unsplash.com/photo-1562600430-c4c0a48e7fbb?w=600",
  "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=600",
  "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=600",
];

const JourneyDetail = () => {
  const { slug } = useParams();
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1800)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 section-container pb-16">
          <span className="label-caps block mb-3">Nile Journey</span>
          <h1 className="font-heading text-4xl md:text-[64px] text-white font-light leading-[1.0]">
            Nile in Depth
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-off-white border-b border-sand">
        <div className="section-container py-3">
          <p className="font-body text-[11px] text-text-muted uppercase tracking-[0.15em]">
            <Link to="/journeys" className="hover:text-gold transition-colors">Journeys</Link> / Nile in Depth
          </p>
        </div>
      </div>

      {/* Overview bar */}
      <section className="bg-white border-b border-sand">
        <div className="section-container py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: CalendarDays, label: "10 Days" },
            { icon: Users, label: "Max 10 Guests" },
            { icon: MapPin, label: "Aswan → Luxor" },
            { icon: DollarSign, label: "From $6,400" },
          ].map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-2 ${
                i < 3 ? "md:border-r md:border-gold/20" : ""
              }`}
            >
              <Icon size={16} className="text-gold" />
              <span className="font-body uppercase text-[11px] tracking-[0.15em] text-text-dark">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
            {/* Main — 70% */}
            <div className="lg:col-span-7">
              <FadeInSection>
                <p className="font-body text-[16px] text-text-muted leading-[1.9] mb-10">
                  This 10-day journey takes you deep into the heart of Egypt's Nile Valley.
                  From the grandeur of Cairo to the serene beauty of a boutique dahabiya cruise,
                  every moment is curated with care — led by expert Egyptologists who bring
                  ancient history to life.
                </p>
              </FadeInSection>

              {/* Highlights */}
              <FadeInSection>
                <div className="mb-12">
                  <span className="label-caps block mb-4">Highlights</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map(({ icon: Icon, text }, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Icon size={18} className="text-gold flex-shrink-0" />
                        <span className="font-body text-[14px] text-text-dark">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Day by Day */}
              <FadeInSection>
                <span className="label-caps block mb-6">Day by Day</span>
                <div className="space-y-0">
                  {itinerary.map((day, i) => (
                    <div
                      key={i}
                      className={`border-l-2 transition-colors ${
                        openDay === i ? "border-gold" : "border-sand"
                      }`}
                    >
                      <button
                        onClick={() => setOpenDay(openDay === i ? null : i)}
                        className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-off-white transition-colors"
                      >
                        <span className="font-body font-medium text-[14px] text-text-dark">
                          Day {day.day}: {day.title}
                        </span>
                        <span className="text-gold text-lg">{openDay === i ? "−" : "+"}</span>
                      </button>
                      {openDay === i && (
                        <div className="px-5 pb-5">
                          <p className="font-body text-[14px] text-text-muted leading-[1.8]">{day.desc}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </FadeInSection>

              {/* Inclusions */}
              <FadeInSection>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <span className="label-caps block mb-4">Included</span>
                    {["All accommodations", "Private Egyptologist guide", "Domestic flights", "All meals on cruise", "Airport transfers", "Entry fees to all sites"].map((item, i) => (
                      <p key={i} className="flex items-center gap-2 font-body text-[14px] text-text-muted mb-2">
                        <Check size={14} className="text-gold" /> {item}
                      </p>
                    ))}
                  </div>
                  <div>
                    <span className="label-caps block mb-4">Not Included</span>
                    {["International flights", "Travel insurance", "Personal expenses", "Optional activities"].map((item, i) => (
                      <p key={i} className="flex items-center gap-2 font-body text-[14px] text-text-muted mb-2">
                        <X size={14} className="text-text-muted" /> {item}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Photo Gallery */}
              <FadeInSection>
                <div className="mt-16">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {photoGallery.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className={`w-full object-cover ${i === 0 ? "col-span-2 row-span-2 h-full" : "h-[180px]"}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Sidebar — 30% */}
            <div className="lg:col-span-3">
              <div className="sticky top-28 bg-off-white p-8">
                <p className="font-heading text-[36px] text-text-dark leading-none">From $6,400</p>
                <p className="font-body text-[12px] text-text-muted mt-1 mb-8">
                  per person, based on double occupancy
                </p>

                <Link to="/plan" className="btn-primary w-full text-center block mb-3">
                  Request This Journey
                </Link>
                <button
                  className="w-full border border-text-dark text-text-dark font-body uppercase text-[11px] tracking-[0.2em] px-6 py-4 hover:bg-text-dark hover:text-white transition-all"
                >
                  Speak to an Expert
                </button>

                <div className="border-t border-sand mt-8 pt-6 space-y-3">
                  <div className="flex justify-between font-body text-[13px]">
                    <span className="text-text-muted">Duration</span>
                    <span className="text-text-dark">10 Days</span>
                  </div>
                  <div className="flex justify-between font-body text-[13px]">
                    <span className="text-text-muted">Group Size</span>
                    <span className="text-text-dark">Max 10</span>
                  </div>
                  <div className="flex justify-between font-body text-[13px]">
                    <span className="text-text-muted">Start City</span>
                    <span className="text-text-dark">Cairo</span>
                  </div>
                  <div className="flex justify-between font-body text-[13px]">
                    <span className="text-text-muted">Difficulty</span>
                    <span className="text-text-dark">Easy</span>
                  </div>
                </div>

                <p className="font-body text-[11px] text-text-muted mt-6">
                  No payment required · 24hr response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JourneyDetail;
