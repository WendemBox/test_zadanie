import React, { useState } from 'react';

const reviewsData = [
    {
      id: 1,
      name: 'Иван Иванов',
      city: 'Москва',
      text: 'Отличный продукт, все работает как ожидалось. Спасибо!',
      logo: 'https://avatars.mds.yandex.net/i?id=819bed8c0bdc92f9f6c3bd7697ff838a16ba0e31-9065769-images-thumbs&n=13', 
    },
    {
      id: 2,
      name: 'Анна Петрова',
      city: 'Санкт-Петербург',
      text: 'Просто великолепно! Никогда не видела такого качества.',
      logo: 'https://avatars.mds.yandex.net/i?id=819bed8c0bdc92f9f6c3bd7697ff838a16ba0e31-9065769-images-thumbs&n=13', 
    },

    {
        id: 3,
        name: 'Алексей Петров',
        city: 'Санкт-Петербург',
        text: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, neque nobis expedita ad similique sed. Ea deserunt quidem provident atque quae maxime, dignissimos omnis aperiam molestias suscipit nesciunt dolor consequuntur?',
        logo: 'https://avatars.mds.yandex.net/i?id=819bed8c0bdc92f9f6c3bd7697ff838a16ba0e31-9065769-images-thumbs&n=13', 
      },
      {
        
        id: 4,
        name: 'Анна Петрова',
        city: 'Санкт-Петербург',
        text: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, neque nobis expedita ',
        logo: 'https://avatars.mds.yandex.net/i?id=819bed8c0bdc92f9f6c3bd7697ff838a16ba0e31-9065769-images-thumbs&n=13',
      },

  ];
  function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % reviewsData.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
    };
  
    const getVisibleSlidesCount = () => {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    };
  
    const visibleSlidesCount = getVisibleSlidesCount();
  
    return (
        <div className="lg:px-32 pb-10 p-4 relative">
       <button className="hidden lg:block absolute top-1/3 p-16 -translate-y-1/2 left-2  z-10" onClick={prevSlide}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:text-blue-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

      </button>
      <button className=" hidden lg:block absolute top-1/3 p-16 -translate-y-1/2 right-2  z-10" onClick={nextSlide}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:text-blue-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

      </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

            {reviewsData.map((review, index) => (
              <div
                key={review.id}
                className={`p-4 bg-white shadow-lg rounded-sm ${
                  (index >= currentSlide && index < currentSlide + visibleSlidesCount) ? 'block' : 'hidden'
                }`}
              >

                <div className="flex items-center mb-2">
                  <img src={review.logo} alt={review.name} className="w-8 h-8 rounded-full mr-2" />
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-[#83898f]">{review.city}</p>
                  </div>
                </div>
                <p className="text-gray-800">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center space-x-2 mt-10">
            {reviewsData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  (index >= currentSlide && index < currentSlide + visibleSlidesCount) ? 'bg-blue-500' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Slider;
