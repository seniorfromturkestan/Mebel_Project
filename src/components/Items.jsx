import React, { useState } from "react";
import About from "./About";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const categoryNames = {
    chairs: 'Стулья',
    tables: 'Столы',
    shelves: 'Полки',
    sofa: 'Диваны',
    table:'Кресло'
};
const Items = ({ items, addToCart, searchQuery, clickedHeart, toggledItems }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredItems = selectedCategory === 'all'
        ? items
        : items.filter(item => item.category === selectedCategory);

    const categories = ['all', ...new Set(items.map(item => item.category))];

    const filteredItem = filteredItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="wrapper">
            <About/>

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
                        <div key={item.id} className="w-full relative">
                            <div className="border h-[230px] sm:h-[290px] lg:h-[300px] overflow-hidden mb-3">
                                <img
                                    className="w-full h-[230px] sm:h-[290px] lg:h-[300px] object-cover brightness-90 mb-2 hover:scale-105 hover:brightness-100 transition duration-500 cursor-pointer"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </div>
                            <div onClick={() => clickedHeart(item.id)} className="text-2xl md:text-3xl absolute right-3 bottom-30 text-gray-600 cursor-pointer hover:opacity-80 transition duration-200">
                                {toggledItems[item.id] ? (
                                    <FaHeart /> 
                                ) : (
                                    <FaRegHeart />
                                )}
                            </div>
                            <div className="w-full pr-1 text-[#333] space-y-3">
                                <Link to={`/${item.id}`} className="font-semibold py-4 text-gray-600 text-xl sm:text-2xl cursor-pointer w-fit">{item.title}</Link>
                                <p className="h-6 lg:h-12 text-gray-600 text-sm sm:text-base">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-green-600 font-medium text-xl sm:text-2xl my-2">{item.price}₸</p>
                                    <div
                                        className="border border-gray-600 rounded-lg text-gray-600 text-base sm:text-lg px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300"
                                        onClick={() => addToCart(item)}
                                    >
                                        В корзину
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-lg text-gray-500">Товары не найдены</p>
                )}
            </main>

        </div>
    );
};

export default Items;
