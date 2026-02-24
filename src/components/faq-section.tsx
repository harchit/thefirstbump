"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What's Inside?",
    answer: "The First Bump is a comprehensive pregnancy guide designed specifically for first-time mothers. It provides trimester-by-trimester guidance, emotional support tools, and evidence-based information to help you navigate your pregnancy journey with confidence and calm."
  },
  {
    question: "How Do I Access it?",
    answer: "After purchase, you'll receive instant access to download the PDF version of The First Bump. You can read it on any device—phone, tablet, or computer—and refer back to it whenever you need guidance throughout your pregnancy."
  },
  {
    question: "What Do I Walk Away With?",
    answer: "You'll gain clarity on what's happening in your body each trimester, learn to manage pregnancy anxiety, make confident decisions about testing and birth options, and feel prepared for labor and early motherhood. Many readers report feeling calmer and more informed after reading."
  },
  {
    question: "What Makes it Unique?",
    answer: "The First Bump stands out because it combines science-backed information with emotional validation. It's not fear-based or overwhelming—it's practical, organized, and written with the understanding that first-time mothers need both facts and reassurance."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div 
        className="w-full py-16 px-6"
        style={{ 
          backgroundColor: '#2D3A2B',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div className="max-w-md mx-auto">
          {/* Heading */}
          <h2 
            className="text-4xl sm:text-5xl font-light mb-4"
            style={{ 
              color: '#ffffff',
              lineHeight: '1.1',
              letterSpacing: '-0.03em'
            }}
          >
            Frequently{' '}
            <span 
              className="italic"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#FBFE87'
              }}
            >
              asked
            </span>
            {' '}questions
          </h2>

          {/* Subheading */}
          <p 
            className="text-base sm:text-lg mb-10"
            style={{ 
              color: '#ffffff',
              lineHeight: '1.4',
              letterSpacing: '-0.01em',
              fontWeight: 300,
              opacity: 0.9
            }}
          >
            Everything you need to know about the book
          </p>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b-2"
                style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-6 flex items-center justify-between text-left transition-all duration-300"
                >
                  <span 
                    className="text-lg sm:text-xl font-light pr-4"
                    style={{ 
                      color: '#ffffff',
                      lineHeight: '1.4'
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    style={{ color: '#ffffff' }}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p 
                    className="text-base sm:text-lg"
                    style={{ 
                      color: '#ffffff',
                      lineHeight: '1.5',
                      fontWeight: 300,
                      opacity: 0.85
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full py-8 px-6 bg-white"
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div className="max-w-md mx-auto flex justify-center items-center space-x-6 sm:space-x-8">
          <a href="#" className="text-base text-gray-700 hover:text-black transition-colors">Home</a>
          <a href="#" className="text-base text-gray-700 hover:text-black transition-colors">About Us</a>
          <a href="#" className="text-base text-gray-700 hover:text-black transition-colors">Terms Of Service</a>
        </div>
      </div>
    </>
  );
};

export default FaqSection;