import { Link } from "react-router-dom";


const AboutUs = ({ items, favorites, removeFromFavorites, addToCart }) => {

  return (
    <div className="wrapper text-gray-600">
      <div className="px-3 xl:px-0">
        <div className="mt-24 lg:mt-32 ">
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
                  <div className="flex flex-col w-full md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                    <Link to={`/${item.id}`}>

                      <img
                        src={item.img}
                        className="w-full rounded-lg shadow-lg md:w-80 lg:w-96 h-60 sm:h-72 md:h-56 object-cover object-top"
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
                      <span className="text-green-600 hidden md:block font-medium text-xl md:text-2xl">
                          {item.price}₸
                        </span>
                    </div>
                     
                  </div>
                  <div className="w-full md:w-auto">
                        <span className="text-green-600 md:hidden font-medium text-xl md:text-2xl">
                          {item.price}₸
                        </span>
                        <div className="flex md:flex-col justify-end">
                          <button
                          className="border border-gray-600 w-52 lg:w-64  rounded-lg mt-5 md:mt-0 text-gray-600 text-center text-lg px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300 active:bg-white active:text-gray-600"
                          onClick={() => addToCart(item)}
                          >
                              В корзину
                          </button>
                          <button
                            className="border border-gray-600 w-52  lg:w-64 rounded-lg text-gray-600 mt-5 text-base sm:text-lg px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300 ml-auto md:ml-0  active:bg-white active:text-gray-600"
                            onClick={() => removeFromFavorites(item.id)}
                          >
                            Удалить
                          </button>
                        </div>
                       
                     
                  </div>
                  
                </li>
                );
              })}
            </ul>
           
          ) : (
            <p className="text-center">Нет избранных элементов.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
