import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const sfProFont = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#c9a87c' }}>
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
      <div className="relative z-10 flex flex-col items-center px-5 py-6 min-h-screen">
        {/* Trust Badge */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full border-2 border-white/80 overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
                alt="Reader" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white/80 overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" 
                alt="Reader" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-sm" style={{ color: '#ffffff' }}>
            Trusted by <span className="font-semibold">7,500+ moms worldwide</span>
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-center mb-1 leading-tight">
          <span className="text-[32px] font-medium block" style={{ color: '#ffffff' }}>The First Bump</span>
          <span className="text-[28px] italic block" style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif" }}>A New Mom's Pregnancy Guide</span>
        </h1>

        {/* Subheading */}
        <p className="text-center font-medium text-[13px] mb-5 max-w-[280px] leading-tight" style={{ color: '#ffffff' }}>
          The No-BS, emotionally validating pregnancy blueprint for your journey into motherhood
        </p>

        {/* Book Image Container with Slide-Up Animation */}
        <div 
          className={`relative mb-4 transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {/* Book Shadow */}
          <div 
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 rounded-full blur-xl"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          />
          
          {/* Book Cover Image */}
          <img
            src="/book-cover.png"
            alt="The First Bump - A New Mom's Pregnancy Guide"
            className="relative w-44 h-auto drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
            }}
          />
          
          {/* E-Book Label */}
          <p className="text-center text-[14px] mt-3" style={{ color: '#ffffff' }}>
            Complete E-Book (PDF)
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-0 mb-3">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" style={{ color: '#ffffff' }} strokeWidth={2.5} />
            <span className="italic text-[15px]" style={{ color: '#ffffff' }}>Instant PDF access</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" style={{ color: '#ffffff' }} strokeWidth={2.5} />
            <span className="italic text-[15px]" style={{ color: '#ffffff' }}>No subscriptions</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" style={{ color: '#ffffff' }} strokeWidth={2.5} />
            <span className="italic text-[15px]" style={{ color: '#ffffff' }}>Read at your own pace</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className="font-semibold px-6 py-2 rounded-full text-[15px] shadow-lg mb-5 transition-all duration-300 hover:scale-105 border border-black"
          style={{ 
            backgroundColor: '#ffffff',
            color: '#2d2418'
          }}
        >
          Get My Digital Copy
        </Button>

        {/* Pricing */}
        <div className="text-center mb-3 flex flex-col items-center">
          <div 
            className="relative px-5 py-2 rounded-full backdrop-blur-xl mb-2 overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0.1) 100%)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
            }}
          >
            {/* Inner glow highlight at top */}
            <div 
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)'
              }}
            />
            
            <p 
              className="text-[32px] font-light leading-none relative z-10" 
              style={{ 
                color: '#ffffff', 
                fontFamily: sfProFont,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              $10.99
            </p>
          </div>
          <p className="text-[16px] font-medium" style={{ color: '#ffffff' }}>
            Normally <span className="line-through ml-1" style={{ color: '#991b1b' }}>$16.99</span>
          </p>
        </div>

        {/* Limited Time Offer */}
        <p className="text-lg italic font-medium" style={{ color: '#ffffff' }}>
          Limited-Time Offer- Ends Soon
        </p>
      </div>
    </div>
  );
};

export default Index;