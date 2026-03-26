import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white/70">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="font-heading text-2xl text-white">
              Mateego Explorers
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Local insight. Traveler's curiosity.<br />
              Your perfect Egyptian adventure.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/journeys" className="hover:text-gold transition-colors">Journeys</Link>
            <Link to="/experiences" className="hover:text-gold transition-colors">Experiences</Link>
            <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Plan Your Trip</Link>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
            <p className="text-xs mt-2">USD Pricing · No Hidden Fees</p>
            <p className="text-xs">24/7 US-Based Support During Your Journey</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 Mateego Explorers · Privacy Policy · Terms of Use</p>
          <div className="flex items-center gap-4 text-white/50">
            <span>ASTA Member</span>
            <span>·</span>
            <span>Amex</span>
            <span>·</span>
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
