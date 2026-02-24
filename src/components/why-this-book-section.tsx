"use client";

const WhyThisBookSection = () => {
  return (
    <div 
      className="w-full pt-8 pb-16 px-6"
      style={{ 
        background: 'linear-gradient(180deg, #EAEEE2 0%, #DBE2CC 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 300,
        letterSpacing: '-0.02em',
      }}
    >
      <div className="max-w-md mx-auto space-y-6">
        {/* First Paragraph */}
        <p 
          className="text-center text-xl sm:text-2xl font-normal"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.15'
          }}
        >
          You're excited. You're terrified. You're Googling symptoms at 2am and wondering if what you're feeling is normal — yet no one seems to give you a straight answer.
        </p>

        {/* Second Paragraph */}
        <p 
          className="text-center text-xl sm:text-2xl font-normal"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.15'
          }}
        >
          Pregnancy advice today is overwhelming, contradictory, and often fear-based. But your body and mind deserve something calmer. Something clearer. Something real.
        </p>

        {/* Third Paragraph */}
        <p 
          className="text-center text-xl sm:text-2xl font-medium"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.15'
          }}
        >
          This isn't a step-by-step to-do list. It's a grounded, emotionally supportive guide written specifically for first-time mothers — designed to replace confusion with clarity and fear with confidence.
        </p>
      </div>
    </div>
  );
};

export default WhyThisBookSection;