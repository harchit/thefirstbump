import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const sfProFont = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

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
          <span className="text-[28px] italic block" style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif" }}>A First Timer's Pregnancy Guide</span>
        </h1>

        {/* Subheading */}
        <p className="text-center font-medium text-[13px] mb-5 max-w-[280px] leading-tight" style={{ color: '#ffffff' }}>
          The No-BS, emotionally validating pregnancy blueprint for your journey into motherhood
        </p>

        {/* Book Image Container */}
        <div className="relative mb-4">
          {/* Book with 3D effect */}
          <div className="relative" style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}>
            {/* Book Shadow */}
            <div 
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 h-6 rounded-full blur-lg"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            />
            
            {/* Book Cover */}
            <div 
              className="relative w-40 h-56 rounded-md overflow-hidden shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, #e8dcc8 0%, #d4c4a8 50%, #c9b898 100%)',
                border: '1px solid rgba(180, 160, 120, 0.5)'
              }}
            >
              {/* Book Inner Content */}
              <div className="p-3 h-full flex flex-col">
                {/* Title */}
                <div className="text-center mb-1">
                  <h3 className="font-bold text-xs tracking-widest" style={{ color: '#5a4a35' }}>THE FIRST</h3>
                  <h3 className="font-bold text-base tracking-wider" style={{ color: '#5a4a35' }}>BUMP</h3>
                </div>
                
                {/* Decorative line */}
                <div className="w-16 h-px mx-auto mb-1" style={{ backgroundColor: '#a08860' }} />
                
                {/* Image */}
                <div className="flex-1 flex items-center justify-center my-1">
                  <div 
                    className="w-[85px] h-[100px] rounded overflow-hidden"
                    style={{ 
                      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(160, 140, 100, 0.3)'
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1559734840-f9509ee5677f?w=200&h=250&fit=crop"
                      alt="Pregnancy"
                      className="w-full h-full object-cover"
                      style={{ filter: 'sepia(40%) brightness(1.1)' }}
                    />
                  </div>
                </div>
                
                {/* Subtitle */}
                <div className="text-center mt-1">
                  <p className="text-[7px] italic leading-tight mb-1" style={{ color: '#6b5a3d', fontFamily: "'Playfair Display', serif" }}>
                    A First Timer's Pregnancy Guide
                  </p>
                  <div className="w-10 h-px mx-auto mb-1" style={{ backgroundColor: '#a08860' }} />
                  <p className="font-semibold text-[10px] tracking-wide" style={{ color: '#5a4a35' }}>SARAH JENKINS</p>
                </div>
              </div>
              
              {/* Book Spine Effect */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1.5"
                style={{ background: 'linear-gradient(90deg, rgba(160, 140, 100, 0.6) 0%, transparent 100%)' }}
              />
            </div>
          </div>
          
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
          className="font-semibold px-8 py-2.5 rounded-full text-[13px] shadow-lg mb-5 transition-all duration-300 hover:scale-105 border border-black"
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
            className="px-6 py-1.5 rounded-full backdrop-blur-md border border-white/20 mb-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          >
            <p 
              className="text-[32px] font-light leading-none" 
              style={{ color: '#ffffff', fontFamily: sfProFont }}
            >
              $10.99
            </p>
          </div>
          <p className="text-[16px] font-medium" style={{ color: '#ffffff' }}>
            Normally <span className="line-through ml-1" style={{ color: '#22c55e' }}>$16.99</span>
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