"use client";

const SectionSeparator = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 375 48"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M0 48H375V29.4867C375 29.4867 327.062 0 275.5 0C223.938 0 190.5 29.4867 190.5 29.4867C190.5 29.4867 135.5 0 87.5 0C39.5 0 0 29.4867 0 29.4867V48Z"
      fill="#FFFFFF"
    />
  </svg>
);

const WhyThisBookSection = () => {
  return (
    <div 
      className="w-full pt-8 px-6"
      style={{ 
        background: 'linear-gradient(180deg, #EAEEE2 0%, #DBE2CC 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 300,
        letterSpacing: '-0.02em',
      }}
    >
      <div className="max-w-md mx-auto space-y-6 pb-8">
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
      <SectionSeparator />
    </div>
  );
};

export default WhyThisBookSection;