import React, { useState } from "react";
import About from "./About";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "./Button";

const categoryNames = {
  chairs: 'Стулья',
  tables: 'Столы',
  shelves: 'Полки',
  sofa: 'Диваны',
  table:'Кресло'
};

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6  md:p-8 rounded-lg shadow-lg text-center max-w-sm sm:max-w-md md:max-w-lg">
            <p className="text-lg sm:text-lg md:text-xl font-semibold text-gray-600">{message}</p>
            <button onClick={onClose} className="mt-4 bg-gray-600 text-white rounded-lg text-base sm:text-lg px-4 py-3 md:py-2 w-full sm:w-auto cursor-pointer hover:bg-opacity-90 transition duration-200 active:bg-slate-300">
                Закрыть
            </button>
        </div>
    </div>

  );
};

const Items = ({ items, addToCart, searchQuery = '', clickedHeart, favorites = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);  // Состояние для модального окна
  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);
  const categories = ['all', ...new Set(items?.map(item => item.category))];
  const filteredItem = filteredItems.filter(item =>
    item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowModal(true);  
    setTimeout(() => setShowModal(false), 3000); 
  };

  return (
    <div className="wrapper">
      <About />
      <div className="flex md:flex-wrap space-x-3 my-5 pl-3 xl:pl-0 overflow-x-auto max-h-12 md:max-h-20 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'} transition duration-300`}
          >
            {category === 'all' ? 'Все' : categoryNames[category] || category}
          </button>
        ))}
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3 xl:px-0">
        {filteredItem.length > 0 ? (
          filteredItem.map((item) => (
            <div key={item.id} className="w-full relative mb-3">
              <div className="rounded-lg shadow-lg h-[230px] sm:h-[290px] lg:h-[300px] overflow-hidden mb-3">
                <Link to={`/${item.id}`}>
                  <img
                    className="w-full h-[230px] sm:h-[290px] lg:h-[300px] object-cover brightness-90 mb-3 hover:scale-105 hover:brightness-100 transition duration-500 cursor-pointer"
                    src={item.img}
                    alt={item.title || 'Изображение'}
                  />
                </Link>
                <div
                  onClick={() => clickedHeart(item.id)}
                  className="text-2xl md:text-3xl absolute right-3 bottom-30 text-gray-600 cursor-pointer hover:opacity-80 transition duration-200"
                >
                  {favorites.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
                </div>
              </div>
              <div className="w-full pr-1 text-[#333] space-y-3 pt-1">
                <Link to={`/${item.id}`} className="font-semibold py-4 text-gray-600 text-xl sm:text-2xl cursor-pointer w-fit">{item.title}</Link>
                <p className="h-6 lg:h-10 text-gray-600 text-sm sm:text-base">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-medium text-2xl">{item.price}₸</p>
                  <div className="text-base sm:text-lg">
                    <Button onclick={() => handleAddToCart(item)}>В корзину</Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500">Товары не найдены</p>
        )}
      </main>

      {showModal && (
        <Modal 
          message="Ваш товар успешно добавлен в корзину!" 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
};

export default Items;
