import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import MenuPreviewSection from '@/components/sections/menu-preview-section';
import GallerySection from '@/components/sections/gallery-section';
import ReviewsSection from '@/components/sections/reviews-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuPreviewSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}