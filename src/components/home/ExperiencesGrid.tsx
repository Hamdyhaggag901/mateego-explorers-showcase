import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const tiles = [
  { title: "Nile Journeys", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600" },
  { title: "Desert & Oasis", image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=600" },
  { title: "Ancient Temples", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600" },
];

const bottomTiles = [
  { title: "Once in a Lifetime", image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=800" },
  { title: "Cultural Immersion", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600" },
];

const ExperiencesGrid = () => (
  <FadeInSection>
    <section className="section-padding bg-off-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="label-caps block mb-3">What We Offer</span>
          <h2 className="section-title">
            Extraordinary<br />Experiences
          </h2>
        </div>

        {/* Top row — 3 equal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {tiles.map((t, i) => (
            <Link
              key={i}
              to="/experiences"
              className="group relative h-[280px] md:h-[340px] overflow-hidden card-image-hover"
            >
              <img src={t.image} alt={t.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="label-caps text-gold block mb-1">Experience</span>
                <h3 className="font-heading text-[26px] text-white">{t.title}</h3>
                <span className="gold-text-link opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 block">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom row — 60/40 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {bottomTiles.map((t, i) => (
            <Link
              key={i}
              to="/experiences"
              className={`group relative h-[300px] md:h-[380px] overflow-hidden card-image-hover ${
                i === 0 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <img src={t.image} alt={t.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="label-caps text-gold block mb-1">Experience</span>
                <h3 className="font-heading text-[26px] text-white">{t.title}</h3>
                <span className="gold-text-link opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 block">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default ExperiencesGrid;
