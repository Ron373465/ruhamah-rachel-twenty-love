
import { Heart, Star, Sparkles, Gift } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-white/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <Gift className="absolute top-60 left-1/3 text-white/20 w-8 h-8 animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute bottom-20 right-1/3 text-white/20 w-10 h-10 animate-sparkle" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Age celebration */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-heart-beat border-2 border-white/30">
              <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">20</span>
            </div>
          </div>
          
          <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white drop-shadow-2xl">
            Happy Birthday
          </h1>
          <h2 className="font-dancing text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 text-yellow-200 drop-shadow-xl">
            Beautiful Ruhamah Rachel
          </h2>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-white/20 mb-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white drop-shadow-lg">
              Twenty years of bringing light to this world, and today we celebrate 
              the incredible person you've become. Your kindness, strength, and beautiful 
              soul inspire everyone around you. ✨
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium border border-white/30 drop-shadow-lg animate-pulse">
              🎉 Let's celebrate you! 🎂
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
