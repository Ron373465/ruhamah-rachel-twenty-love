
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 birthday-gradient text-white text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-heart-beat">
          <Heart className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
        </div>
        
        <h2 className="font-dancing text-4xl md:text-5xl mb-6">
          Happy 20th Birthday, Ruhamah Rachel!
        </h2>
        
        <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
          You are loved, you are special, and you are going to do amazing things. 
          Here's to another year of being absolutely wonderful! 🎉
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/30">
          <p className="text-lg italic">
            "May your birthday be the beginning of a year filled with happy moments, 
            wonderful surprises, and all the love your heart can hold."
          </p>
        </div>
        
        <div className="mt-12 text-sm opacity-75">
          <p>Made with 💖 for the most amazing person</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
