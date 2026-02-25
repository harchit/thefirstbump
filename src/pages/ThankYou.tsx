"use client";

import { useEffect, useState } from "react";
import { Heart, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFadeInOnScroll } from "@/hooks/use-fade-in-on-scroll";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const ThankYou = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const messageCard = useFadeInOnScroll(0.1, 200);
  const tipsCard = useFadeInOnScroll(0.1, 400);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Fire Facebook Pixel Purchase event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        content_name: 'The First Bump - A New Mom\'s Pregnancy Guide',
        content_type: 'product',
        currency: 'USD',
        value: 0.00
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAEEE2' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#c9a87c' }}>
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.4) 100%)'
          }} 
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-5 pt-[4vh] pb-[6vh]">
          {/* Heart Icon */}
          <div 
            className={`mb-4 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <Heart 
              className="w-12 h-12 sm:w-16 sm:h-16" 
              style={{ color: '#ffffff' }}
              strokeWidth={1.5}
              fill="#ffffff"
            />
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-center mb-3 leading-tight transition-all duration-1000 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span 
              className="text-[8vw] sm:text-[36px] font-medium block" 
              style={{ color: '#ffffff' }}
            >
              Thank You, Mama
            </span>
            <span 
              className="text-[6vw] sm:text-[28px] italic block mt-1" 
              style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif" }}
            >
              Your journey begins now
            </span>
          </h1>

          {/* Book Image */}
          <div 
            className={`relative my-4 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <img
              src="/book-landing-page-removebg-preview.png"
              alt="The First Bump - A New Mom's Pregnancy Guide"
              className="relative w-[30vw] max-w-32 min-w-24 h-auto"
            />
          </div>

          {/* Subtitle & Download Button */}
          <div className="flex flex-col items-center">
            <p 
              className={`text-center text-[4vw] sm:text-[16px] max-w-[320px] transition-all duration-1000 ease-out delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#ffffff', lineHeight: '1.4' }}
            >
              Your copy of <span className="italic">The First Bump</span> is ready.
            </p>
            
            <div 
              className={`mt-6 transition-all duration-1000 ease-out delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button
                className="font-bold px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                style={{
                  backgroundColor: '#FBFE87',
                  color: '#2d3a2b',
                  border: 'none'
                }}
                onClick={() => {
                  window.open('https://drive.google.com/uc?export=download&id=1qN6ylDlJ793ZKiiNx2v7j8Bzo7wTsQnu', '_blank');
                }}
              >
                Click Here to Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div 
        className="w-full py-12 px-6"
        style={{ 
          background: 'linear-gradient(180deg, #EAEEE2 0%, #DBE2CC 100%)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div className="max-w-md mx-auto">
          {/* Personal Message Card */}
          <div 
            ref={messageCard.ref}
            className={`rounded-3xl p-8 mb-8 transition-all duration-700 ease-out ${
              messageCard.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ backgroundColor: '#2d3a2b' }}
          >
            <div className="flex justify-center mb-4">
              <BookOpen 
                className="w-10 h-10" 
                style={{ color: '#FBFE87' }}
                strokeWidth={1.5}
              />
            </div>
            <h2 
              className="text-2xl sm:text-3xl font-light text-center mb-4"
              style={{ color: '#ffffff', lineHeight: '1.2' }}
            >
              Before You Begin
            </h2>
            <div className="space-y-4">
              <p 
                className="text-base sm:text-lg text-center"
                style={{ color: '#ffffff', lineHeight: '1.6', fontWeight: 300 }}
              >
                Take a breath. You’ve just taken a practical step toward feeling more informed and confident in your pregnancy.
              </p>
              <p 
                className="text-base sm:text-lg text-center"
                style={{ color: '#ffffff', lineHeight: '1.6', fontWeight: 300 }}
              >
                This book is written for first-time mothers who want clear, straightforward guidance without unnecessary fear or overwhelm.
              </p>
              <p 
                className="text-base sm:text-lg text-center font-medium"
                style={{ color: '#FBFE87', lineHeight: '1.6' }}
              >
                Read it at your own pace. Revisit sections when needed and skip areas you deem irrelevant. Use it as a reference and make the choices that feel right for you.
              </p>
            </div>
          </div>

          {/* Tips Card */}
          <div 
            ref={tipsCard.ref}
            className={`rounded-3xl p-6 transition-all duration-700 ease-out ${
              tipsCard.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ backgroundColor: '#e8e6dc' }}
          >
            <div className="flex justify-center mb-3">
              <Sparkles 
                className="w-8 h-8" 
                style={{ color: '#3d4a3a' }}
                strokeWidth={1.5}
              />
            </div>
            <h3 
              className="text-xl sm:text-2xl font-normal text-center mb-4"
              style={{ color: '#3d4a3a', lineHeight: '1.2' }}
            >
              A Few Gentle Suggestions
            </h3>
            <ul className="space-y-3">
              <li 
                className="text-base text-center"
                style={{ color: '#3d4a3a', lineHeight: '1.4' }}
              >
                📖 Start with the trimester you're currently in
              </li>
              <li 
                className="text-base text-center"
                style={{ color: '#3d4a3a', lineHeight: '1.4' }}
              >
                💭 Keep a journal nearby for reflections
              </li>
              <li 
                className="text-base text-center"
                style={{ color: '#3d4a3a', lineHeight: '1.4' }}
              >
                🌙 Read before bed for a calming routine
              </li>
              <li 
                className="text-base text-center"
                style={{ color: '#3d4a3a', lineHeight: '1.4' }}
              >
                💕 Share with your partner if you'd like support
              </li>
            </ul>
          </div>

          {/* Closing Quote */}
          <blockquote 
            className="text-center text-xl sm:text-2xl font-light mt-10 px-4"
            style={{ 
              color: '#3d4a3a',
              lineHeight: '1.3',
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic'
            }}
          >
            "You are not just growing a baby — you are becoming a mother. And that is extraordinary."
          </blockquote>

          {/* Back to Home Button */}
          <div className="flex justify-center mt-8">
            <Button
              className="font-semibold px-8 py-5 rounded-full text-base transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#2d3a2b',
                color: '#ffffff'
              }}
              onClick={() => window.location.href = '/'}
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;