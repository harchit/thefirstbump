"use client";

import { useState, useEffect } from "react";

interface SlotCounterProps {
  initialValue: number;
}

const SlotCounter = ({ initialValue }: SlotCounterProps) => {
  const [count, setCount] = useState(initialValue);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayDigits, setDisplayDigits] = useState<string[]>(initialValue.toLocaleString().split(''));

  useEffect(() => {
    let intervalIndex = 0;
    const intervals = [3000, 4000];

    const incrementCount = () => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCount(prev => {
          const newCount = prev + 1;
          setDisplayDigits(newCount.toLocaleString().split(''));
          return newCount;
        });
        setIsAnimating(false);
      }, 300);
    };

    const scheduleNext = () => {
      const delay = intervals[intervalIndex % intervals.length];
      intervalIndex++;
      return setTimeout(() => {
        incrementCount();
        timerId = scheduleNext();
      }, delay);
    };

    let timerId = scheduleNext();

    return () => clearTimeout(timerId);
  }, []);

  return (
    <span className="inline-flex overflow-hidden">
      {displayDigits.map((digit, index) => (
        <span
          key={`${index}-${digit}`}
          className={`inline-block transition-transform duration-300 ease-out ${
            isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
          style={{
            transitionDelay: `${index * 30}ms`
          }}
        >
          {digit}
        </span>
      ))}
    </span>
  );
};

export default SlotCounter;