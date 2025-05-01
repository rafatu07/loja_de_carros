import HeroSection from '@/components/HeroSection';
import FeaturedCars from '@/components/FeaturedCars';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Categories from '@/components/Categories';
import SearchFilters from '@/components/SearchFilters';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchFilters />
      <FeaturedCars />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
