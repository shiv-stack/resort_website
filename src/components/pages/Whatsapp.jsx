import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '8954752808'; // Replace with your WhatsApp number
  const message = 'Hello, I want to inquire about the resort!';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
    </a>
  );
};

export default WhatsAppButton;
