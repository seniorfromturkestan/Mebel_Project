import React from "react";
import { Link } from "react-router-dom";

const AuthModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-sm sm:max-w-md md:max-w-lg">
        <p className="text-lg sm:text-lg md:text-xl font-semibold text-gray-600">
          Чтобы добавить товар в корзину или избранное, пожалуйста, авторизуйтесь.
        </p>
        <div className="mt-6 flex flex-col space-y-3">
          <Link
            to="/signin"
            className="bg-gray-600 text-white rounded-lg text-base sm:text-lg px-4 py-2 w-full sm:w-auto cursor-pointer hover:bg-opacity-90 transition duration-200"
          >
            Войти
          </Link>
          <Link
            to="/signup"
            className="bg-green-600 text-white rounded-lg text-base sm:text-lg px-4 py-2 w-full sm:w-auto cursor-pointer hover:bg-opacity-90 transition duration-200"
          >
            Зарегистрироваться
          </Link>
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-gray-600 hover:text-gray-800 transition duration-200"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default AuthModal;