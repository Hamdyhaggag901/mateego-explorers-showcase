import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1548017787-5b6b537bff8f?w=600",
    category: "Destination Guide",
    title: "Siwa Oasis: Egypt's Best Kept Secret",
    date: "March 2025 · 6 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600",
    category: "Planning Guide",
    title: "When Is the Best Time to Visit Egypt?",
    date: "February 2025 · 5 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    category: "Traveler Story",
    title: "14 Days on the Nile: A Private Journey Diary",
    date: "January 2025 · 8 min read",
  },
];

const JournalPreview = () => (
  <FadeInSection>
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="label-caps block mb-3">The Mateego Journal</span>
            <h2 className="section-title">
              Insights for the<br />Curious Traveler
            </h2>
          </div>
          <Link to="#" className="gold-text-link hidden md:inline-block">
            View All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-[240px] object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <span className="label-caps text-[10px]">{a.category}</span>
              <h3 className="font-heading text-[22px] text-text-dark leading-tight mt-2 mb-2 group-hover:text-gold transition-colors">
                {a.title}
              </h3>
              <p className="font-body text-[13px] text-text-muted">{a.date}</p>
              <div className="h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500 mt-4" />
            </article>
          ))}
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default JournalPreview;
