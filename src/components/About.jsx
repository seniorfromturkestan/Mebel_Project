import { useEffect, useState } from 'react';
import bg1 from '../img/home1.jpg';
import bg2 from '../img/bg2.jpg';
import bg3 from '../img/bg3.jpg';
import bg4 from '../img/bg4.jpg';
import bg5 from '../img/mebelNY.jpg';
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
      title: 'Всегда лучшие спальни',
      subtitle: 'по низким ценам',
    },
    {
      image: bg5,
      title: 'Новогодняя распродажа мебели',
      subtitle: 'праздичные цены',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, );

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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="wrapper">
      <div className="relative w-full max-w-[1280px] mx-auto mt-[85px] lg:mt-28 px-3 xl:px-0">
        <div className="relative items-center justify-center">
          <button
            className="absolute left-0 top-[45%] z-10 text-white text-4xl"
            onClick={prevSlide}
          >
            <FaAngleLeft />
          </button>
          <div className="w-full h-[320px] md:h-[400px] lg:h-[500px] rounded-xl relative overflow-hidden overflow-x-scroll scrollbar-hide">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full h-full bg-cover bg-center rounded-xl bg-blend-multiply bg-[#bcbcbc] transition-transform duration-300 ${
                  index === currentIndex
                    ? 'translate-x-0'
                    : direction === 'right'
                    ? 'translate-x-full'
                    : '-translate-x-full'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute w-full h-full"></div>
                <span className="absolute text-white font-semibold w-[300px] md:w-[400px] top-[80px] left-[50px] text-2xl md:text-4xl xl:text-5xl z-10">
                  {slide.title}
                </span>
                <span className="absolute text-white font-light w-[300px] top-[150px] md:top-[230px] left-[50px] text-lg z-10">
                  {slide.subtitle}
                </span>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-[45%] z-10 text-white text-4xl"
            onClick={nextSlide}
          >
            <FaAngleRight />
          </button>
        </div>

        <div className="flex justify-center mt-2 lg:mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 mx-1 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-gray-600' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
