"use client";

import { Baby, Heart, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiscoverSection = () => {
  return (
    <div 
      className="w-full py-16 px-6"
      style={{ 
        background: 'linear-gradient(180deg, #c7c3b4 0%, #ede8df 100%)',
        fontFamily: "'Graphik Light', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      }}
    >
      <div className="max-w-md mx-auto">
        {/* Main Heading */}
        <h2 
          className="text-4xl sm:text-5xl font-light text-center mb-6"
          style={{ 
            color: '#3d4a3a'
          }}
        >
          What You'll Discover
        </h2>

        {/* Intro Paragraph */}
        <p 
          className="text-center text-base sm:text-lg leading-relaxed mb-16"
          style={{ 
            color: '#3d4a3a'
          }}
        >
          Inside, <span className="font-medium">The First Bump</span> shares how to{" "}
          <span className="font-semibold">navigate your pregnancy journey</span>, embrace the changes, and connect with your growing baby through mindfulness, self-care, and emotional support.
        </p>

        {/* Feature Items */}
        <div className="space-y-14 mb-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Baby 
                className="w-16 h-16" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <p 
              className="text-base leading-relaxed max-w-xs"
              style={{ 
                color: '#3d4a3a'
              }}
            >
              How to embrace each trimester and create a deeper bond with your baby.
            </p>
          </div>

          {/* Feature 2 */}
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
            <p 
              className="text-base leading-relaxed max-w-xs"
              style={{ 
                color: '#3d4a3a'
              }}
            >
              Gentle self-care practices and emotional tools to calm your mind and nurture your body.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Moon 
                className="w-16 h-16" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <p 
              className="text-base leading-relaxed max-w-xs"
              style={{ 
                color: '#3d4a3a'
              }}
            >
              A nightly routine to help you unwind, release tension, and rest deeply.
            </p>
          </div>
        </div>

        {/* Quote */}
        <blockquote 
          className="text-center text-2xl sm:text-3xl font-light leading-snug mb-8"
          style={{ 
            color: '#3d4a3a'
          }}
        >
          "When your heart is calm, your baby feels peace."
        </blockquote>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            className="font-semibold px-8 py-6 rounded-full text-base shadow-lg transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#2d3a2b',
              color: '#ffffff'
            }}
          >
            Get My Digital Copy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;