import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white/70">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="font-heading text-[22px] text-white">
              Mateego Explorers
            </Link>
            <p className="mt-3 text-[13px] leading-relaxed text-white/50">
              Local insight. Traveler's curiosity.<br />
              Your perfect Egyptian adventure.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-gold transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="#" aria-label="Facebook" className="text-white/40 hover:text-gold transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Col 2 — Journeys */}
          <div>
            <h4 className="font-body uppercase text-[11px] tracking-[0.2em] text-white mb-6">Journeys</h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <Link to="/journeys" className="hover:text-gold transition-colors">All Journeys</Link>
              <Link to="/journeys/nile-in-depth" className="hover:text-gold transition-colors">Nile Cruises</Link>
              <Link to="/journeys" className="hover:text-gold transition-colors">Private Tours</Link>
              <Link to="/journeys" className="hover:text-gold transition-colors">Family Adventures</Link>
            </div>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="font-body uppercase text-[11px] tracking-[0.2em] text-white mb-6">Company</h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
              <Link to="/experiences" className="hover:text-gold transition-colors">Experiences</Link>
              <Link to="/plan" className="hover:text-gold transition-colors">Plan Your Trip</Link>
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-body uppercase text-[11px] tracking-[0.2em] text-white mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <a href="tel:+18001234567" className="text-gold hover:text-gold-light transition-colors">+1 (800) 123-4567</a>
              <a href="mailto:hello@mateegoexplorers.com" className="hover:text-gold transition-colors">hello@mateegoexplorers.com</a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Chat on WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40">
          <p>© 2025 Mateego Explorers · Privacy · Terms</p>
          <div className="flex items-center gap-3">
            <span>ASTA Member</span>
            <span>·</span>
            <span>USD Pricing · No Hidden Fees</span>
            <span>·</span>
            <span>Amex · Visa · Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
