import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Users, Map, Star, Compass, Clock, Award } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import JourneyCard from "@/components/JourneyCard";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY;
        heroRef.current.style.transform = `translateY(${y * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1800)",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[72px] text-white leading-[1.1] mb-6">
            Egypt. Rediscovered.
          </h1>
          <p className="font-body text-lg text-white/85 max-w-xl mx-auto mb-10">
            Private journeys crafted for curious minds and discerning travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/journeys" className="gold-cta">Explore Our Journeys</Link>
            <Link to="/contact" className="ghost-cta">Plan Your Trip</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-sand">
        <div className="section-container py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: Users, text: "Small Groups · Max 10 Guests" },
            { icon: Award, text: "Expert Egyptologist Guides" },
            { icon: Compass, text: "Fully Tailored Itineraries" },
          ].map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-3 py-3 ${
                i < 2 ? "md:border-r md:border-gold/30" : ""
              }`}
            >
              <Icon size={18} className="text-gold" />
              <span className="label-tag text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE JOURNEYS */}
      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-title">Signature Journeys</h2>
            <div className="gold-divider" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <JourneyCard
                image="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800"
                label="NILE JOURNEY"
                title="The Nile Unveiled"
                description="A curated river voyage through ancient Egypt's most treasured sites."
                details="10 Days · Small Group"
                price="From $6,400 per person"
                link="/journeys/nile-in-depth"
              />
              <JourneyCard
                image="https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800"
                label="PRIVATE"
                title="Temples & Desert"
                description="From the Great Pyramids to the vast silence of the Western Desert."
                details="12 Days · Private"
                price="From $8,200 per person"
                link="/journeys"
              />
              <JourneyCard
                image="https://images.unsplash.com/photo-1562600430-c4c0a48e7fbb?w=800"
                label="ONCE IN A LIFETIME"
                title="Egypt Uncovered VIP"
                description="The ultimate private exploration with exclusive behind-the-scenes access."
                details="14 Days · VIP Private"
                price="From $12,500 per person"
                link="/journeys"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* WHY MATEEGO */}
      <FadeInSection>
        <section className="section-padding bg-[#111111]">
          <div className="section-container">
            <h2 className="section-title text-white">Why Mateego</h2>
            <div className="gold-divider" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {[
                { icon: Shield, title: "Private & Boutique", desc: "No crowds. No compromises." },
                { icon: Star, title: "Expert Local Guides", desc: "Archaeologists and historians, not scripts." },
                { icon: Clock, title: "Seamless Logistics", desc: "Every detail handled. Every moment yours." },
                { icon: Map, title: "Trusted by Americans", desc: "Hundreds of US travelers, 5-star reviews." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Icon size={28} className="text-gold mb-4" />
                  <h3 className="font-heading text-xl text-white mb-2">{title}</h3>
                  <p className="text-white/60 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* IMMERSIVE PHOTO STORY */}
      <FadeInSection>
        <section className="flex flex-col md:flex-row min-h-[500px]">
          <div className="md:w-[40%] min-h-[300px] md:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=800"
              alt="Cairo spice market"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-[60%] relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000"
              alt="Nile landscape"
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-16">
              <span className="label-tag text-gold mb-4">THE EGYPT WE SHOW YOU</span>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4 leading-tight">
                Beyond the postcard.<br />Into the story.
              </h2>
              <p className="text-white/70 text-[15px] max-w-md mb-8">
                We design journeys where history feels alive and your experience feels effortless.
              </p>
              <Link to="/contact" className="gold-cta self-start">Start Planning</Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* HIGHLIGHT BANNER */}
      <section
        className="relative flex items-center justify-center py-24 md:py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=1800)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <span className="label-tag text-gold mb-4 block">ONCE IN A LIFETIME</span>
          <h2 className="font-heading text-4xl md:text-[52px] text-white leading-tight mb-4">
            Dawn Over the Valley of the Kings
          </h2>
          <p className="text-white/70 text-base max-w-lg mx-auto mb-8">
            Private balloon flights. Exclusive tomb openings. Access no guidebook can give you.
          </p>
          <Link to="/experiences" className="ghost-cta">Explore Experiences</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <FadeInSection>
        <section className="section-padding bg-champagne">
          <div className="section-container">
            <h2 className="section-title">What Our Travelers Say</h2>
            <div className="gold-divider" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "This was the most extraordinary trip of our lives. Our guide was a real archaeologist — it felt like a private discovery.",
                  name: "Margaret & David H.",
                  location: "Boston, MA",
                },
                {
                  quote: "Mateego took care of absolutely everything. I've traveled with A&K before, and this felt just as seamless, but far more personal.",
                  name: "Robert C.",
                  location: "San Francisco, CA",
                },
                {
                  quote: "The dahabiya cruise was magical. Watching the temples from the deck at sunset — nothing compares.",
                  name: "Susan L.",
                  location: "New York, NY",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 flex flex-col">
                  <div className="text-gold text-lg mb-3">★★★★★</div>
                  <p className="text-[15px] body-muted italic flex-1 mb-4">"{t.quote}"</p>
                  <p className="font-body font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* NEWSLETTER */}
      <section className="section-padding bg-[#111111]">
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-gold mb-4">
            Receive Curated Egypt Insights
          </h2>
          <p className="text-white/60 text-[15px] mb-8">
            Travel inspiration, destination guides, and exclusive journey previews.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white px-5 py-3.5 text-sm font-body placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="gold-cta">Subscribe</button>
          </form>
          <p className="text-white/40 text-xs mt-4">
            Join 3,200+ American travelers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
