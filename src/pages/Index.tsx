"use client";

import HeroSection from "@/components/hero-section";
import WhyThisBookSection from "@/components/why-this-book-section";
import SectionDivider from "@/components/SectionDivider";
import DiscoverSection from "@/components/discover-section";
import ReviewsSection from "@/components/reviews-section";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhyThisBookSection />
      <SectionDivider />
      <DiscoverSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
};

export default Index;