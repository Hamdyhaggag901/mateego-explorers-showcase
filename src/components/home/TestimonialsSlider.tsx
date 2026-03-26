import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const testimonials = [
  {
    quote: "This was the most extraordinary trip of our lives. Our guide was a real archaeologist — it felt like a private discovery, not a tour.",
    name: "Margaret & David H. — Boston, MA",
  },
  {
    quote: "Mateego took care of absolutely everything. I've traveled with A&K before, and this felt just as seamless, but far more personal.",
    name: "Robert C. — San Francisco, CA",
  },
  {
    quote: "The dahabiya cruise was magical. Watching the temples from the deck at sunset — nothing compares.",
    name: "Susan L. — New York, NY",
  },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <FadeInSection>
      <section className="section-padding bg-off-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="label-caps block mb-3">Traveler Stories</span>
            <h2 className="section-title">
              What Our<br />Travelers Say
            </h2>
          </div>

          <div className="max-w-[700px] mx-auto text-center">
            <span className="font-heading text-[80px] md:text-[120px] text-gold leading-none block">"</span>
            <p className="font-heading italic text-[22px] md:text-[26px] text-text-dark leading-[1.5] -mt-12 mb-8">
              {t.quote}
            </p>
            <p className="font-body uppercase text-[13px] tracking-[0.15em] text-text-muted mb-2">
              {t.name}
            </p>
            <div className="text-gold text-[14px] tracking-wider">★★★★★</div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-gold" : "bg-beige"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default TestimonialsSlider;
