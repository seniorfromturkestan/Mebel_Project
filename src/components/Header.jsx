import { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6"
import { Link } from 'react-router-dom';


const Header = ({cart, removeFromCart}) => {
    const [cartOpen, setCartOpen] = useState(false);

   
    return (
        <header className='relative h-14'>
            <div className="flex justify-between items-center">
                <Link to={`/`} className="text-xl font-bold">House Staff</Link>
                <ul className="flex items-center">
                    <FaCartShopping
                        onClick={() => setCartOpen(!cartOpen)}
                        className={`text-2xl cursor-pointer hover:opacity-60 transition duration-300 ${cartOpen ? 'text-red-600' : 'text-black'}`}
                    />
                    <span className="ml-2 text-sm">{cart.length} товаров</span>

                    <Link to={`/about`} className="ml-5 cursor-pointer hover:opacity-60 transition duration-200">Про нас</Link>
                    <li className="ml-5 cursor-pointer hover:opacity-60 transition duration-200">Контакты</li>
                    <li className="ml-5 cursor-pointer hover:opacity-60 transition duration-200">Кабинет</li>
                </ul>

                {cartOpen && (
                    <div className='absolute top-10 right-0 w-[450px] min-h-[100px] bg-white shadow-[0px_0px_9px_2px_rgba(0,_0,_0,_0.1)] z-10'>
                        <h2 className="text-lg font-bold p-4">Корзина</h2>
                        {cart.length > 0 ? (
                            <ul>
                                {cart.map((item) => (
                                   <li key={item.id} className="border-b py-4 px-4 flex items-center justify-between hover:bg-gray-100 ease-in-out duration-200">
                                    <div className="flex items-center space-x-4">
                                        <span>
                                            <img src={item.img} className="w-32 h-20 object-cover" alt="/" />
                                        </span>
                                        <div className="flex flex-col space-y-2">
                                            <span className="font-medium text-lg">
                                                {item.title}
                                                {item.quantity > 1 && (
                                                    <span className="text-md ml-2">x{item.quantity}</span>
                                                )}
                                            </span>
                                            <span className="text-green-600 font-medium text-xl">{item.price * item.quantity}₸</span>
                                        </div>
                                    </div>
                                    <FaTrash className="text-xl cursor-pointer hover:scale-110 transition text-red-600" 
                                             onClick={() => removeFromCart(item.id)}
                                    />
                               </li>
                               
                                ))}
                            </ul>
                        ) : (
                            <p className="p-4">Товаров нет</p>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
