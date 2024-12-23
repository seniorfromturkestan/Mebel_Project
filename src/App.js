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


function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [toggledItems, setToggledItems] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : {};
});

  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);
  
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cart]);

 
  

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

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((favId) => favId !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const clickedHeart = (id) => {
    setToggledItems((prev) => {
        const updated = { ...prev };
        if (updated[id]) {
            delete updated[id]; 
        } else {
            updated[id] = true;
        }
        localStorage.setItem('favorites', JSON.stringify(updated)); 
        return updated;
    });


    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };
  
  return (
    <div className='bg-white'>
      <Header  
          items={items} 
          cart={cart} 
          removeFromCart={removeFromCart} 
          setSearchQuery={setSearchQuery} />
      <ChatToggle/>
      
      <Routes>
        <Route
          path="/"
          element={
            <Items
              items={items}
              addToCart={addToCart}
              searchQuery={searchQuery} 
              clickedHeart={clickedHeart}
              favorites={favorites}
              toggledItems={toggledItems}
            />
          }
        />
        <Route 
            path="/:id" 
            element={
                <ItemDetail 
                  items={items} 
                  addToCart={addToCart} 
                  clickedHeart={clickedHeart}
                />
              } 
        />

        <Route path="/aboutus" element={<AboutUs  items={items} favorites={favorites} removeFromFavorites={removeFromFavorites}  addToCart={addToCart}/>} />
        <Route path="/basket" element={<Basket cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/showrooms" element={<ShowRooms />} />
        <Route path="/profile" element={<UserProfile/>} />




      </Routes>
      <BottomNav />

      
      <Footer />
    </div>
  );
}

export default App;
