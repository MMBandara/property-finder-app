import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    if (favorites.some((fav) => fav.id === property.id)) {
      alert('This property is already in your favorites!');
      return;
    }
    setFavorites((prev) => [...prev, property]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

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
