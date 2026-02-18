"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    text: "I bought this during my first trimester when I was googling every little symptom. This book honestly helped me stop spiraling. It explains what's normal without being dramatic, and I felt calmer after almost every chapter.",
    author: "Emily R., 29",
    bgColor: "#2D3A2B",
    textColor: "#ffffff"
  },
  {
    text: "As a first-time mom, I wanted something evidence-based but not cold or clinical. This struck the perfect balance. The sections on anxiety and decision-making around testing were especially helpful for me.",
    author: "Samantha L., 34",
    bgColor: "#E8E6DC",
    textColor: "#3d4a3a"
  },
  {
    text: "I appreciated how structured it is. Each chapter is clear and easy to reference when something new pops up. The red flag sections are straightforward without being scary, which I really needed.",
    author: "Danielle M., 31",
    bgColor: "#2D3A2B",
    textColor: "#ffffff"
  },
  {
    text: "This felt like guidance from a very rational, very kind friend. It doesn't sugarcoat things, but it doesn't make you panic either. I felt more prepared walking into my third trimester because of it.",
    author: "Priya S., 27",
    bgColor: "#E8E6DC",
    textColor: "#3d4a3a"
  },
  {
    text: "I've read other pregnancy books that felt overwhelming. This one is calm and organized. I liked that it focuses on what actually matters and doesn't overload you with unnecessary details.",
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
          className="text-4xl sm:text-5xl font-light text-center mb-3"
          style={{ 
            color: '#3d4a3a',
            lineHeight: '1.1',
            letterSpacing: '-0.03em'
          }}
        >
          Over 100,000 Readers Worldwide
        </h2>

        {/* Subheading */}
        <p 
          className="text-center text-base sm:text-lg mb-12"
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
        <div className="overflow-hidden mb-8">
          <div 
            key={currentIndex}
            className={`rounded-3xl p-8 ${
              direction === 'right' 
                ? 'animate-slide-in-right' 
                : 'animate-slide-in-left'
            }`}
            style={{ 
              backgroundColor: currentReview.bgColor,
              minHeight: '200px'
            }}
          >
            <blockquote 
              className="text-lg sm:text-xl mb-4"
              style={{ 
                color: currentReview.textColor,
                lineHeight: '1.5',
                fontWeight: 300
              }}
            >
              "{currentReview.text}"
            </blockquote>
            <p 
              className="text-base italic"
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