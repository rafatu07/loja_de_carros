'use client';

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão depois de aproximadamente 2 scrolls (cerca de 800px)
      if (window.scrollY > 100) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <a 
      href="https://wa.me/5511999999999" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 group flex items-center justify-center bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 rounded-full w-16 h-16 hover:scale-110 ${
        showWhatsApp ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Conversar pelo WhatsApp"
    >
      <FaWhatsapp className="text-2xl size-9" />
    </a>
  );
} 