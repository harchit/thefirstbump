"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    ttq: any;
  }
}

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleModalToggle = (e: any) => {
      setIsModalOpen(e.detail.isOpen);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("modal-toggle", handleModalToggle);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("modal-toggle", handleModalToggle);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible && !isModalOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        className="font-semibold px-12 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: "#2d3a2b",
          color: "#ffffff",
          boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)'
        }}
        onClick={() => {
          if (window.fbq) {
            window.fbq('track', 'InitiateCheckout');
          }
          if (window.ttq) {
            window.ttq.track('InitiateCheckout');
          }
          setTimeout(() => {
            window.location.href = 'https://buy.stripe.com/5kQ14n0bU62J5N49SEgnK0e';
          }, 300);
        }}
      >
        Get My Digital Copy
      </Button>
    </div>
  );
};

export default StickyCtaButton;