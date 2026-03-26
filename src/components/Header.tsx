import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/journeys", label: "Journeys" },
  { to: "/experiences", label: "Experiences" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Plan Your Trip" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl md:text-3xl text-white tracking-wide">
          Mateego Explorers
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link pb-1 ${
                link.to === "/contact"
                  ? "gold-cta !px-6 !py-2.5 !text-[11px]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-72 bg-[#111111] transform transition-transform duration-300 ease-out z-50 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col gap-6 pt-20 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link text-white/80 hover:text-white pb-1 text-[13px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
