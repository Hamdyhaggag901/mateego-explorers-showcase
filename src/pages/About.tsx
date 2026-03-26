import { Link } from "react-router-dom";
import { Heart, Unlock, ShieldCheck } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 section-container pb-16">
          <span className="label-caps block mb-3">Our Story</span>
          <h1 className="font-heading text-5xl md:text-[72px] text-white font-light leading-[1.0]">
            We Are<br />Mateego Explorers
          </h1>
        </div>
      </section>

      {/* Story Block 1 — text left, image right */}
      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-caps block mb-4">Our Beginning</span>
              <h2 className="font-heading text-[36px] md:text-[42px] text-text-dark leading-[1.1] mb-6">
                Born from a love<br />of Egypt
              </h2>
              <div className="gold-rule" />
              <p className="font-body text-[15px] text-text-muted leading-[1.9] mb-4">
                Mateego Explorers was born from a simple belief: Egypt deserves to be experienced, not just visited. Founded by a team of passionate Egyptologists and travel designers, we set out to create journeys that go beyond the tourist trail.
              </p>
              <p className="font-body text-[15px] text-text-muted leading-[1.9] mb-4">
                Every itinerary we craft is a blend of deep local knowledge and the kind of seamless luxury that discerning travelers expect. We don't do cookie-cutter tours — we design stories.
              </p>
              <p className="font-body text-[15px] text-text-muted leading-[1.9]">
                From private tomb openings to sunrise balloon flights, from boutique Nile cruises to desert camp dinners under the stars — we make moments that stay with you forever.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700"
                alt="Our team"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Story Block 2 — image left, text right */}
      <FadeInSection>
        <section className="section-padding bg-off-white">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=700"
                alt="Egypt experience"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="label-caps block mb-4">Our Philosophy</span>
              <h2 className="font-heading text-[36px] md:text-[42px] text-text-dark leading-[1.1] mb-6">
                Smart luxury,<br />authentic access
              </h2>
              <div className="gold-rule" />
              <p className="font-body text-[15px] text-text-muted leading-[1.9] mb-4">
                We believe luxury travel shouldn't mean isolation from the real country. Our journeys blend five-star comfort with genuine cultural encounters — the kind you simply can't have on a big-group tour.
              </p>
              <p className="font-body text-[15px] text-text-muted leading-[1.9]">
                Whether it's sharing tea with a Nubian family, exploring a temple before it opens to the public, or dining under the stars in the White Desert — these are the moments that define a Mateego journey.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Promise */}
      <FadeInSection>
        <section className="section-padding bg-black">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="label-caps block mb-3">Our Promise</span>
              <h2 className="section-title text-white">What Sets Us Apart</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Smart Luxury", desc: "Exceptional quality without pretension. Every detail curated, every comfort considered." },
                { icon: Unlock, title: "Authentic Access", desc: "Doors that don't open for ordinary tours. Guides who bring history to life." },
                { icon: ShieldCheck, title: "Worry-Free Travel", desc: "From your first inquiry to your last day in Egypt, we handle everything." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="text-center">
                  <Icon size={28} className="text-gold mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-[24px] text-white mb-3">{title}</h3>
                  <p className="font-body text-[14px] text-white/60 leading-[1.8]">{desc}</p>
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
            <div className="text-center mb-12">
              <span className="label-caps block mb-3">Our Team</span>
              <h2 className="section-title">Meet the Experts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                { name: "Dr. Ahmed Hassan", role: "Lead Egyptologist · 15 years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
                { name: "Sarah Mitchell", role: "Journey Designer · 10 years", image: "" },
                { name: "Omar Farouk", role: "Operations Director · 12 years", image: "" },
              ].map((member, i) => (
                <div key={i}>
                  <div className="w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full bg-sand">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-heading text-4xl text-gold">
                        {member.name[0]}
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading text-[22px] text-text-dark">{member.name}</h3>
                  <p className="font-body text-[13px] text-text-muted mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Stats */}
      <section className="py-20 bg-champagne">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "500+", label: "American Travelers" },
            { num: "15", label: "Years of Expertise" },
            { num: "4.9★", label: "Average Rating" },
            { num: "15", label: "Egypt Destinations" },
          ].map((stat, i) => (
            <div
              key={i}
              className={i < 3 ? "md:border-r md:border-gold/30" : ""}
            >
              <p className="font-heading text-[48px] md:text-[64px] text-gold leading-none">{stat.num}</p>
              <p className="font-body uppercase text-[12px] tracking-[0.15em] text-text-muted mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
