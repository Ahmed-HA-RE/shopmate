import { useContext, useState, createContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart || [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) => {
          return item.id === product.id ? { ...item, qty: item.qty + 1 } : item;
        });
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    return setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
