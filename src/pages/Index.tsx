
import HeroSection from '@/components/HeroSection';
import MessageSection from '@/components/MessageSection';
import DoctorJourneySection from '@/components/DoctorJourneySection';
import WishesSection from '@/components/WishesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MessageSection />
      <DoctorJourneySection />
      <WishesSection />
      <Footer />
    </div>
  );
};

export default Index;
