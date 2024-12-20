import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ items, addToCart }) => {
    const { id } = useParams(); 
    const item = items.find(item => item.id === parseInt(id)); 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="wrapper px-3 lg:px-0">
            <div className="mt-28 lg:mt-32 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full sm:w-4/5  h-[300px] sm:h-[400px] object-cover object-center shadow-md"
                />
                <div className="w-full lg:w-3/5 flex flex-col">
                    <h1 className="text-2xl sm:text-3xl font-semibold py-2">{item.title}</h1>
                    <p className="text-base sm:text-lg text-gray-600">{item.mafia}</p>
                    <p className="text-3xl text-green-600 font-medium mt-4">{item.price}₸</p>

                    <div
                        className="border border-gray-600 w-full sm:w-64 rounded-lg mt-7 text-gray-600 text-center text-lg px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300"
                        onClick={() => addToCart(item)}
                    >
                        В корзину
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
