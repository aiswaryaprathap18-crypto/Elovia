import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (movie) => {
    setWishlist((prev) => {
      // Prevent duplicates using title instead of id
      if (prev.some(item => item.title === movie.title)) {
        return prev;
      }
      return [...prev, movie];
    });
  };

  return (
    <MovieContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        wishlist,
        addToWishlist
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};