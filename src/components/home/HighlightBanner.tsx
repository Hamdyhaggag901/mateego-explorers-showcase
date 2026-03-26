import { Link } from "react-router-dom";

const HighlightBanner = () => (
  <section
    className="relative flex items-center justify-center py-32 md:py-40 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800)",
    }}
  >
    <div className="absolute inset-0 bg-black/55" />
    <div className="relative z-10 text-center px-6 max-w-3xl">
      <span className="label-caps block mb-4">Once in a Lifetime</span>
      <h2 className="font-heading text-4xl md:text-[72px] text-white font-light leading-[1.05] mb-6">
        Dawn Over the<br />Valley of the Kings
      </h2>
      <p className="font-body text-[16px] text-white/80 max-w-lg mx-auto mb-10">
        Private balloon flights. Exclusive tomb access.
        Moments no guidebook can give you.
      </p>
      <Link to="/plan" className="btn-outline-white">
        Enquire About This Experience
      </Link>
    </div>
  </section>
);

export default HighlightBanner;
