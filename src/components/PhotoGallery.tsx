
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const PhotoGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      caption: "Beautiful moments deserve to be captured ✨"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", 
      caption: "Every smile tells a story 💫"
    },
    {
      url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      caption: "Like stars in the night sky, you shine bright ⭐"
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      caption: "Creating magic wherever you go ✨"
    }
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-dancing text-5xl md:text-6xl mb-4 text-purple-800 animate-fade-in-up">
          Beautiful Memories
        </h2>
        <p className="text-purple-600 mb-12 text-lg">
          A collection of moments that capture your beautiful spirit
        </p>

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
          <div className="relative h-96 md:h-[500px]">
            <img
              src={photos[currentPhoto].url}
              alt={`Memory ${currentPhoto + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Navigation buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-white text-lg font-medium drop-shadow-lg">
                {photos[currentPhoto].caption}
              </p>
            </div>
          </div>

          {/* Photo indicators */}
          <div className="p-6 bg-white">
            <div className="flex justify-center gap-3 mb-4">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPhoto === index 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-purple-200 hover:bg-purple-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <Camera className="w-5 h-5" />
              <span className="text-sm">
                {currentPhoto + 1} of {photos.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
