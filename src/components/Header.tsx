import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ExpertModal from "@/components/ExpertModal";

const navLinks = [
  { to: "/journeys", label: "Journeys" },
  { to: "/experiences", label: "Experiences" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-sm py-4 border-b border-sand"
            : "bg-transparent py-6"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          <Link
            to="/"
            className={`font-heading text-[22px] tracking-wide transition-colors duration-500 ${
              scrolled ? "text-text-dark" : "text-white"
            }`}
          >
            Mateego Explorers
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link pb-1 transition-colors duration-500 ${
                  scrolled ? "text-text-dark/70 hover:text-text-dark" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setModalOpen(true)}
              className={`font-body uppercase text-[11px] tracking-[0.2em] font-normal px-6 py-2.5 border transition-all duration-500 ${
                scrolled
                  ? "border-gold text-gold hover:bg-gold hover:text-white"
                  : "border-white text-white hover:bg-white/10"
              }`}
            >
              Speak to an Expert
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-text-dark" : "text-white"}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center animate-fade-up">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1} />
          </button>
          <nav className="flex flex-col items-center gap-0">
            {[{ to: "/", label: "Home" }, ...navLinks].map((link, i, arr) => (
              <div key={link.to} className="flex flex-col items-center">
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-3xl text-white py-5 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
                {i < arr.length - 1 && (
                  <div className="w-8 h-[1px] bg-gold/40" />
                )}
              </div>
            ))}
            <div className="w-8 h-[1px] bg-gold/40" />
            <button
              onClick={() => { setMobileOpen(false); setModalOpen(true); }}
              className="btn-primary mt-8"
            >
              Speak to an Expert
            </button>
          </nav>
        </div>
      )}

      <ExpertModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;
