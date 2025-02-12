import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Items from './components/Items';
import { items } from './helpers/data';
import AboutUs from './components/AboutUs';
import Basket from './components/Basket';
import ChatToggle from './components/Chat';
import ItemDetail from './components/ItemDetail';
import BottomNav from './components/BottomNav';
import ShowRooms from './components/ShowRooms';
import UserProfile from './components/UserProfile';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import { db } from '../src/helpers/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); 
      } else {
        setUserId(null); 
      }
    });

    return () => unsubscribe(); 
  }, []);

  useEffect(() => {
    if (!userId) return; 

    const fetchData = async () => {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        setCart(userData.cart || []);
        setFavorites(userData.favorites || []);
      } else {
        await setDoc(userRef, { cart: [], favorites: [] });
      }
    };

    fetchData();
  }, [userId]);

  const addToCart = async (item) => {
    if (!userId) return;

    const userRef = doc(db, 'users', userId);
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      const updatedCart = existingItem
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...item, quantity: 1 }];
      updateDoc(userRef, { cart: updatedCart });
      return updatedCart;
    });
  };

  const removeFromCart = async (id) => {
    if (!userId) return; 
    const userRef = doc(db, 'users', userId);
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      updateDoc(userRef, { cart: updatedCart });
      return updatedCart;
    });
  };

  const toggleFavorite = async (id) => {
    if (!userId) return; 

    const userRef = doc(db, 'users', userId);
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(id);
      const updatedFavorites = isFavorite
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id];

      updateDoc(userRef, { favorites: updatedFavorites });
      return updatedFavorites;
    });
  };

  const removeFromFavorites = async (id) => {
    if (!userId) return; 

    const userRef = doc(db, 'users', userId);
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((favId) => favId !== id);
      updateDoc(userRef, { favorites: updatedFavorites });
      return updatedFavorites;
    });
  };

  return (
    <div className="bg-white">
      <Header
        items={items}
        cart={cart}
        removeFromCart={removeFromCart}
        setSearchQuery={setSearchQuery}
        count={cart.length}
        favorites={favorites}
      />
      <ChatToggle />

      <Routes>
        <Route
          path="/"
          element={
            <Items
              items={items}
              addToCart={addToCart}
              searchQuery={searchQuery}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <ItemDetail
              items={items}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          }
        />
        <Route path="/aboutus" element={<AboutUs items={items} favorites={favorites} removeFromFavorites={removeFromFavorites} addToCart={addToCart} />} />
        <Route path="/basket" element={<Basket cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/showrooms" element={<ShowRooms />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;