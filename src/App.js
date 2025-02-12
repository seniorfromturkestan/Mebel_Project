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

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });


  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(id);
      return isFavorite
        ? prevFavorites.filter((favId) => favId !== id) 
        : [...prevFavorites, id];
    });
  };

  const clickedHeart = (id) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(id);
      const updatedFavorites = isFavorite
        ? prevFavorites.filter((favId) => favId !== id) 
        : [...prevFavorites, id]; 
  
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  
  

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
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
              clickedHeart={clickedHeart}

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
              clickedHeart={clickedHeart}
              removeFromFavorites={removeFromFavorites}

            />
          }
        />
        <Route
          path="/aboutus"
          element={
            <AboutUs
              items={items}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              addToCart={addToCart}
              clickedHeart={clickedHeart}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="/basket"
          element={<Basket cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/showrooms" element={<ShowRooms />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;
