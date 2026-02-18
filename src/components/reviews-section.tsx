"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    text: "I didn't expect much, but this book touched me deeply. It's like having a wise teacher guiding you back to balance.",
    author: "Mark Williams, 45",
    bgColor: "#2D3A2B",
    textColor: "#ffffff"
  },
  {
    text: "The First Bump gave me the confidence I needed during my pregnancy. Every chapter felt like it was written just for me.",
    author: "Sarah Chen, 32",
    bgColor: "#E8E6DC",
    textColor: "#3d4a3a"
  },
  {
    text: "Finally, a pregnancy guide that doesn't overwhelm you with fear. This book is calming, practical, and beautifully written.",
    author: "Jessica Martinez, 28",
    bgColor: "#2D3A2B",
    textColor: "#ffffff"
  },
  {
    text: "I wish I had this book during my first pregnancy. It's the perfect blend of science and emotional support.",
    author: "Emily Thompson, 35",
    bgColor: "#E8E6DC",
    textColor: "#3d4a3a"
  },
  {
    text: "This isn't just a pregnancy book—it's a companion for the entire journey. I've recommended it to all my friends.",
    author: "Rachel Kim, 30",
    bgColor: "#2D3A2B",
    textColor: "#ffffff"
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
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
          Discover how <span className="italic">How To Do The Work</span> is changing lives—one page at a time.
        </p>

        {/* Review Card */}
        <div 
          className="rounded-3xl p-8 mb-8 transition-all duration-500 ease-in-out"
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
    </div>
  );
};

export default ReviewsSection;