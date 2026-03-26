import { useState } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";
import JourneyCard from "@/components/JourneyCard";

const filters = ["All", "Private", "Small Group", "Nile Journeys", "Family", "Extensions"];

const journeys = [
  {
    id: "classic-egypt",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700",
    label: "PRIVATE",
    title: "The Classic Egypt",
    description: "Cairo, Luxor, Aswan — the essential Egypt journey.",
    details: "8 Days · Private · Cairo, Luxor, Aswan",
    price: "From $5,800 per person",
    category: "Private",
  },
  {
    id: "nile-in-depth",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700",
    label: "NILE JOURNEY",
    title: "Nile in Depth",
    description: "A comprehensive Nile cruise with exclusive temple visits.",
    details: "10 Days · Small Group · Nile Cruise + Temples",
    price: "From $6,400 per person",
    category: "Small Group",
  },
  {
    id: "egypt-desert",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=700",
    label: "PRIVATE",
    title: "Egypt & the Desert",
    description: "White Desert, Siwa Oasis and the best of ancient Egypt.",
    details: "12 Days · Private · White Desert + Siwa Oasis",
    price: "From $8,200 per person",
    category: "Private",
  },
  {
    id: "luxury-nile",
    image: "https://images.unsplash.com/photo-1548017787-5b6b537bff8f?w=700",
    label: "BOUTIQUE",
    title: "Luxury Nile Cruise",
    description: "Boutique dahabiya sailing from Aswan to Luxor.",
    details: "7 Days · Boutique Dahabiya · Aswan to Luxor",
    price: "From $7,500 per person",
    category: "Nile Journeys",
  },
  {
    id: "family-journey",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=700",
    label: "FAMILY",
    title: "Family Journey",
    description: "Egypt made magical for all ages — discovery, fun, and wonder.",
    details: "9 Days · Family · Kid-friendly Egypt",
    price: "From $9,000 per person",
    category: "Family",
  },
  {
    id: "egypt-vip",
    image: "https://images.unsplash.com/photo-1562600430-c4c0a48e7fbb?w=700",
    label: "ONCE IN A LIFETIME",
    title: "Egypt Uncovered VIP",
    description: "The ultimate private journey with exclusive behind-the-scenes access.",
    details: "14 Days · VIP Private · Full Egypt + Private Access",
    price: "From $12,500 per person",
    category: "Private",
  },
];

const Journeys = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? journeys : journeys.filter((j) => j.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1800)" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">Our Journeys</h1>
          <p className="text-white/80 text-lg">Every itinerary is a story. Find yours.</p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-sand">
        <div className="section-container py-4 flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`label-tag px-4 py-2 transition-colors ${
                active === f
                  ? "bg-gold text-white"
                  : "text-foreground hover:text-gold"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((j) => (
                <JourneyCard
                  key={j.id}
                  image={j.image}
                  label={j.label}
                  title={j.title}
                  description={j.description}
                  details={j.details}
                  price={j.price}
                  link={`/journeys/${j.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Journeys;
