import React, { useEffect, useState } from "react";
import { auth } from "../helpers/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        navigate("/signin"); // Убрал слэш
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin"); // Убрал слэш
    } catch (err) {
      console.error("Ошибка при выходе:", err);
    }
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gray-100 text-gray-600 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Личный кабинет</h2>
        <p className="mb-4">Привет, {userEmail}!</p>
        <button
          onClick={handleLogout}
          className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500 transition duration-200"
        >
          Выйти
        </button>
      </div>
    </div>
  );
}