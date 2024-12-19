const Basket = ({ cart, removeFromCart }) => {
    return (
      <div className="wrapper text-gray-600 px-4">
        <h1 className="text-xl md:text-2xl font-bold text-center mt-28 mb-4 md:mt-32">
          Оформление заказа
        </h1>
        {cart.length > 0 ? (
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="w-full border-b py-4 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0"
              >
                <div className="flex flex-col w-full md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <img
                    src={item.img}
                    className="w-[400px] md:w-48 lg:w-64 h-52 object-cover"
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
                    <span className="text-green-600 font-medium text-xl">
                      {item.price * item.quantity}₸
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-auto flex justify-end md:justify-start">
                  <button
                    className="border border-gray-600 rounded-lg text-gray-600 text-base sm:text-lg px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300 ml-auto md:ml-0"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-4 mt-10 mb-20">
            <p className="text-center text-sm md:text-base">
              В вашей корзине пока нет товаров
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[350px] md:w-[500px]" viewBox="0 0 440 234" fill="none">
                    <path d="M370.263 58.9814L354.103 233.475H358.864L379.074 58.9814H370.263Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M422.305 58.9814L438.465 233.475H433.704L413.486 58.9814H422.305Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M426.781 173.661H365.789L366.327 169.018H426.251L426.781 173.661Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M439.5 41.9419H353.068C353.068 51.3498 361.192 58.9789 371.209 58.9789H421.359C431.376 58.9789 439.5 51.3498 439.5 41.9419Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M428.408 41.944L425.801 9.67169C425.393 4.61257 420.988 0.557119 415.584 0.5C415.531 0.5 415.488 0.5 415.436 0.5H377.138C377.085 0.5 377.042 0.5 376.99 0.5C371.586 0.557119 367.181 4.61257 366.772 9.67169L364.166 41.944" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M37.1369 143.893L7.04306 233.5H11.8881L45.1892 143.893H37.1369Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M92.7528 143.893L122.847 233.5H118.002L84.7004 143.893H92.7528Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M92.2734 165.211L27.3772 190.437" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M37.136 165.211L101.964 190.437" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M22.6084 131.39C24.2462 124.355 28.0677 119.452 32.5715 119.452H98.6959C103.132 119.452 106.953 124.355 108.591 131.248" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M119.238 76.1749V116.04C119.238 124.78 112.413 131.886 104.02 131.886H25.8852C17.287 131.886 10.3265 124.638 10.3265 115.685V76.1749C10.3265 73.3325 8.14284 71.0586 5.41324 71.0586C2.68364 71.0586 0.5 73.3325 0.5 76.1749V116.111C0.5 131.46 12.442 143.824 27.1136 143.824H102.723C117.463 143.824 129.337 131.389 129.337 116.111V76.1749C129.337 73.3325 127.153 71.0586 124.424 71.0586H124.082C121.421 71.0586 119.238 73.4036 119.238 76.1749Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M106.274 57.1304C100.883 82.57 97.8122 114.902 98.3581 119.379" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M23.3619 57.1289C28.7529 82.5685 31.8237 114.901 31.2777 119.378" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M5.61513 71.2719C8.41297 66.9372 12.2344 63.2421 16.7382 60.4707C16.8747 60.3997 17.0111 60.2576 17.1476 60.1865C22.948 56.7045 29.8402 54.7148 37.2784 54.7148H92.6892C106.201 54.7148 117.938 61.3235 124.353 71.2719" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M297.862 20.3647H172.65V80.5618H297.862V20.3647Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M178.158 233.444H172.65V201.471H183.455L178.158 233.444Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M292.356 233.444H297.864V201.471H287.059L292.356 233.444Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M297.862 80.5615H172.65V140.759H297.862V80.5615Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M297.862 140.758H172.65V200.955H297.862V140.758Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M219.924 20.425V24.9453L250.645 24.9453V20.425H219.924Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M219.949 80.6018V85.1221H250.669V80.6018H219.949Z" stroke="#767676" strokeMiterlimit="10"/>
                    <path d="M219.906 140.67V145.19H250.626V140.67H219.906Z" stroke="#767676" strokeMiterlimit="10"/>
            </svg>
          </div>
        )}
      </div>
    );
  };
  
  export default Basket;
  