

const AboutUs = ({ items, favorites, removeFromFavorites }) => {

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
                    <img
                      src={item.img}
                      className="w-full md:w-80 lg:w-96 h-60 sm:h-72 md:h-56 object-cover object-top"
                      alt={item.title}
                    />
                    <div className="flex flex-col space-y-2">
                      <span className="font-semibold text-xl">
                        {item.title}
                        {item.quantity > 1 && (
                          <span className="text-sm md:text-md ml-2">
                            x{item.quantity}
                          </span>
                        )}
                      </span>
                      <span className="text-sm md:text-base">{item.description}</span>
                      <span className="text-green-600 hidden md:block font-medium text-xl md:text-2xl">
                          {item.price}₸
                        </span>
                    </div>
                     
                  </div>
                  <div className="w-full md:w-auto flex justify-end md:justify-start">
                        <span className="text-green-600 md:hidden font-medium text-xl md:text-2xl">
                          {item.price}₸
                        </span>
                        <button
                          className="border border-gray-600 rounded-lg text-gray-600 text-base sm:text-lg px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300 ml-auto md:ml-0"
                          onClick={() => removeFromFavorites(item.id)}
                        >
                          Удалить
                        </button>
                     
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
