"use client";

import { Calendar, Heart, Shield, CheckSquare } from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/use-fade-in-on-scroll";

const DiscoverSection = () => {
  const feature1 = useFadeInOnScroll(0.1, 0);
  const feature2 = useFadeInOnScroll(0.1, 100);
  const feature3 = useFadeInOnScroll(0.1, 200);
  const feature4 = useFadeInOnScroll(0.1, 300);
  const priceSection = useFadeInOnScroll(0.1, 400);

  return (
    <div 
      className="w-full pt-6 pb-6 px-6"
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
          className="text-center text-base sm:text-lg mb-10"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.25',
            letterSpacing: '-0.01em'
          }}
        >
          The First Bump was designed to help you gain clear, grounded guidance for every stage of pregnancy — from the first uncertain weeks to the moment labor begins.
        </p>

        {/* Feature Items - Grid Layout */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 mb-12">
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
                className="w-10 h-10" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-base font-semibold mb-1 px-2"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.15'
              }}
            >
              Trimester Clarity
            </h3>
            <p 
              className="text-sm px-1"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              What's happening in your body and what's normal.
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
              className="mb-2 w-10 h-10 rounded-xl flex items-center justify-center border-2"
              style={{ borderColor: '#3d4a3a' }}
            >
              <Heart 
                className="w-5 h-5" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-base font-semibold mb-1 px-2"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.15'
              }}
            >
              Emotional Tools
            </h3>
            <p 
              className="text-sm px-1"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              Support for anxiety and identity changes.
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
                className="w-10 h-10" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-base font-semibold mb-1 px-2"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.15'
              }}
            >
              Calm Confidence
            </h3>
            <p 
              className="text-sm px-1"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              Clear explanations of testing and birth options.
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
              className="mb-2 w-10 h-10 rounded-xl flex items-center justify-center border-2"
              style={{ borderColor: '#3d4a3a' }}
            >
              <CheckSquare 
                className="w-5 h-5" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-base font-semibold mb-1 px-2"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.15'
              }}
            >
              Practical Prep
            </h3>
            <p 
              className="text-sm px-1"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              What you truly need and how to prepare for labor.
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div 
          ref={priceSection.ref}
          className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
            priceSection.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3">
            <span 
              className="text-2xl line-through opacity-50"
              style={{ color: '#3d4a3a' }}
            >
              $20.99
            </span>
            <span 
              className="text-4xl font-bold"
              style={{ color: '#2d5a27' }}
            >
              $16.99
            </span>
          </div>
          <p 
            className="text-sm mt-2 italic"
            style={{ color: '#3d4a3a' }}
          >
            Offer Ends March 5th
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;