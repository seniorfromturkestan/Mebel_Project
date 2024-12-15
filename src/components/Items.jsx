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

            <div className="flex space-x-3 my-5">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'} transition duration-300`}
                    >
                        {category === 'all' ? 'Все товары' : categoryNames[category] || category}
                    </button>
                ))}
            </div>

            <main className="flex flex-wrap justify-start gap-6">
                {filteredItem.length > 0 ? (
                    filteredItem.map((item) => (
                        <div key={item.id} className="w-[32%] overflow-hidden relative">
                            <img
                                className="w-full h-[300px] object-cover brightness-90 hover:scale-105 hover:brightness-100 transition duration-500 cursor-pointer"
                                src={item.img}
                                alt={item.title}
                            />
                            <div onClick={()=> clickedHeart(item.id)} className="text-3xl absolute right-3 bottom-28 text-gray-600 cursor-pointer hover:opacity-80 transition duration-200" >
                                {toggledItems[item.id] ? (
                                    <FaHeart  /> 
                                ) : (
                                    <FaRegHeart />
                                )}
                            </div>
                            <div className="w-full pr-1 text-[#333]">
                                <Link to={`/${item.id}`}><h1 className="font-semibold py-4 text-gray-600 text-2xl cursor-pointer w-fit">{item.title}</h1></Link>
                                {/* <h1 className="font-semibold py-4 text-gray-600 text-2xl cursor-pointer">{item.title}</h1> */}
                                <p className="h-12 text-gray-600">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-green-600 font-medium text-2xl my-2">{item.price}₸</p>
                                    <div
                                        className="border border-gray-600 rounded-lg text-gray-600 text-lg px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300"
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
