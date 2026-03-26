import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, Users, MapPin, Gauge, Check, X, MessageCircle } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import JourneyCard from "@/components/JourneyCard";

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

const photoStrip = [
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
      <section className="relative h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1800)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 section-container pb-12">
          <span className="label-tag text-gold mb-2 block">NILE JOURNEY</span>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">Nile in Depth</h1>
        </div>
      </section>

      {/* Overview bar */}
      <section className="bg-sand">
        <div className="section-container py-5 flex flex-wrap gap-6 justify-center text-sm">
          <span className="flex items-center gap-2"><CalendarDays size={16} className="text-gold" /> 10 Days</span>
          <span className="flex items-center gap-2"><Users size={16} className="text-gold" /> Max 10 Guests</span>
          <span className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> Aswan → Luxor</span>
          <span className="flex items-center gap-2"><Gauge size={16} className="text-gold" /> Starts from Cairo</span>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <p className="body-muted text-[15px] mb-8">
                  This 10-day journey takes you deep into the heart of Egypt's Nile Valley. From the grandeur of Cairo to the serene beauty of a boutique dahabiya cruise, every moment is curated with care — led by expert Egyptologists who bring ancient history to life.
                </p>
              </FadeInSection>

              <h3 className="font-heading text-2xl mb-6">Day-by-Day Itinerary</h3>

              <div className="space-y-0">
                {itinerary.map((day, i) => (
                  <div key={i} className={`border-l-2 transition-colors ${openDay === i ? "border-gold" : "border-sand"}`}>
                    <button
                      onClick={() => setOpenDay(openDay === i ? null : i)}
                      className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-sand/50 transition-colors"
                    >
                      <span className="font-body font-bold text-sm">
                        Day {day.day}: {day.title}
                      </span>
                      <span className="text-gold text-xl">{openDay === i ? "−" : "+"}</span>
                    </button>
                    {openDay === i && (
                      <div className="px-5 pb-5">
                        <p className="body-muted text-[14px]">{day.desc}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-heading text-xl mb-4">Included</h4>
                  {["All accommodations", "Private Egyptologist guide", "Domestic flights", "All meals on cruise", "Airport transfers", "Entry fees to all sites"].map((item, i) => (
                    <p key={i} className="flex items-center gap-2 text-sm body-muted mb-2">
                      <Check size={14} className="text-gold" /> {item}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-heading text-xl mb-4">Not Included</h4>
                  {["International flights", "Travel insurance", "Personal expenses", "Optional activities"].map((item, i) => (
                    <p key={i} className="flex items-center gap-2 text-sm body-muted mb-2">
                      <X size={14} className="text-muted-foreground" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-champagne p-8">
                <p className="font-heading text-3xl mb-1">$6,400</p>
                <p className="text-sm body-muted mb-6">per person</p>
                <Link to="/contact" className="gold-cta w-full text-center block mb-3">
                  Request This Journey
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-cta-gold w-full text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>

                <div className="mt-6 space-y-3 text-sm body-muted">
                  <p><strong>Duration:</strong> 10 Days</p>
                  <p><strong>Group Size:</strong> Max 10</p>
                  <p><strong>Start City:</strong> Cairo</p>
                  <p><strong>Difficulty:</strong> Easy</p>
                </div>
                <p className="text-xs text-muted-foreground mt-6">
                  We respond within 24 hours · No payment to inquire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="overflow-x-auto">
        <div className="flex min-w-max">
          {photoStrip.map((src, i) => (
            <img key={i} src={src} alt="" className="h-64 w-auto object-cover" loading="lazy" />
          ))}
        </div>
      </section>

      {/* Related */}
      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-title">Related Journeys</h2>
            <div className="gold-divider" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <JourneyCard
                image="https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700"
                label="PRIVATE"
                title="The Classic Egypt"
                description="Cairo, Luxor, Aswan — the essential Egypt journey."
                details="8 Days · Private"
                price="From $5,800 per person"
                link="/journeys/classic-egypt"
              />
              <JourneyCard
                image="https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=700"
                label="PRIVATE"
                title="Egypt & the Desert"
                description="White Desert, Siwa Oasis and the best of ancient Egypt."
                details="12 Days · Private"
                price="From $8,200 per person"
                link="/journeys/egypt-desert"
              />
              <JourneyCard
                image="https://images.unsplash.com/photo-1562600430-c4c0a48e7fbb?w=700"
                label="ONCE IN A LIFETIME"
                title="Egypt Uncovered VIP"
                description="The ultimate private exploration."
                details="14 Days · VIP Private"
                price="From $12,500 per person"
                link="/journeys/egypt-vip"
              />
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default JourneyDetail;
