import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

const slides = [
  {
    url: 'https://images.pexels.com/photos/7876038/pexels-photo-7876038.jpeg',
    text: 'Very Good and Efficient in all that they commit to. Happy to have their services.',
  },
  {
    url: 'https://images.pexels.com/photos/10347141/pexels-photo-10347141.jpeg',
    text: 'Our association over time with Avsar has been a smooth affair. But that’s not the best part. It’s how they deal with adverse situations that sets them apart for us. Definitely recommend Avsar. ',
  },
  {
    url: 'https://images.pexels.com/photos/7518964/pexels-photo-7518964.jpeg',
    text: 'One stop solution for our staffing and recruitment needs. This Team proves age is no bar when stacking up against the competition. Good going and Good luck.',
  },
  {
    url: 'https://images.pexels.com/photos/8292793/pexels-photo-8292793.jpeg',
    text: 'Two words summing up Avsar: Efficient and Reliable. Thank You for having delivered on every one of your commitment.',
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  return (
    <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[450px] relative font-sans overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-full h-full bg-black/60 flex items-center justify-center p-4">
            <p className="text-white font-extrabold text-base sm:text-xl md:text-xl lg:text-3xl text-center max-w-5xl leading-snug">
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      {/* Prev Button */}
      <div
        onClick={prevSlide}
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-all z-20"
      >
        <ChevronLeft size={30} />
      </div>

      {/* Next Button */}
      <div
        onClick={nextSlide}
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-all z-20"
      >
        <ChevronRight size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-20">
        {slides.map((_, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="cursor-pointer">
            <Circle
              size={12}
              className={`transition-all duration-300 ${
                currentIndex === slideIndex
                  ? 'fill-white text-white'
                  : 'fill-white/50 text-white/50'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
