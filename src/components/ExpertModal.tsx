import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ExpertModal = ({ open, onClose }: Props) => {
  const [form, setForm] = useState({
    title: "", firstName: "", lastName: "",
    email: "", phone: "", isAdvisor: false,
    message: "", privacy: false,
  });

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-[900px] max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
        style={{ animation: "fade-up 0.3s ease-out" }}
      >
        {/* Left — Image */}
        <div className="hidden md:block md:w-[40%] relative">
          <img
            src="https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800"
            alt="Egypt"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col justify-end h-full p-8">
            <p className="font-heading italic text-2xl text-white leading-relaxed">
              "Your journey begins<br />with a conversation."
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div className="md:w-[60%] p-8 md:p-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-muted hover:text-text-dark transition-colors"
            aria-label="Close"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          <h2 className="font-heading text-[32px] leading-tight mb-2">Start Your Journey</h2>
          <p className="text-text-muted text-[14px] mb-6">
            Speak with a specialist or fill out the form — we respond within 24 hours.
          </p>

          <a href="tel:+18001234567" className="text-gold font-body text-[15px] font-medium mb-6 block">
            📞 Call us: +1 (800) 123-4567
          </a>

          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch shortly."); onClose(); }} className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <select
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                className="border border-sand bg-transparent px-3 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
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
                onChange={(e) => update("firstName", e.target.value)}
                className="border border-sand bg-transparent px-3 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className="border border-sand bg-transparent px-3 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border border-sand bg-transparent px-3 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full border border-sand bg-transparent px-3 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors"
            />

            <div>
              <p className="text-[13px] font-body mb-2 text-text-dark">Are you a travel advisor?</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => update("isAdvisor", true)}
                  className={`px-6 py-2 text-[12px] uppercase tracking-[0.15em] font-body border transition-colors ${
                    form.isAdvisor ? "bg-gold text-white border-gold" : "border-sand text-text-muted hover:border-gold"
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => update("isAdvisor", false)}
                  className={`px-6 py-2 text-[12px] uppercase tracking-[0.15em] font-body border transition-colors ${
                    !form.isAdvisor ? "bg-gold text-white border-gold" : "border-sand text-text-muted hover:border-gold"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            <textarea
              placeholder="Tell us about your travel plans"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className="w-full border border-sand bg-transparent px-3 py-3 text-[13px] font-body focus:outline-none focus:border-gold transition-colors resize-none"
            />

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.privacy}
                onChange={(e) => update("privacy", e.target.checked)}
                className="mt-1 accent-gold"
              />
              <span className="text-[12px] text-text-muted">I accept the Privacy Policy</span>
            </label>

            <button type="submit" className="btn-primary w-full text-center">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertModal;
