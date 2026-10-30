import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { RoomsSection } from "@/components/sections/rooms-section";
import { RiverSection } from "@/components/sections/river-section";
import { LeisureSection } from "@/components/sections/leisure-section";
import { BreakfastSection } from "@/components/sections/breakfast-section";
import { PetVipSection } from "@/components/sections/pet-vip-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { BookingSection } from "@/components/sections/booking-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { RulesSection } from "@/components/sections/rules-section";
import { FaqSection } from "@/components/sections/faq-section";
import { LocationSection } from "@/components/sections/location-section";
import { Footer } from "@/components/sections/footer";
import { FloatingBookingBar } from "@/components/ui/floating-booking-bar";
import { GlobalVideoBackground } from "@/components/ui/global-video-background";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050B07] text-white selection:bg-[#C29D59] selection:text-[#050B07] overflow-x-hidden">
      {/* Continuous Scrollytelling Video Canvas across the whole landing page */}
      <GlobalVideoBackground />

      <Header />
      <main className="relative z-10">
        <Hero />
        <ManifestoSection />
        <BreakfastSection />
        <RoomsSection />
        <RiverSection />
        <LeisureSection />
        <PetVipSection />
        <GallerySection />
        <BookingSection />
        <ReviewsSection />
        <RulesSection />
        <FaqSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingBookingBar />
    </div>
  );
}
