import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Carousel = () => {
 
  const images = [
    { src: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1730386078/IMG_9186_fbwryb.jpg', alt: 'Image 1' },
    { src: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1730386779/IMG_9184_1_bgvhnk.jpg', alt: 'Image 2' },
    { src: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1730386080/IMG_9185_kflgav.jpg', alt: 'Image 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

 

  return (
    <div className="relative  max-w-sm mx-auto h-[575px] overflow-hidden sm:mt-[56px] lg:mt-1  ">
      <div 
        className="flex transition-transform ease-out duration-500  " 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
             
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-[550px] object-contain flex-shrink-0 rounded-md py-3 "
          />
        
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Previous image"
      >
        <BsChevronCompactLeft className="w-10 h-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Next image"
      >
        <BsChevronCompactRight className="w-10 h-10" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2  ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;