import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom'; 
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart, FaUser } from "react-icons/fa6";

const Header = ({ cart, removeFromCart, setSearchQuery }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const location = useLocation(); 

    const handleMouseEnter = () => {
        setCartOpen(true);
    };

    const handleMouseLeave = () => {
        setCartOpen(false);
    };

    return (

        <div className="w-full bg-white shadow-md fixed z-20 h-24 top-0">
            <div className="wrapper">
                <header className="relative w-full" onMouseLeave={handleMouseLeave}>
                    <div className="flex justify-between items-center bg-white fixed w-[1280px] top-6">
                        <Link to="/" className="text-2xl font-bold text-gray-600">FurniLand</Link>
                        <div className="w-1/3 relative">
                            <input
                                type="text"
                                placeholder="Поиск товаров"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full p-3 px-10 border shadow-md focus:outline-none"
                            />
                            <IoSearchOutline className='absolute top-3 left-3 text-2xl text-gray-400 cursor-pointer' />
                        </div>

                        <ul className="flex items-center">
                            <Link to="/basket">
                                <FaCartShopping
                                    onMouseEnter={handleMouseEnter}
                                    className={`text-2xl cursor-pointer transition duration-300 ${
                                        location.pathname === '/basket' 
                                            ? 'text-red-600'
                                            : 'text-gray-600'
                                    }`}
                                />
                            </Link>
                            <span className="ml-2 text-sm">{cart.length} товаров</span>

                            <Link to="/aboutus" className="flex items-center ml-5 cursor-pointer hover:opacity-80 transition duration-200">
                                <FaHeart className={`text-2xl cursor-pointer transition duration-300 ${
                                        location.pathname === '/aboutus' 
                                            ? 'text-red-600'
                                            : 'text-gray-600'
                                    }`} />
                            </Link>

                            <li className="ml-5 cursor-pointer hover:opacity-80 transition duration-200">
                                <FaUser className='text-2xl text-gray-600' />
                            </li>
                        </ul>

                        <div
                            className={`absolute top-14 py-3 right-0 w-[450px] min-h-[100px] bg-white shadow-[0px_0px_9px_2px_rgba(0,_0,_0,_0.1)] z-10 transform transition-all duration-300 ${
                                cartOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="text-xl font-bold p-4">Корзина</span>
                            {cart.length > 0 ? (
                                <ul className="mt-3">
                                    {cart.map((item) => (
                                        <li
                                            key={item.id}
                                            className="border-b py-4 px-4 flex items-center justify-between hover:bg-gray-100 ease-in-out duration-200"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <img src={item.img} className="w-32 h-20 object-cover" alt={item.title} />
                                                <div className="flex flex-col space-y-2">
                                                    <span className="font-medium text-lg">
                                                        {item.title}
                                                        {item.quantity > 1 && (
                                                            <span className="text-md ml-2">x{item.quantity}</span>
                                                        )}
                                                    </span>
                                                    <span className="text-green-600 font-medium text-xl">
                                                        {item.price * item.quantity}₸
                                                    </span>
                                                </div>
                                            </div>
                                            <FaTrash
                                                className="text-xl cursor-pointer hover:scale-110 transition text-red-600"
                                                onClick={() => removeFromCart(item.id)}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="p-4">Товаров нет</p>
                            )}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
