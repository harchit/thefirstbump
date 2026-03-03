"use client";

import { useState } from "react";
import { Check, Eye } from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/use-fade-in-on-scroll";
import SnippetModal from "./SnippetModal";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    ttq: any;
  }
}

const chapters = [
  {
    title: "1: The Biology & The Immediate Pivot",
    description: "Understand what’s happening in your body — and how to adjust without overwhelm."
  },
  {
    title: "2: The First Trimester – Survival Mode",
    description: "Navigate fatigue, fee, and uncertainty calmly"
  },
  {
    title: "3: Pregnancy & Your Mental Landscape",
    description: "Make sense of anxiety, identity shifts, and emotional changes."
  },
  {
    title: "4: The Physical Shift (Second Trimester)",
    description: "Know what’s normal as your body changes — and what’s not."
  },
  {
    title: "5: Testing Without Spiraling",
    description: "Understand screenings, make decisions confidently"
  },
  {
    title: "6: Physical Endurance (Third Trimester)",
    description: "Manage discomfort and recognize true labor signs."
  },
  {
    title: "7: Preparing for Birth",
    description: "Build flexible birth preferences and mental readiness."
  },
  {
    title: "8: Practical Preparation",
    description: "Get ready without overbuying or overthinking"
  },
  {
    title: "9: What Labor Actually Looks Like",
    description: "Know what to expect so birth feels less unknown."
  },
  {
    title: "10: “Is This Normal?”",
    description: "Clarity on symptoms, moods, & body changes"
  },
  {
    title: "11: Myth-Busting for Modern Mothers",
    description: "Cut through outdated advice and internet noise."
  },
  {
    title: "12: For Partners",
    description: "Help your partner show up with confidence and support."
  }
];

const JourneySection = () => {
  const heroCard = useFadeInOnScroll(0.1, 0);
  const tocSection = useFadeInOnScroll(0.1, 150);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSnippet, setActiveSnippet] = useState("");

  const openSnippet = (src: string) => {
    setActiveSnippet(src);
    setModalOpen(true);
  };

  return (
    <div 
      className="w-full pt-0 pb-4 px-6"
      style={{ 
        background: 'linear-gradient(180deg, #EAEEE1 0%, #FFFFFF 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 300,
        letterSpacing: '-0.02em',
        lineHeight: '1.4'
      }}
    >
      <div className="max-w-md mx-auto space-y-10">
        {/* Who This is For Card */}
        <div 
          ref={heroCard.ref}
          className={`rounded-3xl p-6 max-w-md mx-auto transition-all duration-700 ease-out ${
            heroCard.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            backgroundColor: '#2d3a2b'
          }}
        >
          <h2 
            className="text-3xl font-semibold mb-6 text-center"
            style={{ 
              color: '#ffffff',
              lineHeight: '1.2'
            }}
          >
            Who This is For
          </h2>
          <div className="space-y-3 w-full mx-auto">
            {[
              "You’re a first-time mom who wants pregnancy clarity",
              "You feel overwhelmed by conflicting advice",
              "You want clarity without fear-based messaging"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-white/90">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#c7c3b4]" />
                <p className="text-base font-light leading-snug text-left">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Table of Contents Section */}
        <div 
          ref={tocSection.ref}
          className={`transition-all duration-700 ease-out ${
            tocSection.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 
            className="text-4xl text-center mb-6 italic"
            style={{ 
              color: '#3d4a3a',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            Inside the Guide
          </h3>
          
          <div className="space-y-3 mb-8">
            {chapters.map((chapter, index) => (
              <div key={index} className="border-b border-[#3d4a3a]/10 pb-3 last:border-0">
                <h4 
                  className="text-base sm:text-lg font-medium mb-0.5"
                  style={{ color: '#3d4a3a' }}
                >
                  {chapter.title}
                </h4>
                <p 
                  className="text-sm sm:text-base"
                  style={{ color: '#3d4a3a', opacity: 0.8 }}
                >
                  {chapter.description}
                </p>
              </div>
            ))}
          </div>

          {/* Snippet Buttons */}
          <div className="flex flex-row gap-3 justify-center items-center">
            <button 
              onClick={() => openSnippet("/snippet1.png")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#3d4a3a]/20 text-[#3d4a3a] text-sm font-medium hover:bg-[#3d4a3a]/5 transition-colors shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Snippet 1
            </button>
            <button 
              onClick={() => openSnippet("/snippet2.png")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#3d4a3a]/20 text-[#3d4a3a] text-sm font-medium hover:bg-[#3d4a3a]/5 transition-colors shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Snippet 2
            </button>
          </div>
        </div>
      </div>

      <SnippetModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        imageSrc={activeSnippet} 
      />
    </div>
  );
};

export default JourneySection;