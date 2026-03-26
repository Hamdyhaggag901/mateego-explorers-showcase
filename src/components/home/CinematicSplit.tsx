import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const CinematicSplit = () => (
  <FadeInSection>
    <section className="flex flex-col md:flex-row min-h-[80vh]">
      {/* Left — Image */}
      <div className="md:w-1/2 relative min-h-[400px] md:min-h-0">
        <img
          src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=900"
          alt="Cairo spice market"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right — Content */}
      <div className="md:w-1/2 bg-champagne flex items-center">
        <div className="p-10 md:p-16 lg:p-20 max-w-lg">
          <span className="label-caps block mb-4">The Mateego Difference</span>
          <h2 className="font-heading text-[36px] md:text-[48px] text-text-dark leading-[1.1] mb-4">
            Beyond the<br />postcard. Into<br />the story.
          </h2>
          <div className="gold-rule" />
          <p className="font-body text-[15px] text-text-muted leading-[1.9] mb-8">
            We've been on both sides of the journey — as guests who've traveled Egypt,
            and as experts who know it intimately. That dual perspective shapes every
            single itinerary we design.
          </p>
          <Link to="/about" className="gold-text-link">
            Discover Our Approach →
          </Link>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default CinematicSplit;
