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

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [toggledItems, setToggledItems] = useState({});
  
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

  const clickedHeart = (id) => {
    setToggledItems((prev) => ({
        ...prev,
        [id]: !prev[id], 
    }));
};
  
  return (
    <div className='bg-white'>
      <Header  items={items} cart={cart} removeFromCart={removeFromCart} setSearchQuery={setSearchQuery} />
      <ChatToggle/>
      
      <Routes>
        <Route
          path="/"
          element={
            <Items
              items={items}
              addToCart={addToCart}
              searchQuery={searchQuery} 
              toggledItems={toggledItems}
              clickedHeart={clickedHeart}
            />
          }
        />
        <Route path="/:id" element={<ItemDetail items={items} addToCart={addToCart} />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/basket" element={<Basket cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <BottomNav />

      
      <Footer />
    </div>
  );
}

export default App;
