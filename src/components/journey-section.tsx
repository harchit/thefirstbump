"use client";

import { Sparkles, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const JourneySection = () => {
  return (
    <div 
      className="w-full pt-12 pb-8 px-6"
      style={{ 
        background: 'linear-gradient(180deg, #EAEEE1 0%, #FFFFFF 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 300,
        letterSpacing: '-0.02em',
        lineHeight: '1.4'
      }}
    >
      <div className="max-w-md mx-auto space-y-6">
        {/* Hero Card */}
        <div 
          className="rounded-3xl p-8 text-center"
          style={{ 
            backgroundColor: '#2d3a2b'
          }}
        >
          <h2 
            className="text-3xl sm:text-4xl font-light mb-2"
            style={{ 
              color: '#ffffff',
              lineHeight: '1.2'
            }}
          >
            Begin your motherhood journey
          </h2>
          <p 
            className="text-base mb-6"
            style={{ 
              color: '#ffffff',
              lineHeight: '1.5',
              opacity: 0.9
            }}
          >
            If your heart is seeking guidance... this is where it begins.
          </p>
          <Button 
            className="font-normal px-8 py-5 rounded-full text-base shadow-lg transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#c7c3b4',
              color: '#2d2418'
            }}
          >
            Get My Digital Copy
          </Button>
        </div>

        {/* Card 1 - Nurturing Your Connection */}
        <div 
          className="rounded-3xl p-5 text-center"
          style={{ 
            backgroundColor: '#e8e6dc'
          }}
        >
          <div className="flex justify-center mb-2">
            <Sparkles 
              className="w-8 h-8" 
              style={{ color: '#3d4a3a' }}
              strokeWidth={1.5}
            />
          </div>
          <h3 
            className="text-xl font-normal mb-1"
            style={{ 
              color: '#3d4a3a',
              lineHeight: '1.2'
            }}
          >
            Nurturing Your Connection
          </h3>
          <p 
            className="text-sm"
            style={{ 
              color: '#3d4a3a',
              lineHeight: '1.3'
            }}
          >
            Deepen the bond with your baby through mindful practices
          </p>
        </div>

        {/* Card 2 - Embracing Your Transformation */}
        <div 
          className="rounded-3xl p-5 text-center"
          style={{ 
            backgroundColor: '#e8e6dc'
          }}
        >
          <div className="flex justify-center mb-2">
            <Sun 
              className="w-8 h-8" 
              style={{ color: '#3d4a3a' }}
              strokeWidth={1.5}
            />
          </div>
          <h3 
            className="text-xl font-normal mb-1"
            style={{ 
              color: '#3d4a3a',
              lineHeight: '1.2'
            }}
          >
            Embracing Your Transformation
          </h3>
          <p 
            className="text-sm"
            style={{ 
              color: '#3d4a3a',
              lineHeight: '1.3'
            }}
          >
            Find peace and clarity as you step into motherhood
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;