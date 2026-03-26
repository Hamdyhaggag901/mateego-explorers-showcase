import { useState } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const filters = ["All Journeys", "Private", "Small Group", "Nile", "Family", "Extensions"];

const journeys = [
  {
    id: "classic-egypt",
    num: "01",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700",
    badge: "PRIVATE",
    title: "The Classic Egypt",
    description: "Cairo, Luxor, Aswan — the essential Egypt journey for first-time visitors seeking private, guided discovery.",
    details: "8 Days · Cairo · Luxor · Aswan",
    price: "From $5,800 per person",
    category: "Private",
  },
  {
    id: "nile-in-depth",
    num: "02",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700",
    badge: "SMALL GROUP",
    title: "Nile in Depth",
    description: "A comprehensive Nile cruise with exclusive temple visits and expert Egyptologist commentary throughout.",
    details: "10 Days · Nile Cruise · Temples",
    price: "From $6,400 per person",
    category: "Small Group",
  },
  {
    id: "egypt-desert",
    num: "03",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=700",
    badge: "PRIVATE",
    title: "Egypt & the Desert",
    description: "White Desert, Siwa Oasis and the best of ancient Egypt combined in one unforgettable private journey.",
    details: "12 Days · White Desert · Siwa Oasis",
    price: "From $8,200 per person",
    category: "Private",
  },
  {
    id: "luxury-nile",
    num: "04",
    image: "https://images.unsplash.com/photo-1548017787-5b6b537bff8f?w=700",
    badge: "NILE",
    title: "Luxury Nile Cruise",
    description: "Boutique dahabiya sailing from Aswan to Luxor — intimate, slow travel on the river of kings.",
    details: "7 Days · Dahabiya · Aswan to Luxor",
    price: "From $7,500 per person",
    category: "Nile",
  },
  {
    id: "family-journey",
    num: "05",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=700",
    badge: "FAMILY",
    title: "Family Journey",
    description: "Egypt made magical for all ages — discovery, fun, and wonder designed for families.",
    details: "9 Days · Family · Kid-Friendly",
    price: "From $9,000 per person",
    category: "Family",
  },
  {
    id: "egypt-vip",
    num: "06",
    image: "https://images.unsplash.com/photo-1562600430-c4c0a48e7fbb?w=700",
    badge: "VIP",
    title: "Egypt Uncovered VIP",
    description: "The ultimate private journey with exclusive behind-the-scenes access to Egypt's greatest treasures.",
    details: "14 Days · VIP Private · Full Egypt",
    price: "From $12,500 per person",
    category: "Private",
  },
];

const Journeys = () => {
  const [active, setActive] = useState("All Journeys");
  const filtered = active === "All Journeys" ? journeys : journeys.filter((j) => j.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1800)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 section-container pb-16">
          <span className="label-caps block mb-3">Our Journeys</span>
          <h1 className="font-heading text-5xl md:text-[72px] text-white font-light leading-[1.0]">
            Find Your<br />Perfect Journey
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-sand sticky top-0 z-40">
        <div className="section-container py-4 flex flex-wrap gap-6 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-body uppercase text-[11px] tracking-[0.15em] pb-1 transition-all border-b-2 ${
                active === f
                  ? "border-gold text-gold"
                  : "border-transparent text-text-muted hover:text-text-dark"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filtered.map((j) => (
                <Link
                  key={j.id}
                  to={`/journeys/${j.id}`}
                  className="group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-[280px] md:h-[320px] mb-6">
                    <img
                      src={j.image}
                      alt={j.title}
                      className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 label-caps bg-gold/90 text-white px-3 py-1 text-[10px]">
                      {j.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-1">
                    <span className="font-heading text-[13px] text-gold">{j.num}</span>
                    <h3 className="font-heading text-[30px] text-text-dark leading-tight mt-1 mb-2">
                      {j.title}
                    </h3>
                    <p className="font-body text-[15px] text-text-muted mb-3">{j.description}</p>
                    <p className="label-caps text-[10px] text-gold mb-2">{j.details}</p>
                    <p className="font-body text-[15px] text-text-dark mb-3">{j.price}</p>
                    <span className="gold-text-link">View Journey →</span>
                    <div className="h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500 mt-6" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Journeys;
