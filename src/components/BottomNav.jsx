import React, { useState } from 'react';
import { FaHouse, FaHeart, FaCartShopping, FaStore, FaUser } from 'react-icons/fa6';

const BottomNav = () => {
  const [active, setActive] = useState('home'); 

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-3 text-gray-600">
        
        <button 
          className={`flex flex-col items-center ${active === 'home' ? 'text-red-600 ' : ''} `} 
          onClick={() => setActive('home')}
        >
          <FaHouse size={25} />
          <span className="text-xs mt-1">Home</span>
        </button>

        <button 
          className={`flex flex-col items-center ${active === 'favorites' ? 'text-red-600 ' : ''} `} 
          onClick={() => setActive('favorites')}
        >
          <FaHeart size={25} />
          <span className="text-xs mt-1">Избранное</span>
        </button>

        <button 
          className={`flex flex-col items-center ${active === 'cart' ? 'text-red-600' : ''}`} 
          onClick={() => setActive('cart')}
        >
          <FaCartShopping size={25} />
          <span className="text-xs mt-2">Корзина</span>
        </button>

        <button 
          className={`flex flex-col items-center ${active === 'showrooms' ? 'text-red-600 ' : ''} `} 
          onClick={() => setActive('showrooms')}
        >
          <FaStore size={25} />
          <span className="text-xs mt-1">Шоурумы</span>
        </button>

        <button 
          className={`flex flex-col items-center ${active === 'login' ? 'text-red-600 ' : ''} `} 
          onClick={() => setActive('login')}
        >
          <FaUser size={25} />
          <span className="text-xs mt-1">Войти</span>
        </button>

      </div>
    </div>
  );
};

export default BottomNav;
