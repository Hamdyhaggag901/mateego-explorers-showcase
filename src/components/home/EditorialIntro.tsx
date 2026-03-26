import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const EditorialIntro = () => (
  <FadeInSection>
    <section className="section-padding bg-off-white">
      <div className="section-container max-w-[680px] mx-auto text-center">
        <div className="gold-rule-center" />
        <p className="font-heading italic text-[24px] md:text-[28px] text-text-dark leading-[1.6] mb-8">
          "We don't sell tours. We craft journeys — designed around your curiosity,
          executed with flawless local knowledge."
        </p>
        <p className="font-body text-[15px] text-text-muted leading-[1.9] mb-8">
          Mateego Explorers is a boutique Egypt travel company trusted by American travelers
          who expect more than a ticket and a bus. Small groups. Private access. Real expertise.
        </p>
        <Link to="/about" className="gold-text-link">
          Our Story →
        </Link>
      </div>
    </section>
  </FadeInSection>
);

export default EditorialIntro;
