"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        className="font-semibold px-8 py-6 rounded-full text-base shadow-2xl transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: "#2d3a2b",
          color: "#ffffff",
        }}
      >
        Get My Digital Copy
      </Button>
    </div>
  );
};

export default StickyCtaButton;