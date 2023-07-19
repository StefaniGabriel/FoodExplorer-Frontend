import React, { createContext, useState } from 'react';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const contextValue = {
    quantity,
    updateQuantity
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderContextProvider };
