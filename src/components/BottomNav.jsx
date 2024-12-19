import React, { useState } from 'react';
import { FaHouse, FaHeart, FaCartShopping, FaStore, FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  const [active, setActive] = useState('home'); 

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-10">
      <div className="flex justify-around items-center py-3 text-gray-600">
        
        <Link
          to="/"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${active === 'home' ? '!text-red-600' : ''}`}
          onMouseDown={() => setActive('home')}
       
        >
          <FaHouse size={24} />
          <span className="text-xs mt-1">Главная</span>
        </Link>

        <Link
          to="/basket"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${active === 'cart' ? '!text-red-600' : ''}`}
          onMouseDown={() => setActive('cart')}
        >
          <FaCartShopping size={24} />
          <span className="text-xs mt-1">Корзина</span>
        </Link>

        <Link
          to="/aboutus"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${active === 'favorites' ? '!text-red-600' : ''}`}
          onMouseDown={() => setActive('favorites')}
        >
          <FaHeart size={24} />
          <span className="text-xs mt-1">Избранные</span>
        </Link>

        <Link
          to="/showrooms"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${active === 'showrooms' ? '!text-red-600' : ''}`}
          onMouseDown={() => setActive('showrooms')}
        >
          <FaStore size={24} />
          <span className="text-xs mt-1">Шоурумы</span>
        </Link>

        <Link
          to="/profile"
          className={`flex flex-col items-center hover:text-gray-600 transition duration-200 ${active === 'login' ? '!text-red-600' : ''}`}
          onMouseDown={() => setActive('login')}
        >
          <FaUser size={24} />
          <span className="text-xs mt-1">Профиль</span>
        </Link>

      </div>
    </div>
  );
};

export default BottomNav;
