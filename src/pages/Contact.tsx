import { useState } from "react";
import { Phone, Mail, MessageCircle, Check } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "", firstName: "", lastName: "",
    email: "", phone: "", country: "",
    dates: "", travelers: "2", budget: "",
    interests: [] as string[],
    message: "",
  });

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleInterest = (interest: string) =>
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));

  const interests = [
    "History & Archaeology", "Nile Cruise", "Desert & Oasis",
    "Photography", "Luxury & Pampering", "Family Adventure",
    "Cultural Immersion", "Once in a Lifetime Experiences",
  ];

  return (
    <div>
      {/* Hero — minimal */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-off-white">
        <div className="section-container text-center max-w-2xl mx-auto">
          <span className="label-caps block mb-4">Start Your Journey</span>
          <h1 className="font-heading text-4xl md:text-[64px] text-text-dark font-light leading-[1.05] mb-6">
            Let's Plan Your<br />Egypt Journey
          </h1>
          <p className="font-body text-[16px] text-text-muted">
            Tell us about your dream trip. We'll handle everything else.
          </p>
        </div>
      </section>

      <FadeInSection>
        <section className="section-padding bg-white">
          <div className="section-container grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left — Contact info (40%) */}
            <div className="lg:col-span-2">
              <span className="label-caps block mb-6">Get in Touch</span>

              <div className="space-y-5 mb-10">
                <a href="tel:+18001234567" className="flex items-center gap-3 font-body text-[16px] text-gold font-medium">
                  <Phone size={18} className="text-gold" /> +1 (800) 123-4567
                </a>
                <a href="mailto:hello@mateegoexplorers.com" className="flex items-center gap-3 font-body text-[14px] text-text-muted hover:text-gold transition-colors">
                  <Mail size={18} className="text-gold" /> hello@mateegoexplorers.com
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-[14px] text-text-muted hover:text-gold transition-colors"
                >
                  <MessageCircle size={18} className="text-gold" /> Chat on WhatsApp
                </a>
              </div>

              <p className="font-body text-[13px] text-text-muted mb-8">
                Mon–Fri 9am–6pm EST
              </p>

              <div className="border-t border-sand pt-8 space-y-4">
                {[
                  "ASTA Member",
                  "USD Pricing · No Hidden Fees",
                  "24/7 Support During Your Journey",
                  "500+ American Travelers",
                ].map((item, i) => (
                  <p key={i} className="flex items-center gap-2 font-body text-[13px] text-text-muted">
                    <span className="text-gold">✦</span> {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Right — Form (60%) */}
            <div className="lg:col-span-3">
              {/* Progress bar */}
              <div className="flex gap-2 mb-10">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-[2px] flex-1 transition-colors ${
                      s <= step ? "bg-gold" : "bg-sand"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-6 mb-8">
                {["About You", "Your Journey", "Your Interests"].map((label, i) => (
                  <span
                    key={i}
                    className={`font-body text-[11px] uppercase tracking-[0.15em] ${
                      i + 1 === step ? "text-gold" : "text-text-muted/50"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-3 gap-4">
                    <select
                      value={form.title}
                      onChange={(e) => updateField("title", e.target.value)}
                      className="border border-sand bg-transparent px-4 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Title</option>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                      <option>Dr</option>
                    </select>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      className="border border-sand bg-transparent px-4 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      className="border border-sand bg-transparent px-4 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="border border-sand bg-transparent px-4 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      value={form.country}
                      onChange={(e) => updateField("country", e.target.value)}
                      className="border border-sand bg-transparent px-4 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <button onClick={() => setStep(2)} className="btn-primary w-full text-center">
                    Next →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Preferred Travel Dates (e.g., October 2025)"
                    value={form.dates}
                    onChange={(e) => updateField("dates", e.target.value)}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
                  />

                  <div>
                    <p className="font-body text-[13px] text-text-dark mb-3">Number of travelers</p>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => updateField("travelers", String(Math.max(1, Number(form.travelers) - 1)))}
                        className="w-10 h-10 border border-sand text-text-dark flex items-center justify-center hover:border-gold transition-colors"
                      >
                        −
                      </button>
                      <span className="font-body text-[16px] text-text-dark w-8 text-center">{form.travelers}</span>
                      <button
                        type="button"
                        onClick={() => updateField("travelers", String(Number(form.travelers) + 1))}
                        className="w-10 h-10 border border-sand text-text-dark flex items-center justify-center hover:border-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="font-body text-[13px] text-text-dark mb-3">Budget per person</p>
                    <div className="flex flex-wrap gap-3">
                      {["$5,000–$8,000", "$8,000–$15,000", "$15,000+", "Flexible"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => updateField("budget", b)}
                          className={`font-body text-[12px] uppercase tracking-[0.1em] px-5 py-2.5 border transition-colors ${
                            form.budget === b
                              ? "bg-gold text-white border-gold"
                              : "border-sand text-text-muted hover:border-gold"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button onClick={() => setStep(1)} className="btn-secondary flex-1 text-center">← Back</button>
                    <button onClick={() => setStep(3)} className="btn-primary flex-1 text-center">Next →</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`text-left px-4 py-3 border text-[13px] font-body transition-colors flex items-center gap-2 ${
                          form.interests.includes(interest)
                            ? "bg-gold text-white border-gold"
                            : "border-sand text-text-muted hover:border-gold"
                        }`}
                      >
                        {form.interests.includes(interest) && <Check size={14} />}
                        {interest}
                      </button>
                    ))}
                  </div>

                  <textarea
                    placeholder="Tell us more about your dream trip..."
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={4}
                    className="w-full border border-sand bg-transparent px-4 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors resize-none"
                  />

                  <div className="flex gap-3">
                    <button onClick={() => setStep(2)} className="btn-secondary flex-1 text-center">← Back</button>
                    <button
                      onClick={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch within 24 hours."); }}
                      className="btn-primary flex-1 text-center"
                    >
                      Send My Enquiry
                    </button>
                  </div>
                </div>
              )}

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap gap-6 text-[11px] text-text-muted font-body">
                <span className="flex items-center gap-1"><Check size={12} className="text-gold" /> 24hr response</span>
                <span className="flex items-center gap-1"><Check size={12} className="text-gold" /> No payment required</span>
                <span className="flex items-center gap-1"><Check size={12} className="text-gold" /> 100% tailored</span>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Contact;
