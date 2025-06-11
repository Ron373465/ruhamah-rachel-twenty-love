
import { Heart, Stethoscope } from 'lucide-react';

const WishesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl mb-6 text-purple-800 animate-fade-in-up">
            Our Wishes for You
          </h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            As you begin this new chapter of your life, here are our heartfelt wishes for your journey ahead
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-purple-600 opacity-5" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-rose-400 to-purple-600 flex items-center justify-center text-white animate-heart-beat">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="font-dancing text-4xl font-semibold text-center mb-8 text-purple-800">
                With All Our Love
              </h3>
              <p className="text-xl leading-relaxed text-purple-700 text-center max-w-2xl mx-auto">
                May this new year of your life be filled with endless possibilities, beautiful moments, 
                and all the happiness your heart can hold. You deserve every wonderful thing that life has to offer.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-600 opacity-5" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-teal-600 flex items-center justify-center text-white animate-float">
                <Stethoscope className="w-10 h-10" />
              </div>
              <h3 className="font-dancing text-4xl font-semibold text-center mb-8 text-blue-800">
                Your Dream to Become a Doctor
              </h3>
              <p className="text-xl leading-relaxed text-blue-700 text-center max-w-2xl mx-auto">
                We believe with all our hearts that you will achieve your dream of becoming an oncology doctor. 
                Your compassion, dedication, and brilliant mind will help you succeed in your studies and one day 
                bring hope and healing to countless lives. Keep pursuing your dreams - the world needs future doctors like you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
