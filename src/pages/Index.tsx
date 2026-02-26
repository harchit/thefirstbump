import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import WhyThisBookSection from "@/components/why-this-book-section";
import DiscoverSection from "@/components/discover-section";
import JourneySection from "@/components/journey-section";
import StickyCtaButton from "@/components/sticky-cta-button";
import ReviewsSection from "@/components/reviews-section";
import FaqSection from "@/components/faq-section";
import SlotCounter from "@/components/slot-counter";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const Index = () => {
  const sfProFont = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPromoRevealed, setIsPromoRevealed] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden" style={{ backgroundColor: '#c9a87c' }}>
        {/* Background - Soft Nursery/Pregnancy Scene */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        
        {/* Warm Golden/Sepia Overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.4) 100%)'
          }} 
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-5 pt-[2vh] pb-[1vh]">
          {/* Trust Badge */}
          <div className="flex items-center gap-2 mb-[2vh]">
            <div className="flex -space-x-2">
              <div className="w-[8vw] h-[8vw] max-w-9 max-h-9 min-w-6 min-h-6 rounded-full border-2 border-white/80 overflow-hidden shadow-sm">
                <img
                  src="/latina.jpg"
                  alt="Reader"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[8vw] h-[8vw] max-w-9 max-h-9 min-w-6 min-h-6 rounded-full border-2 border-white/80 overflow-hidden shadow-sm">
                <img
                  src="/woman2.jpg"
                  alt="Reader"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-[3.8vw] sm:text-base" style={{ color: '#ffffff' }}>
              Trusted by <span className="font-semibold"><SlotCounter initialValue={1143} />+ moms worldwide</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-center mb-1 leading-tight w-[85vw] max-w-[340px]">
            <span className="text-[9vw] sm:text-[36px] font-medium block" style={{ color: '#ffffff' }}>The First Bump</span>
            <span className="text-[7.5vw] sm:text-[32px] italic block" style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif" }}>A New Mom's Pregnancy Guide</span>
          </h1>

          {/* Subheading */}
          <p className="text-center font-medium text-[3.8vw] sm:text-[15px] mb-[2vh] w-[85vw] max-w-[360px] leading-tight" style={{ color: '#ffffff' }}>
            An emotionally validating pregnancy guide for your journey into motherhood
          </p>

          {/* Book Image Container with Slide-Up Animation */}
          <div 
            className={`relative mb-[1vh] transition-[transform,opacity] duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {/* Book Cover Image */}
            <img
              src="/book-landing-page-removebg-preview.png"
              alt="The First Bump - A New Mom's Pregnancy Guide"
              className="relative w-[35vw] max-w-36 min-w-28 h-auto"
            />
          </div>

          {/* E-Book Label - Separate from book container */}
          <p className="text-center text-[3.5vw] sm:text-[14px] mb-[2vh]" style={{ color: '#ffffff' }}>
            Complete E-Book (PDF)
          </p>

          {/* Benefits List */}
          <div className="space-y-0 mb-[1.5vh]">
            <div className="flex items-center gap-2">
              <Check className="w-[4vw] h-[4vw] max-w-4 max-h-4 min-w-3 min-h-3" style={{ color: '#ffffff' }} strokeWidth={2.5} />
              <span className="italic text-[3.8vw] sm:text-[15px]" style={{ color: '#ffffff' }}>Instant PDF access</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-[4vw] h-[4vw] max-w-4 max-h-4 min-w-3 min-h-3" style={{ color: '#ffffff' }} strokeWidth={2.5} />
              <span className="italic text-[3.8vw] sm:text-[15px]" style={{ color: '#ffffff' }}>No subscriptions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-[4vw] h-[4vw] max-w-4 max-h-4 min-w-3 min-h-3" style={{ color: '#ffffff' }} strokeWidth={2.5} />
              <span className="italic text-[3.8vw] sm:text-[15px]" style={{ color: '#ffffff' }}>Read at your own pace</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="font-semibold px-[5vw] sm:px-6 py-2 rounded-full text-[3.8vw] sm:text-[15px] shadow-lg mb-[2vh] transition-all duration-300 hover:scale-105 border border-black"
            style={{
              backgroundColor: '#ffffff',
              color: '#2d2418'
            }}
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'InitiateCheckout');
              }
              setTimeout(() => {
                window.location.href = 'https://buy.stripe.com/3cIeVdcYG4YFdfw1m8gnK09';
              }, 300);
            }}
          >
            Get My Digital Copy
          </Button>

          {/* Promo Code Section */}
          <div className="text-center mb-[1.5vh] flex flex-col items-center">
            <p className="text-[3.5vw] sm:text-sm font-medium mb-1.5" style={{ color: '#ffffff' }}>
              {isPromoRevealed ? "Use Code at Checkout" : "Click to reveal 15% promo code"}
            </p>
            <Button
              onClick={() => setIsPromoRevealed(true)}
              className={`font-semibold px-4 py-1 h-auto rounded-full text-[3.2vw] sm:text-xs transition-all duration-300 ${!isPromoRevealed ? 'hover:scale-105 cursor-pointer' : 'cursor-default'}`}
              style={{ 
                backgroundColor: isPromoRevealed ? '#ffffff' : 'transparent',
                color: isPromoRevealed ? '#2d2418' : '#ffffff',
                border: '1.5px solid #ffffff'
              }}
            >
              {isPromoRevealed ? "BUMP1" : "Reveal Code"}
            </Button>
          </div>
        </div>
      </div>

      {/* Why This Book Section */}
      <WhyThisBookSection />

      {/* Discover Section */}
      <DiscoverSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Sticky CTA Button */}
      <StickyCtaButton />
    </>
  );
};

export default Index;