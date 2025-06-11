
import { Heart, Cake, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white text-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-12 right-12 w-4 h-4 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-8 left-16 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <Star className="absolute top-16 left-1/3 text-white/10 w-6 h-6 animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute bottom-12 right-1/4 text-white/15 w-8 h-8 animate-sparkle" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8 flex justify-center gap-4">
          <div className="animate-heart-beat">
            <Heart className="w-12 h-12 text-yellow-300" />
          </div>
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <Cake className="w-12 h-12 text-yellow-300" />
          </div>
          <div className="animate-sparkle" style={{ animationDelay: '1s' }}>
            <Star className="w-12 h-12 text-yellow-300" />
          </div>
        </div>
        
        <h2 className="font-dancing text-4xl md:text-5xl mb-6">
          Happy 20th Birthday, Ruhamah Rachel!
        </h2>
        
        <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
          <p className="text-xl md:text-2xl font-light mb-6 leading-relaxed">
            Today we celebrate not just another year of your life, but another year of 
            the joy, love, and light you bring to everyone around you. 
          </p>
          <p className="text-lg italic">
            "May your birthday be as wonderful as you are, and may this new year 
            bring you everything your heart desires and more." 💖
          </p>
        </div>
        
        <div className="text-sm opacity-80 space-y-2">
          <p>Made with endless love and best wishes 🎂✨</p>
          <p className="text-xs opacity-70 lowercase">
            i know you don't like me but for me you are the most precious one...still i really like you
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
