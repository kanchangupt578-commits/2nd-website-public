import Hero from '@/src/components/home/Hero';
import Features from '@/src/components/home/Features';
import HomeTestimonials from '@/src/components/home/HomeTestimonials';
import GalleryPreview from '@/src/components/home/GalleryPreview';
import CTASection from '@/src/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <GalleryPreview />
      <HomeTestimonials />
      <CTASection />
    </main>
  );
}
