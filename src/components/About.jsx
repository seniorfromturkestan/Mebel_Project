import  { useEffect, useState } from 'react';
import bg1 from '../img/home1.jpg';
import bg2 from '../img/bg2.jpg';
import bg3 from '../img/bg3.jpg';
import bg4 from '../img/bg4.jpg';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const About = () => {
  const slides = [
    {
      image: bg1,
      title: 'Лучшие товары для вашего дома',
      subtitle: 'по низким ценам',
    },
    {
      image: bg2,
      title: 'Oгромный выбор мебели',
      subtitle: 'для всей семьи',
    },
    {
      image: bg3,
      title: 'Товары высочайшего качества',
      subtitle: 'на любой вкус',
    },
    {
      image: bg4,
      title: 'Лучшие спальни',
      subtitle: 'по низким ценам',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
  
    return () => clearInterval(interval); 
  });

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="wrapper">
          <div className="relative w-full max-w-[1280px] mx-auto mt-32">
            <div className="relative flex items-center justify-center">
              <button
                className="absolute -left-10 z-10 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800 focus:outline-none"
                onClick={prevSlide}
              >
                <FaAngleLeft/>
              </button>
              <div className="w-full h-[500px] relative overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full bg-cover bg-center bg-blend-multiply bg-[#bcbcbc] transition-transform duration-300 ${
                      index === currentIndex
                        ? 'translate-x-0'
                        : direction === 'right'
                        ? 'translate-x-full'
                        : '-translate-x-full'
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute  w-full h-full"></div>
                    <span className="absolute text-white font-semibold w-[300px] top-[100px] left-[50px] text-4xl z-10">
                      {slide.title}
                    </span>
                    <span className="absolute text-white font-light w-[300px] top-[220px] left-[50px] text-lg z-10">
                      {slide.subtitle}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className="absolute -right-10 z-10 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800 focus:outline-none"
                onClick={nextSlide}
              >
                <FaAngleRight/>
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                  }}
                ></button>
              ))}
            </div>
          </div>
    </div>
  );
};

export default About;
