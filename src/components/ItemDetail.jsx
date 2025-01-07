import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import Reviews from './Reviews';

const ItemDetail = ({ items, addToCart, favorites, toggleFavorite }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  // Проверяем, находится ли товар в избранном
  const isFavorite = favorites.includes(item.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleToggleFavorite = () => {
    toggleFavorite(item.id);
  };

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="wrapper px-3 xl:px-0">
      <div className="mt-24 lg:mt-32 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
        <img
          src={item.img}
          alt={item.title}
          className="w-full lg:w-4/5 rounded-lg h-[300px] sm:h-[400px] object-cover object-center shadow-lg"
        />
        <div className="w-full lg:w-3/5 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-semibold py-2">{item.title}</h1>
          <p className="text-base sm:text-lg text-gray-600">{item.mafia}</p>
          <div className="sm:flex items-center sm:justify-between mt-4 xl:mt-20">
            <p className="text-2xl lg:text-3xl text-green-600 font-medium my-4">
              {item.price}₸
            </p>
            <div className="flex space-x-1 justify-between">
              <Button onclick={handleToggleFavorite}>
                {isFavorite ? 'Удалить из избранных' : 'В избранное'}
              </Button>
              <Button onclick={handleAddToCart}>В корзину</Button>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default ItemDetail;
