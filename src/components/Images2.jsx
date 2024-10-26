import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Images2 = () => {
  const slides = [
    {
      url: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1729884743/shoot1_mmlziy.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1729884743/DBA_11-10-20242136_mxvtfr.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dribsk7iy/image/upload/v1729884742/DBA_11-10-20242109_robfzq.jpg',
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
        <div className=' h-[75%] bg-[#f0f0f0] rounded-2xl overflow-hidden shadow-lg'>
          <img
            src={slides[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className='w-full h-full object-contain'
          />
        </div>
        
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[40%]  left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} aria-label="Previous slide" />
        </div>
        
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[40%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} aria-label="Next slide" />
        </div>
        
        {/* Dots for navigation */}
        <div className='flex justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled 
                className={`transition-all duration-300 ${currentIndex === slideIndex ? 'text-gray-600 scale-150' : 'text-gray-400'}`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images2;


