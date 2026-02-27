"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFadeInOnScroll } from "@/hooks/use-fade-in-on-scroll";

const reviews = [
  {
    text: "I stopped Googling every symptom after reading this. It made me feel calm and informed instead of anxious.",
    author: "Emily R., 29",
    bgColor: "#2D3A2B",
    textColor: "#ffffff"
  },
  {
    text: "Clear, evidence-based, and reassuring. Exactly what I wanted as a first-time mom.",
    author: "Samantha L., 34",
    bgColor: "#E8E6DC",
    textColor: "#3d4a3a"
  },
  {
    text: "So organized and easy to reference. The red flag sections were especially helpful.",
    author: "Danielle M., 31",
    bgColor: "#2D3A2B",
    textColor: "#ffffff"
  },
  {
    text: "It felt grounded and honest. I actually felt more prepared after finishing it.",
    author: "Priya S., 27",
    bgColor: "#E8E6DC",
    textColor: "#3d4a3a"
  },
  {
    text: "Practical, calm, and not overwhelming. I wish I had this earlier in my pregnancy.",
    author: "Hannah T., 36",
    bgColor: "#2D3A2B",
    textColor: "#ffffff"
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  
  const sectionFade = useFadeInOnScroll(0.1, 0);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div 
      className="w-full pt-8 pb-16 px-6"
      style={{ 
        backgroundColor: '#FFFFFF',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div 
        ref={sectionFade.ref}
        className={`max-w-md mx-auto transition-all duration-700 ease-out ${
          sectionFade.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Heading */}
        <h2 
          className="text-4xl sm:text-5xl font-light text-center mb-3"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.1',
            letterSpacing: '-0.03em'
          }}
        >
          Over 1,100 First-Time Mom Readers
        </h2>

        {/* Subheading */}
        <p 
          className="text-center text-base sm:text-lg mb-10"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.4',
            letterSpacing: '-0.01em',
            fontWeight: 300
          }}
        >
          Discover how <span className="italic">The First Bump</span> is changing lives—one page at a time.
        </p>

        {/* Review Card Container with Overflow Hidden */}
        <div className="overflow-hidden mb-6 relative">
          <div 
            key={currentIndex}
            className={`rounded-2xl p-6 transition-transform duration-300 ease-in-out ${
              isAnimating 
                ? slideDirection === 'right' 
                  ? '-translate-x-full' 
                  : 'translate-x-full'
                : 'translate-x-0'
            }`}
            style={{ 
              backgroundColor: currentReview.bgColor,
              minHeight: '140px'
            }}
          >
            <blockquote 
              className="text-base sm:text-lg mb-3"
              style={{ 
                color: currentReview.textColor,
                lineHeight: '1.5',
                fontWeight: 300
              }}
            >
              "{currentReview.text}"
            </blockquote>
            <p 
              className="text-sm italic"
              style={{ 
                color: currentReview.textColor,
                fontWeight: 400
              }}
            >
              {currentReview.author}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-3">
          <Button
            onClick={goToPrevious}
            className="w-9 h-9 rounded-full p-0 transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: '#2D3A2B',
              color: '#ffffff'
            }}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={goToNext}
            className="w-9 h-9 rounded-full p-0 transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: '#2D3A2B',
              color: '#ffffff'
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Support Email */}
        <p 
          className="text-center text-sm mt-8"
          style={{ 
            color: '#3d4a3a',
            opacity: 0.7,
            fontWeight: 300
          }}
        >
          For issues, email support@thefirstbump.com
        </p>
      </div>
    </div>
  );
};

export default ReviewsSection;