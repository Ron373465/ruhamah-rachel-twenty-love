
import { useState } from 'react';
import { Heart, Star, Sparkles, Gift, Sun, Moon } from 'lucide-react';

const WishesSection = () => {
  const [selectedWish, setSelectedWish] = useState(0);

  const wishes = [
    {
      icon: Sun,
      title: "Endless Joy",
      wish: "May every sunrise bring you new reasons to smile and every sunset fill your heart with contentment. You deserve all the happiness in the world.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Heart,
      title: "Love & Connection",
      wish: "May you always be surrounded by people who appreciate your beautiful soul and may you continue to touch lives the way you've touched ours.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Star,
      title: "Dreams Coming True",
      wish: "May this new year of your life bring you closer to all your dreams. You have the strength and talent to achieve anything you set your mind to.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Sparkles,
      title: "Beautiful Adventures",
      wish: "May your path be filled with wonderful surprises, exciting adventures, and moments so beautiful they take your breath away.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Gift,
      title: "Abundant Blessings",
      wish: "May life continue to bless you with good health, amazing opportunities, and the wisdom to recognize how truly special you are.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Moon,
      title: "Peace & Serenity",
      wish: "May you always find peace in quiet moments and strength in challenging times. You are more resilient than you know.",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl mb-6 text-purple-800 animate-fade-in-up">
            Our Wishes for You
          </h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            As you begin this new chapter of your life, here are our heartfelt wishes for your journey ahead
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Wish selection buttons */}
          <div className="grid grid-cols-2 gap-4">
            {wishes.map((wish, index) => {
              const IconComponent = wish.icon;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedWish(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedWish === index
                      ? 'bg-white shadow-xl border-2 border-purple-300 scale-105'
                      : 'bg-white/70 hover:bg-white border border-purple-100'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${wish.color} flex items-center justify-center text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-800">
                      {wish.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected wish display */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sticky top-8 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${wishes[selectedWish].color} opacity-5`} />
            <div className="relative z-10">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${wishes[selectedWish].color} flex items-center justify-center text-white animate-heart-beat`}>
                {(() => {
                  const SelectedIconComponent = wishes[selectedWish].icon;
                  return <SelectedIconComponent className="w-10 h-10" />;
                })()}
              </div>
              <h3 className="font-dancing text-3xl font-semibold text-center mb-6 text-purple-800">
                {wishes[selectedWish].title}
              </h3>
              <p className="text-lg leading-relaxed text-purple-700 text-center">
                {wishes[selectedWish].wish}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
