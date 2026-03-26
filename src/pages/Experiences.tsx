import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const experiences = [
  { title: "Nile Journeys", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700", desc: "Boutique dahabiyas and classic river cruises" },
  { title: "Desert & Oasis", image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=700", desc: "Siwa oasis, White Desert, stargazing camps" },
  { title: "Ancient Temples", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=700", desc: "Luxor, Karnak, Abu Simbel and beyond" },
  { title: "Once in a Lifetime", image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=700", desc: "Private tomb openings, balloon at dawn, VIP access" },
  { title: "Cultural Immersion", image: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=700", desc: "Local markets, Nubian villages, craft workshops" },
  { title: "Culinary Journeys", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=700", desc: "Egyptian cuisine, cooking classes, rooftop dinners" },
  { title: "Family Adventures", image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=700", desc: "Egypt made magical for all ages" },
  { title: "Luxury & Wellness", image: "https://images.unsplash.com/photo-1510100703578-f5e1f4f2ac7e?w=700", desc: "Five-star stays, spa retreats, private services" },
];

const layouts = [
  "md:col-span-1", "md:col-span-1", "md:col-span-1",
  "md:col-span-2", "md:col-span-1",
  "md:col-span-1", "md:col-span-2",
  "md:col-span-3",
];

const heights = [
  "h-[280px] md:h-[340px]", "h-[280px] md:h-[340px]", "h-[280px] md:h-[340px]",
  "h-[280px] md:h-[380px]", "h-[280px] md:h-[380px]",
  "h-[280px] md:h-[340px]", "h-[280px] md:h-[340px]",
  "h-[280px] md:h-[300px]",
];

const Experiences = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1510100703578-f5e1f4f2ac7e?w=1800)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 section-container pb-16">
          <span className="label-caps block mb-3">Discover</span>
          <h1 className="font-heading text-5xl md:text-[72px] text-white font-light leading-[1.0]">
            Extraordinary<br />Experiences
          </h1>
        </div>
      </section>

      <FadeInSection>
        <section className="section-padding bg-off-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiences.map((exp, i) => (
                <Link
                  key={i}
                  to="/plan"
                  className={`group relative overflow-hidden card-image-hover ${layouts[i] || ""} ${heights[i] || "h-[340px]"}`}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="label-caps text-gold block mb-1">Experience</span>
                    <h3 className="font-heading text-[26px] text-white mb-1">{exp.title}</h3>
                    <p className="font-body text-[14px] text-white/70">{exp.desc}</p>
                    <span className="gold-text-link opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 block">
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <section
        className="relative flex items-center justify-center py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800)",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-heading text-4xl md:text-[52px] text-white font-light leading-tight mb-6">
            Ready to Experience Egypt?
          </h2>
          <p className="font-body text-[16px] text-white/70 max-w-md mx-auto mb-10">
            Tell us what excites you and we'll design the perfect journey.
          </p>
          <Link to="/plan" className="btn-primary">Start Planning</Link>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
