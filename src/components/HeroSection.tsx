
import { Heart, Star, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center birthday-gradient sparkle-bg overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-white/30 w-8 h-8 animate-float" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-40 right-20 text-white/20 w-6 h-6 animate-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-32 left-1/4 text-white/25 w-10 h-10 animate-float" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute top-60 left-1/3 text-white/30 w-6 h-6 animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute bottom-20 right-1/3 text-white/25 w-8 h-8 animate-sparkle" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-dancing text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white drop-shadow-2xl">
            Happy Birthday
          </h1>
          <h2 className="font-dancing text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 text-yellow-200 drop-shadow-xl">
            Ruhamah Rachel
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-heart-beat border-2 border-white/30">
              <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">20</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto text-white drop-shadow-lg">
            Today marks the beginning of another beautiful year in your incredible journey. 
            You light up every room you enter and bring joy to everyone around you. ✨
          </p>
          <div className="flex justify-center">
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 drop-shadow-lg">
              Scroll down for your surprises 💝
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
