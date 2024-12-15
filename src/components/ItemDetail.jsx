import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ items, addToCart }) => {
    const { id } = useParams(); 
    const item = items.find(item => item.id === parseInt(id)); 

    return (
        <div className="wrapper">
            <div className="item-detail mt-32">
                 <img src={item.img} alt={item.title} className="w-full h-[400px] object-cover object-center" />
                 <h1 className="text-4xl font-semibold py-4">{item.title}</h1>
                 <p className="text-lg text-gray-600">{item.description}</p>
                 <p className="text-2xl text-green-600 font-medium">{item.price}₸</p>
                 <div
                      className="border border-gray-600 rounded-lg mt-7 w-48 text-gray-600 text-lg px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300"
                      onClick={() => addToCart(item)}
                >
                      В корзину
                </div>
             </div>
        </div>
    );
};

export default ItemDetail;
