import React from "react";
import { useState } from "react";
import About from "./About";


const categoryNames = {
    chairs: 'Стулья',
    tables: 'Столы',
    shelves: 'Полки',
    sofa: 'Диваны',
};

const Items = ({ items, addToCart}) => {
    const [selectedCategory, setSelectedCategory] = useState('all'); 

    const filteredItems = selectedCategory === 'all'
        ? items
        : items.filter(item => item.category === selectedCategory);

    const categories = ['all', ...new Set(items.map(item => item.category))];

    return (
        

        
        <div>
                <About/>
                <div className="flex space-x-3 mb-5">
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

            <main className="flex w-full flex-wrap justify-between">
                {filteredItems.map((item) => (
                    <div key={item.id} className="mb-12 w-[32%] overflow-hidden">
                        <img
                            className="w-full h-[300px] object-cover brightness-90 hover:scale-105 hover:brightness-100 transition duration-500 cursor-pointer"
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="w-full py-5 pr-1 text-[#333]">
                            <h1 className="font-semibold text-2xl">{item.title}</h1>
                            <p className="h-12">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-green-600 font-medium text-2xl my-2">{item.price}₸</p>
                                <div
                                    className="bg-gray-600 rounded-full w-10 h-10 text-center font-medium text-white text-4xl cursor-pointer hover:scale-110 transition duration-500"
                                    onClick={() => addToCart(item)}
                                >
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Items;
