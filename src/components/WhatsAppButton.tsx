import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold flex items-center justify-center rounded-full shadow-lg group"
      style={{ animation: "float-pulse 4s ease-in-out infinite" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-white" />
      <span className="absolute right-full mr-3 bg-[#111111] text-white text-xs px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with a Journey Specialist
      </span>
    </a>
  );
};

export default WhatsAppButton;
