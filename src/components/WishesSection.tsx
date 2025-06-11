
import { useState } from 'react';
import { Sparkles, Star, Heart, Gift2 } from 'lucide-react';

const WishesSection = () => {
  const [selectedWish, setSelectedWish] = useState(0);

  const wishes = [
    {
      icon: Heart,
      title: "Love & Happiness",
      wish: "May your heart always be filled with love, and may happiness follow you wherever you go. You deserve all the beautiful things life has to offer.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Star,
      title: "Dreams Come True",
      wish: "May all your dreams take flight and your goals become reality. The world is yours to explore, and I believe in everything you can achieve.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Sparkles,
      title: "Adventures Await",
      wish: "May this new year bring you incredible adventures, amazing experiences, and memories that will last a lifetime. Go out there and shine!",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Gift2,
      title: "Endless Joy",
      wish: "May every day bring you reasons to smile, moments to cherish, and people who love you just as much as you deserve to be loved.",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-dancing text-5xl md:text-6xl text-center mb-16 text-purple-800 animate-fade-in-up">
          Birthday Wishes for You
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Wish cards */}
          <div className="space-y-4">
            {wishes.map((wish, index) => {
              const IconComponent = wish.icon;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedWish(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedWish === index
                      ? 'bg-white shadow-xl border-2 border-purple-300'
                      : 'bg-white/50 hover:bg-white/80 border border-purple-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${wish.color} flex items-center justify-center text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800">
                      {wish.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected wish display */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
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
