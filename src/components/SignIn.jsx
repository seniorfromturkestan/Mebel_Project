import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../helpers/firebase";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Вход выполнен успешно!");
      navigate("/profile");
    } catch (err) {
      setError("Неверный email или пароль. Попробуйте снова.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccessMessage("Вход через Google выполнен успешно!");
      navigate("/profile");
    } catch (err) {
      setError("Ошибка при входе через Google.");
    }
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gray-100 text-gray-600 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Вход</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500 transition duration-200"
          >
            Войти
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200"
        >
          <FcGoogle className="text-xl" /> Войти через Google
        </button>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mt-4 text-center">{successMessage}</p>
        )}
        <p className="mt-4 text-center">
          Нет аккаунта?{" "}
          <Link to="/signup" className="text-gray-600 underline underline-offset-4">
            Зарегистрируйтесь
          </Link>
        </p>
      </div>
    </div>
  );
}
