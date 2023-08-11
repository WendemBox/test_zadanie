import React, { useState } from 'react';
import bgPhoto from '../assets/lanch.jpg'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bgPhoto})`}}>
    <div
      style={!isMenuOpen? (
        {backgroundColor: 'rgba(57, 125, 255, 0.8)',
      }) : {background: 'white'}}
    >
     
      <div className="container mx-auto py-4 lg:px-32 md:px-4 px-4 text-white">
        <div className="flex justify-between items-center">
        <div className="flex items-center">
  <div className="w-4 h-4 bg-blue-500 rounded-full absolute" style={{marginLeft: '-10px'}}></div>
  <div className="w-4 h-4 bg-[#f6f8fa] rounded-full "></div>
  <span className={!isMenuOpen?("font-semibold ml-2 text-lg ") : "font-semibold ml-2 text-lg text-black"}>testLab</span>
</div>
          <div className="hidden lg:flex space-x-4">
            {/* Ссылки меню */}
            <a
              href="#"
              className="hover:border-b-2 transition-opacity duration-300 ease-in-out"
            >
              Как это работает
            </a>
            <a
              href="#"
              className="hover:border-b-2 transition-opacity duration-300 ease-in-out"
            >
              3-й блок
            </a>
            <a
              href="#"
              className="hover:border-b-2 transition-opacity duration-300 ease-in-out "
            >
              Вопросы и ответы
            </a>
            <a
              href="#"
              className="hover:border-b-2 transition-opacity duration-300 ease-in-out "
            >
              Форма
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden  transition-opacity duration-300 ease-in-out "
          >
            {!isMenuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>) : (
  <svg
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  viewBox="0 0 24 24"
  stroke="black"
  className="w-6 h-6"
     xmlns="http://www.w3.org/2000/svg"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  d="M6 18L18 6M6 6l12 12"
/>
</svg>
)}
          </button>
        </div>
        {isMenuOpen && (

  <div className="lg:hidden container absolute left-0 right-0 bg-white w-full h-screen mt-4">
    <div className='flex justify-between items-center p-4 border-b-2 '>
  <a
    href="#"
    className="text-start text-[#83898f] transition-opacity duration-300 ease-in-out block py-4"
  >
    Как это работает
  </a>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#83898f" className="w-7 h-7 hover:text-blue-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</div>
<div className='flex justify-between items-center p-4 border-b-2 '>
  <a
    href="#"
    className="text-start text-[#83898f] transition-opacity duration-300 ease-in-out block py-4"
  >
    3-й блок
  </a>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#83898f" className="w-7 h-7 hover:text-blue-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</div>
<div className='flex justify-between items-center p-4 border-b-2 '>
  <a
    href="#"
    className="text-start text-[#83898f] transition-opacity duration-300 ease-in-out block py-4"
  >
    Вопросы и ответы
  </a>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#83898f" className="w-7 h-7 hover:text-blue-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</div>
<div className='flex justify-between items-center p-4 border-b-2 '>
  <a
    href="#"
    className="text-start text-[#83898f] transition-opacity duration-300 ease-in-out block py-4"
  >
    Форма
  </a>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#83898f" className="w-7 h-7 hover:text-blue-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</div>
  </div>
)}


      </div>
      <div className='flex flex-col items-center text-center mt-64'>
      <h4 className='text-white text-2xl lg:text-6xl md:text-4xl font-semibold px-4'>Говорят, никогда не поздно </h4>
      <h4 className='text-white text-2xl lg:text-6xl md:text-4xl font-semibold px-4'>сменить профессию</h4>
      <span className='text-white text-sm my-6'>Сделай круто тестовое задание и у тебя получится</span>
      <button className='text-black my-16 font-bold rounded-sm my' style={{padding: '0.5rem 1rem', background: 'white'}}> Проще простого!</button>
      </div>
    </div>
    </div>
  );
}

export default Header;
