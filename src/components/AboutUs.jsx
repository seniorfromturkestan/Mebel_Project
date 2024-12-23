import { Link } from "react-router-dom";
import Button from "./Button";


const AboutUs = ({ items, favorites, removeFromFavorites, addToCart }) => {
  return (
    <div className="wrapper text-gray-600">
      <div className="px-3 xl:px-0">
        <div className="mt-28 lg:mt-32">
          <h2 className="text-xl md:text-2xl mb-4 font-bold text-center">Избранные</h2>
          {favorites.length > 0 ? (
            <ul>
              {favorites.map((id) => {
                const item = items.find((item) => item.id === id);
                return (
                  <li
                    key={item.id}
                    className="w-full border-b py-4 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0"
                  >
                    <div className="flex flex-col w-full md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                      <Link to={`/${item.id}`}>
                        <img
                          src={item.img}
                          className="w-full rounded-lg shadow-lg md:w-96 lg:w-96 h-60 sm:h-72 md:h-56 object-cover"
                          alt={item.title}
                        />
                      </Link>
                      <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-xl mr-5">
                            <Link to={`/${item.id}`}>
                              {item.title}
                            </Link>
                            {item.quantity > 1 && (
                              <span className="text-sm md:text-md ml-2">
                                x{item.quantity}
                              </span>
                            )}
                          </span>
                          <span className="text-sm md:text-base mr-4">{item.description}</span>
                          <span className="text-green-600 hidden md:block font-medium text-2xl">
                              {item.price}₸
                            </span>
                      </div>
                    </div>
                    <div className="w-full md:w-auto">
                          <span className="text-green-600 md:hidden font-medium text-2xl">
                            {item.price}₸
                          </span>
                          <div className="w-full md:w-52 flex md:flex-col justify-between md:justify-end md:space-y-3 mt-4 space-x-1 md:space-x-0">
                            <Button onclick={() => addToCart(item)}>В корзину</Button>
                            <Button onclick={() => removeFromFavorites(item.id)}>Удалить</Button>
                          </div>
                    </div>
                    
                  </li>
                );
              })}
            </ul>
           ) : (
            <div className="h-52">
              <p className="text-center">Нет избранных элементов.</p>
              <Link to='/' className="mt-20 flex items-center justify-center mx-auto">
                <Button>Вернуться на главную</Button>
              </Link>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;