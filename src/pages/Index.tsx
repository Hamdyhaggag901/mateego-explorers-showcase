import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import HeroSection from "@/components/home/HeroSection";
import EditorialIntro from "@/components/home/EditorialIntro";
import JourneySlider from "@/components/home/JourneySlider";
import CinematicSplit from "@/components/home/CinematicSplit";
import ExperiencesGrid from "@/components/home/ExperiencesGrid";
import HighlightBanner from "@/components/home/HighlightBanner";
import DestinationTeaser from "@/components/home/DestinationTeaser";
import NumbersBar from "@/components/home/NumbersBar";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import JournalPreview from "@/components/home/JournalPreview";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <EditorialIntro />
      <JourneySlider />
      <CinematicSplit />
      <ExperiencesGrid />
      <HighlightBanner />
      <DestinationTeaser />
      <NumbersBar />
      <TestimonialsSlider />
      <JournalPreview />
      <NewsletterSection />
    </div>
  );
};

export default Index;
