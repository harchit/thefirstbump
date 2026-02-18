"use client";

import { Calendar, Heart, Shield, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiscoverSection = () => {
  return (
    <div 
      className="w-full pt-8 pb-4 px-6"
      style={{ 
        background: 'linear-gradient(180deg, #c7c3b4 0%, #ede8df 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 300,
        letterSpacing: '-0.02em',
        lineHeight: '1.2'
      }}
    >
      <div className="max-w-md mx-auto">
        {/* Main Heading */}
        <h2 
          className="text-4xl sm:text-5xl font-light text-center mb-6"
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
          className="text-center text-base sm:text-lg mb-16"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.3',
            letterSpacing: '-0.01em'
          }}
        >
          Inside <span className="font-medium">The First Bump</span>, you'll gain clear, grounded guidance for every stage of pregnancy — from the first uncertain weeks to the moment labor begins. This isn't fluff or fear-based advice. It's structured, science-backed clarity designed for modern first-time mothers.
        </p>

        {/* Feature Items */}
        <div className="space-y-14 mb-16">
          {/* Feature 1 - Trimester-by-Trimester Clarity */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Calendar 
                className="w-16 h-16" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-lg font-medium mb-2"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              Trimester-by-Trimester Clarity
            </h3>
            <p 
              className="text-base max-w-xs"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.3'
              }}
            >
              What's happening in your body, what's normal, and when to pay attention.
            </p>
          </div>

          {/* Feature 2 - Emotional Grounding Tools */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center border-2"
              style={{ borderColor: '#3d4a3a' }}
            >
              <Heart 
                className="w-8 h-8" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-lg font-medium mb-2"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              Emotional Grounding Tools
            </h3>
            <p 
              className="text-base max-w-xs"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.3'
              }}
            >
              Support for anxiety, mood shifts, and the identity changes of early motherhood.
            </p>
          </div>

          {/* Feature 3 - Confident Decision-Making */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Shield 
                className="w-16 h-16" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-lg font-medium mb-2"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              Confident Decision-Making
            </h3>
            <p 
              className="text-base max-w-xs"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.3'
              }}
            >
              Clear explanations of testing, birth options, and red flags — without fear-based messaging.
            </p>
          </div>

          {/* Feature 4 - Practical Preparation */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center border-2"
              style={{ borderColor: '#3d4a3a' }}
            >
              <CheckSquare 
                className="w-8 h-8" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-lg font-medium mb-2"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.2'
              }}
            >
              Practical Preparation
            </h3>
            <p 
              className="text-base max-w-xs"
              style={{ 
                color: '#3d4a3a',
                lineHeight: '1.3'
              }}
            >
              What you truly need, how to prepare for labor, and when to call your provider.
            </p>
          </div>
        </div>

        {/* Quote */}
        <blockquote 
          className="text-center text-2xl sm:text-3xl font-light mb-4"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.2'
          }}
        >
          "When your heart is calm, your baby feels peace."
        </blockquote>
      </div>
    </div>
  );
};

export default DiscoverSection;