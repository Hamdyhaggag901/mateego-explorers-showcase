import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const experiences = [
  {
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700",
    title: "Nile Cruises",
    desc: "Boutique dahabiyas and classic river cruises",
  },
  {
    image: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=700",
    title: "Cultural Immersion",
    desc: "Local markets, Nubian villages, craft workshops",
  },
  {
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=700",
    title: "Desert & Oasis",
    desc: "Siwa oasis, White Desert, stargazing camps",
  },
  {
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=700",
    title: "Family Adventures",
    desc: "Egypt made magical for all ages",
  },
  {
    image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=700",
    title: "Once in a Lifetime",
    desc: "Private tomb openings, balloon at dawn, VIP access",
  },
  {
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=700",
    title: "Culinary Journeys",
    desc: "Egyptian cuisine, cooking classes, rooftop dinners",
  },
];

const Experiences = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1510100703578-f5e1f4f2ac7e?w=1800)" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">Extraordinary Experiences</h1>
          <p className="text-white/80 text-lg">The moments that make Egypt unforgettable.</p>
        </div>
      </section>

      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((exp, i) => (
                <div key={i} className="group card-image-hover">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="font-heading text-2xl text-white mb-1">{exp.title}</h3>
                      <p className="text-white/70 text-sm">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <section className="section-padding bg-[#111111] text-center">
        <div className="section-container">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Experience Egypt?
          </h2>
          <p className="text-white/60 text-[15px] max-w-md mx-auto mb-8">
            Tell us what excites you and we'll design the perfect journey.
          </p>
          <Link to="/contact" className="gold-cta">Plan Your Trip</Link>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
