import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';
import Items from './components/Items';
import { items } from './helpers/data'
import AboutUs from './components/AboutUs';



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            return prevCart.map(cartItem =>
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


  
  return (
    <div className="wrapper">
      <Header cart={cart} removeFromCart={removeFromCart} />
      <Routes>
        <Route
          path="/"
          element={<Items items={items} addToCart={addToCart} />}
        />
        <Route
          path="/about"
          element={<AboutUs/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
