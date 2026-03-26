import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="flex flex-col md:flex-row min-h-[400px]">
      {/* Left */}
      <div className="md:w-1/2 bg-black flex items-center p-10 md:p-16">
        <div>
          <h2 className="font-heading text-[36px] md:text-[44px] text-white leading-[1.1] mb-4">
            Stay Inspired
          </h2>
          <p className="font-body text-[15px] text-white/70 leading-[1.9]">
            Curated Egypt insights delivered to your inbox.
            Join 3,200+ American travelers.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="md:w-1/2 bg-charcoal flex items-center p-10 md:p-16">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full bg-transparent border border-white/30 text-white px-5 py-3.5 text-[14px] font-body placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors mb-4"
          />
          <button type="submit" className="btn-primary w-full text-center">
            Subscribe
          </button>
          <p className="font-body text-[11px] text-white/40 mt-4">
            We never share your data.
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
