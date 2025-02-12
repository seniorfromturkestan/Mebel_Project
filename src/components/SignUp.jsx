import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../helpers/firebase";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const provider = new GoogleAuthProvider();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Регистрация успешна!");
    } catch (err) {
      setError("Ошибка при регистрации. Попробуйте снова.");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      setSuccessMessage("Регистрация через Google успешна!");
    } catch (err) {
      setError("Ошибка при регистрации через Google.");
    }
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gray-100 text-gray-600 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>
        <form onSubmit={handleSignUp}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
          <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg mt-4" />
          <button type="submit" className="w-full bg-gray-600 text-white py-2 rounded-lg mt-4">Зарегистрироваться</button>
        </form>
        <button
          onClick={handleGoogleSignUp}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200"
        >
          <FcGoogle className="text-xl" /> Войти через Google
        </button>        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
        <p className="mt-4 text-center">Уже есть аккаунт? <Link to="/signin" className="text-gray-600 underline underline-offset-4">Войдите</Link></p>
      </div>
    </div>
  );
}
