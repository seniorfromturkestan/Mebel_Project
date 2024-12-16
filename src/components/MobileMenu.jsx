import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`absolute top-0 left-0 right-0 bg-black opacity-50 z-10 min-h-[150vh] ${
                    isOpen ? "block" : "hidden"
                }`}
                onClick={toggleMenu}
            />
            <div
                className={`absolute top-0 left-0 w-11/12 h-[1000px] bg-white shadow-lg z-20 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <nav className="flex flex-col mt-10 space-y-5 text-lg font-medium p-5 h-full">
                    <Link to="/" onClick={toggleMenu} className="hover:text-gray-600 transition duration-200">Главная</Link>
                    <Link to="/basket" onClick={toggleMenu} className="hover:text-gray-600 transition duration-200">Корзина</Link>
                    <Link to="/aboutus" onClick={toggleMenu} className="hover:text-gray-600 transition duration-200">О нас</Link>
                    <Link to="/profile" onClick={toggleMenu} className="hover:text-gray-600 transition duration-200">Профиль</Link>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
