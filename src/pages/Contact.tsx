import { useState } from "react";
import { Phone, Mail, MessageCircle, Check } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "",
    dates: "", travelers: "", budget: "",
    interests: [] as string[],
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const interests = [
    "History & Archaeology", "Nile Cruise", "Desert Adventure",
    "Family", "Photography", "Luxury & Pampering",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1800)" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">Let's Plan Your Egypt Journey</h1>
          <p className="text-white/80 text-lg">Speak with a Journey Specialist today.</p>
        </div>
      </section>

      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h2 className="font-heading text-3xl mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 gold-cta"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
                <div className="flex items-center gap-3 body-muted">
                  <Phone size={18} className="text-gold" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 body-muted">
                  <Mail size={18} className="text-gold" />
                  <span>journeys@mateegoexplorers.com</span>
                </div>
              </div>
              <p className="body-muted text-sm mt-8">
                Our Journey Specialists are available Monday–Saturday, 9 AM – 7 PM EST. We typically respond to inquiries within 24 hours. There's no obligation and no payment required to start planning.
              </p>
            </div>

            {/* Right - Form */}
            <div>
              {/* Step indicators */}
              <div className="flex gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 transition-colors ${s <= step ? "bg-gold" : "bg-sand"}`}
                  />
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="font-heading text-xl mb-4">Your Details</h3>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    value={form.country}
                    onChange={(e) => updateField("country", e.target.value)}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  />
                  <button onClick={() => setStep(2)} className="gold-cta w-full text-center">
                    Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="font-heading text-xl mb-4">Trip Details</h3>
                  <input
                    type="text"
                    placeholder="Preferred Travel Dates"
                    value={form.dates}
                    onChange={(e) => updateField("dates", e.target.value)}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Number of Travelers"
                    value={form.travelers}
                    onChange={(e) => updateField("travelers", e.target.value)}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  />
                  <div>
                    <p className="text-sm font-body font-bold mb-3">Budget per person</p>
                    <div className="flex flex-wrap gap-3">
                      {["$5k–$8k", "$8k–$15k", "$15k+"].map((b) => (
                        <button
                          key={b}
                          onClick={() => updateField("budget", b)}
                          className={`label-tag px-4 py-2 border transition-colors ${
                            form.budget === b
                              ? "bg-gold text-white border-gold"
                              : "border-sand hover:border-gold"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="ghost-cta-gold flex-1 text-center">Back</button>
                    <button onClick={() => setStep(3)} className="gold-cta flex-1 text-center">Continue</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="font-heading text-xl mb-4">Your Interests</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`text-left px-4 py-3 border text-sm font-body transition-colors flex items-center gap-2 ${
                          form.interests.includes(interest)
                            ? "bg-gold text-white border-gold"
                            : "border-sand hover:border-gold"
                        }`}
                      >
                        {form.interests.includes(interest) && <Check size={14} />}
                        {interest}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(2)} className="ghost-cta-gold flex-1 text-center">Back</button>
                    <button
                      onClick={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch within 24 hours."); }}
                      className="gold-cta flex-1 text-center"
                    >
                      Send My Inquiry
                    </button>
                  </div>
                </div>
              )}

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap gap-4 text-xs body-muted">
                <span className="flex items-center gap-1"><Check size={12} className="text-gold" /> We respond within 24 hours</span>
                <span className="flex items-center gap-1"><Check size={12} className="text-gold" /> No payment required to inquire</span>
                <span className="flex items-center gap-1"><Check size={12} className="text-gold" /> 100% tailored to you</span>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Contact;
