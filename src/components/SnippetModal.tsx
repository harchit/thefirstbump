"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface SnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const SnippetModal = ({ isOpen, onClose, imageSrc }: SnippetModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('modal-toggle', { detail: { isOpen: true } }));
    } else {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new CustomEvent('modal-toggle', { detail: { isOpen: false } }));
    }
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[700px] max-h-[90vh] bg-white rounded-[16px] shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#3d4a3a]" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Image Preview */}
          <div className="flex justify-center mb-4">
            <img 
              src={imageSrc} 
              alt="Ebook Snippet" 
              className="w-full h-auto rounded-lg shadow-md"
              style={{ maxWidth: '100%' }}
            />
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4 pb-4">
            <h3 
              className="text-2xl font-semibold"
              style={{ color: '#3d4a3a', fontFamily: "'Playfair Display', serif" }}
            >
              Like what you’re reading?
            </h3>
            <p 
              className="text-base opacity-80"
              style={{ color: '#3d4a3a' }}
            >
              Get instant access to the full guide.
            </p>
            <button 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg transition-transform active:scale-95 shadow-lg"
              style={{ backgroundColor: '#2d3a2b' }}
              onClick={() => {
                if (window.fbq) window.fbq('track', 'InitiateCheckout');
                window.location.href = 'https://buy.stripe.com/8x2bJ14sa4YFgrI0i4gnK0d';
              }}
            >
              Get My Digital Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnippetModal;