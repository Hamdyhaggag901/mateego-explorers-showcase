import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const journeys = [
  {
    num: "01",
    name: "The Nile Unveiled",
    type: "10 Days · Nile Cruise",
    badge: "SMALL GROUP",
    desc: "A curated river voyage through ancient Egypt's most treasured sites.",
    price: "From $6,400 per person",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=700",
    link: "/journeys/nile-in-depth",
  },
  {
    num: "02",
    name: "Temples & Desert",
    type: "12 Days · Private",
    badge: "PRIVATE",
    desc: "From the Great Pyramids to the vast silence of the Western Desert.",
    price: "From $8,200 per person",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=700",
    link: "/journeys",
  },
  {
    num: "03",
    name: "Egypt Uncovered VIP",
    type: "14 Days · VIP Private",
    badge: "VIP",
    desc: "The ultimate private exploration with exclusive behind-the-scenes access.",
    price: "From $12,500 per person",
    image: "https://images.unsplash.com/photo-1562600430-c4c0a48e7fbb?w=700",
    link: "/journeys",
  },
  {
    num: "04",
    name: "Egypt & the Desert",
    type: "12 Days · Private",
    badge: "PRIVATE",
    desc: "White Desert, Siwa Oasis and the best of ancient Egypt.",
    price: "From $8,200 per person",
    image: "https://images.unsplash.com/photo-1499487821632-d6f41cf9d9c3?w=700",
    link: "/journeys",
  },
  {
    num: "05",
    name: "Dawn Over Luxor",
    type: "8 Days · Small Group",
    badge: "SMALL GROUP",
    desc: "Private balloon flights and exclusive temple access at sunrise.",
    price: "From $5,800 per person",
    image: "https://images.unsplash.com/photo-1582645576399-5a7d8e69c12f?w=700",
    link: "/journeys",
  },
];

const JourneySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <FadeInSection>
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="label-caps block mb-3">Signature Journeys</span>
              <h2 className="section-title text-white">
                Journeys Designed<br />Around You
              </h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 border border-white/20 text-white/60 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 border border-white/20 text-white/60 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-8 pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {journeys.map((j, i) => (
            <Link
              key={i}
              to={j.link}
              className="group flex-shrink-0 w-[320px] md:w-[380px] h-[520px] relative overflow-hidden"
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                src={j.image}
                alt={j.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] group-hover:scale-[1.03] group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 border-l-2 border-transparent group-hover:border-gold transition-colors duration-500" />

              {/* Badge */}
              <span className="absolute top-5 left-5 label-caps bg-gold/90 text-white px-3 py-1 text-[10px]">
                {j.badge}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-heading text-[13px] text-gold">{j.num}</span>
                <h3 className="font-heading text-[28px] text-white leading-tight mt-1 mb-1">{j.name}</h3>
                <span className="label-caps text-gold block mb-2">{j.type}</span>
                <p className="font-body text-[14px] text-white/75 font-light mb-3">{j.desc}</p>
                <p className="font-body text-[13px] text-white mb-3">{j.price}</p>
                <span className="gold-text-link">View Journey →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default JourneySlider;
