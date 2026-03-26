import FadeInSection from "@/components/FadeInSection";

const stats = [
  { num: "500+", label: "American Travelers" },
  { num: "15", label: "Years of Expertise" },
  { num: "4.9★", label: "Average Rating" },
  { num: "98%", label: "Would Travel Again" },
];

const NumbersBar = () => (
  <FadeInSection>
    <section className="py-20 bg-champagne">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center ${
                i < stats.length - 1 ? "md:border-r md:border-gold/30" : ""
              }`}
            >
              <p className="font-heading text-[48px] md:text-[64px] text-gold leading-none">{s.num}</p>
              <p className="font-body uppercase text-[12px] tracking-[0.15em] text-text-muted mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default NumbersBar;
