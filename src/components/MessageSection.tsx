
import { Heart, Gift, Cake } from 'lucide-react';

const MessageSection = () => {
  const messages = [
    {
      icon: Heart,
      title: "You are Loved",
      message: "Every single day, you bring so much love and happiness into this world. Your kindness, your smile, and your beautiful heart make everything better.",
      color: "bg-pink-500/10 border-pink-300"
    },
    {
      icon: Cake,
      title: "Celebrating You",
      message: "Today is all about celebrating the amazing person you are. Your strength, your dreams, and your incredible spirit inspire everyone around you.",
      color: "bg-purple-500/10 border-purple-300"
    },
    {
      icon: Gift,
      title: "A Year of Dreams",
      message: "As you turn 20, may this new year be filled with endless possibilities, beautiful moments, and all the dreams your heart desires coming true.",
      color: "bg-rose-500/10 border-rose-300"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-dancing text-5xl md:text-6xl text-center mb-16 text-purple-800 animate-fade-in-up">
          Messages from the Heart
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {messages.map((msg, index) => (
            <div 
              key={index}
              className={`${msg.color} p-8 rounded-3xl border-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-white/50 rounded-full flex items-center justify-center mb-4 animate-float">
                  <msg.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-dancing text-2xl font-semibold text-purple-800 mb-4">
                  {msg.title}
                </h3>
              </div>
              <p className="text-purple-700 leading-relaxed text-center">
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
