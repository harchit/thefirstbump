"use client";

import { Calendar, Heart, Shield, CheckSquare } from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/use-fade-in-on-scroll";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const DiscoverSection = () => {
  const feature1 = useFadeInOnScroll(0.1, 0);
  const feature2 = useFadeInOnScroll(0.1, 100);
  const feature3 = useFadeInOnScroll(0.1, 200);
  const feature4 = useFadeInOnScroll(0.1, 300);
  const quote = useFadeInOnScroll(0.1, 400);
  const [isPromoRevealed, setIsPromoRevealed] = useState(false);

  return (
    <div 
      className="w-full pt-6 pb-12 px-6"
      style={{ 
        background: 'linear-gradient(180deg, #DBE2CC 0%, #EAEEE1 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 300,
        letterSpacing: '-0.02em',
        lineHeight: '1.2'
      }}
    >
      <div className="max-w-md mx-auto">
        {/* Main Heading */}
        <h2 
          className="text-4xl sm:text-5xl font-light text-center mb-4"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.1',
            letterSpacing: '-0.03em'
          }}
        >
          What You'll Discover
        </h2>

        {/* Intro Paragraph */}
        <p 
          className="text-center text-base sm:text-lg mb-8"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.25',
            letterSpacing: '-0.01em'
          }}
        >
          Inside <span className="font-medium">The First Bump</span>, you'll gain clear, grounded guidance for every stage of pregnancy — from the first uncertain weeks to the moment labor begins. This isn't fluff or fear-based advice. It's structured, science-backed clarity designed for modern first-time mothers.
        </p>

        {/* Feature Items */}
        <div className="space-y-10 mb-12">
          {/* Feature 1 - Trimester-by-Trimester Clarity */}
          <div 
            ref={feature1.ref}
            className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
              feature1.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-2">
              <Calendar 
                className="w-12 h-12" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-lg font-medium mb-1"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.15'
              }}
            >
              Trimester-by-Trimester Clarity
            </h3>
            <p 
              className="text-base max-w-xs"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              What's happening in your body, what's normal, and when to pay attention.
            </p>
          </div>

          {/* Feature 2 - Emotional Grounding Tools */}
          <div 
            ref={feature2.ref}
            className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
              feature2.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div 
              className="mb-2 w-12 h-12 rounded-xl flex items-center justify-center border-2"
              style={{ borderColor: '#3d4a3a' }}
            >
              <Heart 
                className="w-6 h-6" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-lg font-medium mb-1"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.15'
              }}
            >
              Emotional Grounding Tools
            </h3>
            <p 
              className="text-base max-w-xs"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              Support for anxiety, mood shifts, and the identity changes of early motherhood.
            </p>
          </div>

          {/* Feature 3 - Confident Decision-Making */}
          <div 
            ref={feature3.ref}
            className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
              feature3.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-2">
              <Shield 
                className="w-12 h-12" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-lg font-medium mb-1"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.15'
              }}
            >
              Confident Decision-Making
            </h3>
            <p 
              className="text-base max-w-xs"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              Clear explanations of testing, birth options, and red flags — without fear-based messaging.
            </p>
          </div>

          {/* Feature 4 - Practical Preparation */}
          <div 
            ref={feature4.ref}
            className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
              feature4.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div 
              className="mb-2 w-12 h-12 rounded-xl flex items-center justify-center border-2"
              style={{ borderColor: '#3d4a3a' }}
            >
              <CheckSquare 
                className="w-6 h-6" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-lg font-medium mb-1"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.15'
              }}
            >
              Practical Preparation
            </h3>
            <p 
              className="text-base max-w-xs"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              What you truly need, how to prepare for labor, and when to call your provider.
            </p>
          </div>
        </div>

        {/* Quote */}
        <blockquote 
          ref={quote.ref}
          className={`text-center text-2xl sm:text-3xl font-light transition-all duration-700 ease-out ${
            quote.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.15'
          }}
        >
          "When your heart is calm, your baby feels peace."
        </blockquote>

        {/* Promo Code Section */}
        <div className="text-center mt-12 flex flex-col items-center">
          <p className="text-base font-medium mb-1.5" style={{ color: '#3d4a3a' }}>
            {isPromoRevealed ? "Use Code at Checkout" : "Click for 15% Promo Code"}
          </p>
          <Button
            onClick={() => setIsPromoRevealed(true)}
            className={`font-semibold px-5 py-1.5 h-auto rounded-full text-sm transition-all duration-300 ${!isPromoRevealed ? 'hover:scale-105 cursor-pointer' : 'cursor-default'}`}
            style={{ 
              backgroundColor: isPromoRevealed ? '#3d4a3a' : 'transparent',
              color: isPromoRevealed ? '#EAEEE1' : '#3d4a3a',
              border: '1.5px solid #3d4a3a'
            }}
          >
            {isPromoRevealed ? "BUMP1" : "Reveal Code"}
          </Button>
          {isPromoRevealed && (
            <p className="text-sm mt-1.5" style={{ color: '#3d4a3a', opacity: 0.9 }}>
              Offer ends March 3rd
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;