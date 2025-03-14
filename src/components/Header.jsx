import React, { useState, useEffect } from 'react';
import { FaCartShopping, FaHeart, FaUser, FaBars, FaTrash, FaStore } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import MobileMenu from './MobileMenu';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { auth } from "../helpers/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = ({ cart, removeFromCart, setSearchQuery, items, count, favorites }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        });

        return () => unsubscribe();
    }, []);

  const handleUserIconClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate("/profile"); // Убрал слэш
    } else {
      navigate("/signup"); // Убрал слэш
    }
  };

    let lastScrollY = 0;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 1024) {
                return; 
            }
            if (window.scrollY === 0) {
                setIsHeaderVisible(true);
            } else if (window.scrollY > lastScrollY) {
                setIsHeaderVisible(false);
            } else {
                setIsHeaderVisible(true);
            }
    
            // eslint-disable-next-line react-hooks/exhaustive-deps
            lastScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [windowWidth]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = ""; 
        }
        return () => {
            document.body.style.overflow = ""; 
        };
    }, [menuOpen]);
    

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
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const getPlural = (count, one, few, many) => {
        if (count % 10 === 1 && count % 100 !== 11) {
          return one; 
        } else if (
          count % 10 >= 2 &&
          count % 10 <= 4 &&
          (count % 100 < 10 || count % 100 >= 20)
        ) {
          return few; 
        } else {
          return many; 
        }
      };

    return (
        <div className={`w-full bg-white shadow-md fixed z-20 h-[75px] lg:h-24 -top-1 transition-transform duration-300 
                        ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="wrapper">
                <header className="relative w-full px-3 xl:px-0" onMouseLeave={handleMouseLeave}>
                    <div className="flex lg:justify-between items-center bg-white pt-5">
                        <div className="lg:hidden flex items-center mr-auto lg:mr-0">
                            <button
                                onClick={toggleMenu}
                                className={`text-4xl text-gray-600 z-20 focus:outline-none  ${
                                    menuOpen ? "opacity-0" : "opacity-100"
                                }`}
                            >
                                <FaBars />
                            </button>
                            <MobileMenu
                                isOpen={menuOpen}
                                toggleMenu={toggleMenu}
                                searchInput={searchInput}
                                handleSearchClick={handleSearchClick}
                                handleSearchInput={handleSearchInput}
                            />
                        </div>
                        <Link to="/" className="text-2xl mr-auto lg:mr-0 font-bold text-gray-600">FurniLand</Link>
                        <FaMapMarkerAlt className='lg:hidden md:order-1 text-2xl text-gray-600' />
                        <FaPhoneAlt className='lg:hidden md:order-2 text-2xl text-gray-600 ml-5' />
                        <div className="hidden md:block mr-10 lg:mr-0 w-2/5 relative">
                            <input
                                type="text"
                                placeholder="Поиск товаров"
                                value={searchInput}
                                onChange={handleSearchInput}
                                className={`w-full p-3 px-10 border rounded-lg shadow-md border-white focus:outline-none ${showDropdown && searchResults.length > 0 && `rounded-b-none`}`}
                            />
                            <IoSearchOutline
                                className="absolute top-3 left-3 text-2xl text-gray-400 cursor-pointer"
                                onClick={handleSearchClick}
                            />
                            <button
                                onClick={() => {
                                    handleSearchClick();
                                    setShowDropdown(false); 
                                }}
                                className="absolute top-1.5 right-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:opacity-80 transition duration-300"
                            >
                                Найти
                            </button>
                            {showDropdown && searchResults.length > 0 && (
                                <ul className="absolute py-3 w-full bg-white rounded-b-lg shadow-lg max-h-72 overflow-y-auto z-10">
                                    {searchResults.map((item) => (
                                        <Link
                                            to={`/${item.id}`}
                                            key={item.id}
                                            className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-5 border-b"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            <img src={item.img} alt={item.title} className="w-32 h-20 object-cover" />
                                            <div className="space-y-2">
                                                <p className="font-medium text-lg">{item.title}</p>
                                                <p className="text-green-600 font-medium text-xl">{item.price}₸</p>
                                            </div>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <ul className="hidden lg:flex items-center">
                            <Link to="/basket" className='cursor-pointer hover:opacity-80 transition duration-200'>
                                <FaCartShopping
                                    onMouseEnter={handleMouseEnter}
                                    className={`text-2xl cursor-pointer transition duration-300 ${
                                        location.pathname === '/basket'
                                            ? 'text-red-600'
                                            : 'text-gray-600'
                                    }`}
                                />
                            </Link>
                            <span className="ml-2 text-sm w-20">{count} {getPlural(count, "товар", "товара", "товаров")}</span>
                            <Link to="/showrooms" className="flex items-center ml-5 cursor-pointer hover:opacity-80 transition duration-200">
                                <FaStore className={`text-2xl cursor-pointer transition duration-300 ${
                                    location.pathname === '/showrooms'
                                        ? 'text-red-600'
                                        : 'text-gray-600'
                                }`} />
                            </Link>
                            <Link to="/aboutus" className="flex items-center ml-5 cursor-pointer hover:opacity-80 transition duration-200">
                                <FaHeart className={`text-2xl cursor-pointer transition duration-300 ${
                                    location.pathname === '/aboutus'
                                        ? 'text-red-600'
                                        : 'text-gray-600'
                                }`} />
                                {/* <div className='absolute text-white ml-2 text-xs'>
                                    {favorites.length}
                                </div> */}
                            </Link>
                            <Link
                                to={isLoggedIn ? "profile" : "signup"} // Убрал слэш
                                onClick={handleUserIconClick}
                                className="ml-5 cursor-pointer hover:opacity-80 transition duration-200"
                                >
                                <FaUser
                                    className={`text-2xl ${
                                    location.pathname === "/signup" || location.pathname === "/profile"
                                        ? "text-red-600"
                                        : "text-gray-600"
                                    }`}
                                />
                                </Link>
                        </ul>

                        <div
                            className={`absolute top-16 py-3 right-0 w-[450px] min-h-[100px] rounded-lg bg-white shadow-[0px_0px_9px_2px_rgba(0,_0,_0,_0.1)] z-10 transform transition-all duration-300 ${
                                cartOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="text-xl font-bold p-4">Корзина</span>
                            {cart.length > 0 ? (
                                <ul className="mt-3 max-h-[300px] overflow-y-auto">
                                    {cart.map((item) => (
                                        <li className="border-b py-4 px-4 flex items-center justify-between hover:bg-gray-100 ease-in-out duration-200">
                                            <Link
                                                to={`/${item.id}`}
                                                key={item.id}
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
                                
                                            </Link>
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
                <MobileMenu/>
            </div>
        </div>
    );
};

export default Header;
