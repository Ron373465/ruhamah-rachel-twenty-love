
import { Stethoscope, GraduationCap, Heart, Star, BookOpen, Award } from 'lucide-react';

const DoctorJourneySection = () => {
  const achievements = [
    {
      icon: BookOpen,
      title: "NEET Preparation",
      description: "Countless hours of dedication, studying, and perseverance through one of the toughest medical entrance exams.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Award,
      title: "NEET Success",
      description: "Your hard work paid off! Clearing NEET is a testament to your determination and brilliant mind.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: GraduationCap,
      title: "Medical Student",
      description: "Now embarking on the noble journey to become a doctor - a dream that's becoming reality.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Stethoscope,
      title: "Future Doctor",
      description: "Soon you'll be healing hearts and saving lives. The world needs more compassionate doctors like you.",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center animate-heart-beat">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="font-dancing text-5xl md:text-6xl text-center mb-6 text-blue-800 animate-fade-in-up">
            Dr. Ruhamah Rachel
          </h2>
          <p className="text-xl md:text-2xl text-blue-700 font-light max-w-3xl mx-auto leading-relaxed">
            Celebrating your incredible journey from NEET aspirant to future doctor. 
            Your dedication to healing and helping others is truly inspiring! 🩺✨
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center animate-float`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-blue-800 text-center mb-3">
                  {achievement.title}
                </h3>
                <p className="text-blue-600 text-sm text-center leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Special Message */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <Heart className="absolute top-4 left-8 text-white/20 w-6 h-6 animate-float" style={{ animationDelay: '0s' }} />
            <Star className="absolute top-8 right-12 text-white/20 w-8 h-8 animate-sparkle" style={{ animationDelay: '1s' }} />
            <GraduationCap className="absolute bottom-6 left-12 text-white/20 w-10 h-10 animate-float" style={{ animationDelay: '2s' }} />
            <Stethoscope className="absolute bottom-8 right-8 text-white/20 w-8 h-8 animate-sparkle" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="relative z-10">
            <h3 className="font-dancing text-3xl md:text-4xl font-semibold mb-6">
              "Healing Hearts, Changing Lives"
            </h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6">
              From the first day you decided to pursue medicine, through every late-night study session, 
              every practice test, and every moment of doubt you overcame - you've shown incredible strength. 
              NEET was just the beginning of your beautiful journey to become a healer.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/30">
              <p className="text-lg italic">
                "The best doctors are not just skilled with their hands, but healing with their hearts. 
                You have both, and the world is lucky to have you as a future doctor." 💙
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorJourneySection;
