import { Link } from "react-router-dom";
import { Heart, Unlock, ShieldCheck } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800)" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl md:text-6xl text-white">We Are Mateego Explorers</h1>
        </div>
      </section>

      {/* Story */}
      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl mb-6">Our Story</h2>
              <p className="body-muted text-[15px] mb-4">
                Mateego Explorers was born from a simple belief: Egypt deserves to be experienced, not just visited. Founded by a team of passionate Egyptologists and travel designers, we set out to create journeys that go beyond the tourist trail.
              </p>
              <p className="body-muted text-[15px] mb-4">
                Every itinerary we craft is a blend of deep local knowledge and the kind of seamless luxury that discerning travelers expect. We don't do cookie-cutter tours — we design stories.
              </p>
              <p className="body-muted text-[15px]">
                From private tomb openings to sunrise balloon flights, from boutique Nile cruises to desert camp dinners under the stars — we make moments that stay with you forever.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700"
                alt="Our team"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Promise */}
      <FadeInSection>
        <section className="section-padding bg-sand">
          <div className="section-container">
            <h2 className="section-title">Our Promise</h2>
            <div className="gold-divider" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Heart, title: "Smart Luxury", desc: "Exceptional quality without pretension. Every detail curated, every comfort considered." },
                { icon: Unlock, title: "Authentic Access", desc: "Doors that don't open for ordinary tours. Guides who bring history to life." },
                { icon: ShieldCheck, title: "Worry-Free Travel", desc: "From your first inquiry to your last day in Egypt, we handle everything." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-white p-8">
                  <Icon size={28} className="text-gold mx-auto mb-4" />
                  <h3 className="font-heading text-xl mb-2">{title}</h3>
                  <p className="body-muted text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Team */}
      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-title">Meet the Team</h2>
            <div className="gold-divider" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { name: "Dr. Ahmed Hassan", role: "Lead Egyptologist", years: "15 years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
                { name: "Sarah Mitchell", role: "Journey Designer", years: "10 years", image: "" },
                { name: "Omar Farouk", role: "Operations Director", years: "12 years", image: "" },
              ].map((member, i) => (
                <div key={i}>
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full bg-sand">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-heading text-3xl text-gold">
                        {member.name[0]}
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading text-xl">{member.name}</h3>
                  <p className="text-sm body-muted">{member.role} · {member.years}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Stats */}
      <section className="bg-[#111111] py-16">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "500+", label: "American Travelers" },
            { num: "12", label: "Years Expertise" },
            { num: "4.9/5", label: "Average Rating" },
            { num: "15", label: "Egypt Destinations" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-heading text-4xl text-gold">{stat.num}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
