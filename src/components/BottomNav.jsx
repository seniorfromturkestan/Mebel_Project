import React, { useState, useEffect } from 'react';
import { FaHouse, FaHeart, FaCartShopping, FaStore, FaUser } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const [isScrolledDown, setIsScrolledDown] = useState(false); 
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, );

  const getActiveClass = (path) => (location.pathname === path ? '!text-red-600' : '');

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-10 transition-[padding] duration-300 ${
        isScrolledDown ? 'pb-5' : 'pb-auto'
      }`}
    >
      <div className="flex justify-around items-center py-3 text-gray-600">
        <Link
          to="/"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${getActiveClass('/')}`}
        >
          <FaHouse size={24} />
          <span className="text-xs mt-1">Главная</span>
        </Link>

        <Link
          to="/basket"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${getActiveClass('/basket')}`}
        >
          <FaCartShopping size={24} />
          <span className="text-xs mt-1">Корзина</span>
        </Link>

        <Link
          to="/aboutus"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${getActiveClass('/aboutus')}`}
        >
          <FaHeart size={24} />
          <span className="text-xs mt-1">Избранные</span>
        </Link>

        <Link
          to="/showrooms"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${getActiveClass('/showrooms')}`}
        >
          <FaStore size={24} />
          <span className="text-xs mt-1">Шоурумы</span>
        </Link>

        <Link
          to="/profile"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${getActiveClass('/profile')}`}
        >
          <FaUser size={24} />
          <span className="text-xs mt-1">Профиль</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
