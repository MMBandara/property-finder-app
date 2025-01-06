import React, { createContext, useState, useContext } from 'react';

// Create context for managing favorites
const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
  // State to store favorite properties
  const [favorites, setFavorites] = useState([]);

  // Add a property to favorites
  const addFavorite = (property) => {
    if (favorites.some((fav) => fav.id === property.id)) {
      alert('This property is already in your favorites!');
      return;
    }
    setFavorites((prev) => [...prev, property]);
  };

  // Remove a property from favorites
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  // Clear all
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
export const useFavorites = () => useContext(FavoritesContext);
