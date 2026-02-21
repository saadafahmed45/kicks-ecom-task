"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  /* -------------------- LOAD FROM LOCAL STORAGE -------------------- */
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  /* -------------------- SAVE TO LOCAL STORAGE -------------------- */
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  /* -------------------- ADD TO CART -------------------- */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + (product.quantity || 1),
              }
            : item
        );
      } else {
        return [
          ...prevItems,
          { ...product, quantity: product.quantity || 1 },
        ];
      }
    });
  };

  /* -------------------- REMOVE -------------------- */
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  /* -------------------- UPDATE QUANTITY -------------------- */
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  /* -------------------- CLEAR CART -------------------- */
  const clearCart = () => {
    setCartItems([]);
  };

  /* -------------------- TOTAL -------------------- */
  const getCartTotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  /* -------------------- COUNT -------------------- */
  const getCartCount = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

/* -------------------- CUSTOM HOOK -------------------- */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export default CartContext;