"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <div 
      className="w-full py-16 px-6"
      style={{ 
        backgroundColor: '#FFFFFF',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div className="max-w-md mx-auto">
        {/* Heading */}
        <h2 
          className="text-3xl sm:text-4xl font-light text-center mb-3"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.1',
            letterSpacing: '-0.03em'
          }}
        >
          Over 1,500 First-Time Mom Readers
        </h2>

        {/* Subheading */}
        <p 
          className="text-center text-sm sm:text-base mb-10"
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
        <div className="overflow-hidden mb-6">
          <div 
            key={currentIndex}
            className={`rounded-2xl p-6 ${
              direction === 'right' 
                ? 'animate-slide-in-right' 
                : 'animate-slide-in-left'
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
        <div className="flex justify-center gap-4">
          <Button
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full p-0 transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: '#2D3A2B',
              color: '#ffffff'
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={goToNext}
            className="w-12 h-12 rounded-full p-0 transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: '#2D3A2B',
              color: '#ffffff'
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ReviewsSection;