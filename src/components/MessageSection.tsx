
import { Heart, Star, Sparkles, Crown } from 'lucide-react';

const MessageSection = () => {
  const qualities = [
    {
      icon: Heart,
      title: "Your Beautiful Heart",
      message: "The way you care for others and spread love wherever you go is truly magical. Your compassion and kindness make the world a better place.",
      gradient: "from-rose-400 to-pink-500"
    },
    {
      icon: Star,
      title: "Your Bright Spirit",
      message: "You have this amazing ability to light up any room you enter. Your positive energy and radiant smile are gifts to everyone who knows you.",
      gradient: "from-purple-400 to-violet-500"
    },
    {
      icon: Sparkles,
      title: "Your Unique Magic",
      message: "There's something truly special about you - the way you see the world, your dreams, your laughter. You bring magic to ordinary moments.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Crown,
      title: "Your Amazing Strength",
      message: "The grace with which you handle challenges and the determination you show in pursuing your dreams is absolutely inspiring.",
      gradient: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl mb-6 text-purple-800 animate-fade-in-up">
            What Makes You Special
          </h2>
          <p className="text-xl text-purple-600 max-w-2xl mx-auto">
            Today we celebrate all the wonderful things that make you uniquely you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {qualities.map((quality, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${quality.gradient} rounded-full flex items-center justify-center mb-4 animate-float`}>
                  <quality.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-dancing text-2xl font-semibold text-purple-800 mb-4">
                  {quality.title}
                </h3>
              </div>
              <p className="text-purple-700 leading-relaxed text-center">
                {quality.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
