import { FaTimes, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6'

import kz from '../img/kz.png'


const MobileMenu = ({ isOpen, toggleMenu, searchInput, handleSearchClick, handleSearchInput}) => {

    return (
        <div>
            <div
                className={`absolute top-0 left-0 right-0 bg-black opacity-50 z-10 min-h-[150vh] transition-opacity duration-300 ${
                    isOpen ? "opacity-50 block" : "opacity-0 hidden"
                }`}
                onClick={toggleMenu}
            />
            <div
                className={`absolute top-0 left-0 w-5/6 h-screen bg-white shadow-lg z-50 transform transition-transform duration-500 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button
                    onClick={toggleMenu}
                    className="text-4xl text-gray-600 absolute top-5 right-2 focus:outline-none"
                >
                    <FaTimes />
                </button>
                
                <div className="md:hidden relative w-4/5 m-3">
                    <input
                        type="text"
                        placeholder="Поиск товаров"
                        value={searchInput}
                        onChange={handleSearchInput}
                        className="w-full p-3 border rounded-lg shadow-md focus:outline-none"
                    />
            
                    <div className="absolute top-1/2 right-1 text-2xl transform -translate-y-1/2 px-3 py-2 text-gray-600 rounded-lg hover:opacity-80 transition duration-300"
                          onClick={()=>{
                            handleSearchClick();
                            toggleMenu()
                        }}
                    
                    > 
                        <FaSearch/>
                    </div>
                </div>

                <nav className="flex flex-col mt-10 space-y-5 text-lg font-medium px-3">
                    <div className="hover:text-gray-600 transition duration-200">
                        Каталог
                    </div>
                    <div className="hover:text-gray-600 transition duration-200">
                        Журнал
                    </div>
                    <div className="hover:text-gray-600 transition duration-200">
                        Для бизнеса
                    </div>
                    <div className="hover:text-gray-600 transition duration-200">
                        Доставка и оплата
                    </div>
                    <div className="hover:text-gray-600 transition duration-200">
                        Контакты
                    </div>
                    <div className="hover:text-gray-600 transition duration-200">
                        О нас
                    </div>
                </nav>

                <div className="absolute bottom-0 bg-gray-100 w-full h-1/4">
                    <ul className="pl-3 pt-10 space-y-4">
                        <li className="flex items-center space-x-4">
                            <img src={kz} alt="kz" className="w-6" /> 
                            <p>Страна: <span className="font-medium py-0.5 border-b border-black">Kazakhstan</span></p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-[23px] text-gray-600"/>
                            <p>Ваш город: <span className="font-medium py-0.5 border-b border-black">Almaty</span></p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FaUser className="text-[23px] text-gray-600"/>
                            <p>Привет, User</p>

                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default MobileMenu
