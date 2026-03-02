"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const SnippetModal = ({ isOpen, onClose, pdfUrl }: SnippetModalProps) => {
  if (!isOpen) return null;

  const stripeUrl = 'https://buy.stripe.com/8x2bJ14sa4YFgrI0i4gnK0d';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full h-[90vh] p-0 flex flex-col bg-white rounded-lg shadow-2xl">
        <DialogHeader className="p-4 border-b flex-shrink-0">
          <DialogTitle className="text-lg font-medium text-gray-800">Chapter Snippet</DialogTitle>
        </DialogHeader>
        <div className="flex-grow p-2 bg-gray-100">
          <iframe
            src={`${pdfUrl}#view=Fit`}
            className="w-full h-full border-0"
            title="Snippet Preview"
          />
        </div>
        <div className="p-6 border-t bg-gray-50 text-center flex-shrink-0">
          <p className="text-lg font-medium mb-4 text-slate-800">
            Like what you're reading? Download the full guide below
          </p>
          <Button
            className="font-semibold px-8 py-3 rounded-full text-base shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#2d3a2b',
              color: '#ffffff'
            }}
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'InitiateCheckout');
              }
              if (window.ttq) {
                window.ttq.track('InitiateCheckout');
              }
              setTimeout(() => {
                window.location.href = stripeUrl;
              }, 300);
            }}
          >
            Get Instant Access
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SnippetModal;