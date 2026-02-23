"use client";

import { Sparkles, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFadeInOnScroll } from "@/hooks/use-fade-in-on-scroll";

const JourneySection = () => {
  const heroCard = useFadeInOnScroll(0.1, 0);
  const card1 = useFadeInOnScroll(0.1, 150);
  const card2 = useFadeInOnScroll(0.1, 300);

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
          ref={heroCard.ref}
          className={`rounded-3xl p-8 text-center transition-all duration-700 ease-out ${
            heroCard.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
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
            onClick={() => window.open('https://whop.com/checkout/v4THcoNRIiSffQEH7-0UCR-ow3k-cfm6-m8UNNwOgnbDB/', '_blank')}
          >
            Get My Digital Copy
          </Button>
        </div>

        {/* Card 1 - Nurturing Your Connection */}
        <div 
          ref={card1.ref}
          className={`rounded-3xl p-5 text-center transition-all duration-700 ease-out ${
            card1.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
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
            className="text-2xl font-normal mb-1"
            style={{ 
              color: '#3d4a3a',
              lineHeight: '1.2'
            }}
          >
            Nurturing Your Connection
          </h3>
          <p 
            className="text-base"
            style={{ 
              color: '#3d4a3a',
              lineHeight: '1.3'
            }}
          >
            Deepen the bond with your baby through mindful practices
          </p>
        </div>

        {/* Card 2 - Embrace Your Transformation */}
        <div 
          ref={card2.ref}
          className={`rounded-3xl p-5 text-center transition-all duration-700 ease-out ${
            card2.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
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
            className="text-2xl font-normal mb-1"
            style={{ 
              color: '#3d4a3a',
              lineHeight: '1.2'
            }}
          >
            Embrace Your Transformation
          </h3>
          <p 
            className="text-base"
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