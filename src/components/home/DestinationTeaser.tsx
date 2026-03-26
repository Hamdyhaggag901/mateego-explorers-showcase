import FadeInSection from "@/components/FadeInSection";

const destinations = [
  "Cairo", "Luxor", "Aswan", "Siwa Oasis", "White Desert",
  "Abu Simbel", "Alexandria", "Red Sea", "Sinai",
];

const DestinationTeaser = () => (
  <FadeInSection>
    <section className="section-padding bg-black">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="label-caps block mb-3">Where We Go</span>
          <h2 className="section-title text-white">
            All of Egypt.<br />None of the crowds.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {destinations.map((d) => (
            <div
              key={d}
              className="border border-white/20 text-white font-body text-[12px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 cursor-pointer"
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default DestinationTeaser;
