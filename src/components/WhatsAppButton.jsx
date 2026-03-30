import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace with actual phone number
  const phoneNumber = "+918610277404";
  const message = "Hi RR Interiors! I'm interested in getting an interior design estimate.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;
