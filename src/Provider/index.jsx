import React, { createContext, useState } from 'react';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const localQuantity = localStorage.getItem('quantity');

  const [quantity, setQuantity] = useState(localQuantity || 0);
  const [cart, setCart] = useState([]);
  const [idProduct, setIdProduct] = useState([]);

 



  const updateQuantity = (newQuantity) => {
      setQuantity(newQuantity);

      localStorage.removeItem('quantity');
      localStorage.setItem('quantity', newQuantity);
   
   };

  const updateCart = (newCart) => {
    setCart(prev => [...prev, newCart]);

  }

  const updateIdQuantity = (id, newQuantity) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity = newQuantity;
      }
      return item;
    });
    setIdProduct(newCart);
  }

  const contextValue = {
    quantity,
    updateQuantity,
    cart,
    updateCart,
    updateIdQuantity
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderContextProvider };
