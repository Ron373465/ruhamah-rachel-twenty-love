
import HeroSection from '@/components/HeroSection';
import MessageSection from '@/components/MessageSection';
import PhotoGallery from '@/components/PhotoGallery';
import WishesSection from '@/components/WishesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MessageSection />
      <PhotoGallery />
      <WishesSection />
      <Footer />
    </div>
  );
};

export default Index;
