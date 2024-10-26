import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Images = () => {
  const slides = [
    {
      url: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1729277587/img4_g3irso.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1729277584/img3_hitxip.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1729277583/img1_iqikqo.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1729277583/img2_ngsoen.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='bg-[#f2f3f4] min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-[500px] aspect-[3/4] relative group'>
        <div className='w-full h-full rounded-2xl overflow-hidden shadow-lg'>
          <img
            src={slides[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className='w-full h-full object-contain rounded-2xl'
          />
        </div>
        
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[40%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} aria-label="Previous slide" />
        </div>
        
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[40%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} aria-label="Next slide" />
        </div>
        
        {/* Dots for navigation */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2'>
          {slides.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer focus:outline-none'
              aria-label={`Go to slide ${slideIndex + 1}`}
            >
              <RxDotFilled 
                className={`transition-all duration-300 ${currentIndex === slideIndex ? 'text-blue-500 scale-150' : 'text-gray-400'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;