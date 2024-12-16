import React, { useState } from 'react';
import { FaCartShopping, FaTrash, FaHeart, FaUser } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

const Header = ({ cart, removeFromCart, setSearchQuery, items }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();

    const handleMouseEnter = () => {
        setCartOpen(true);
    };

    const handleMouseLeave = () => {
        setCartOpen(false);
    };

    const handleSearchInput = (e) => {
        const query = e.target.value;
        setSearchInput(query);

        if (query.trim() !== '') {
            const filteredResults = items.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults);
            setShowDropdown(true); 
        } else {
            setSearchResults([]);
            setShowDropdown(false);
        }
    };

    const handleSearchClick = () => {
        setSearchQuery(searchInput);
        setShowDropdown(false);
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
                                value={searchInput}
                                onChange={handleSearchInput}
                                className="w-full p-3 px-10 border rounded-lg shadow-md focus:outline-none"
                            />
                            <IoSearchOutline
                                className='absolute top-3 left-3 text-2xl text-gray-400 cursor-pointer'
                                onClick={handleSearchClick}
                            />
                            <button
                                onClick={handleSearchClick}
                                className="absolute top-1 right-1 px-4 py-2 bg-gray-600 text-white rounded-lg  hover:opacity-80  transition duration-300"
                            >
                                Найти
                            </button>
                            {showDropdown && searchResults.length > 0 && (
                                <ul className="absolute top-full w-full bg-white border shadow-md max-h-72 overflow-y-auto z-10">
                                    {searchResults.map((item) => (
                                        <Link                              
                                            to={`/${item.id}`}
                                            key={item.id}
                                            className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
                                        >
                                            <img src={item.img} alt={item.title} className="w-20 h-14 object-cover" />
                                            <div>
                                                <p className="font-medium">{item.title}</p>
                                                <p className="text-green-600 font-medium">{item.price}₸</p>
                                            </div>
                                        </Link>
                                    ))}
                                </ul>
                            )}

                        
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
                            className={`absolute top-12 py-3 right-0 w-[450px] min-h-[100px] bg-white shadow-[0px_0px_9px_2px_rgba(0,_0,_0,_0.1)] z-10 transform transition-all duration-300 ${
                                cartOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="text-xl font-bold p-4">Корзина</span>
                            {cart.length > 0 ? (
                                <ul className="mt-3 max-h-[300px] overflow-y-auto">
                                    {cart.map((item) => (
                                        <Link
                                            to={`/${item.id}`}
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
                                        </Link>
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
