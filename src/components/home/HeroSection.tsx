import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-end">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1800)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 section-container pb-24 w-full">
        <div className="max-w-2xl">
          <span className="label-caps mb-4 block">Egypt · Private Journeys</span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[88px] text-white leading-[1.0] font-light mb-6">
            Egypt.<br />Rediscovered.
          </h1>
          <p className="font-body text-[17px] text-white/85 font-light max-w-md mb-10">
            Private journeys for curious minds and discerning travelers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/journeys" className="btn-primary">Explore Journeys</Link>
            <Link to="/plan" className="btn-outline-white">Speak to an Expert</Link>
          </div>
        </div>

        {/* Bottom trust stats */}
        <div className="flex flex-wrap gap-8 mt-16 text-white/50 font-body text-[11px] uppercase tracking-[0.15em]">
          <span>500+ American Travelers</span>
          <span>Est. 2012</span>
          <span>4.9★ Rated</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="font-body text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} strokeWidth={1} />
      </div>
    </section>
  );
};

export default HeroSection;
