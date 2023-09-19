import React, { createContext, useContext, useState, useEffect } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSerchtTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const API_KEY = 'd7afdbcaa9934143b40796fdbd6507dc';

  const fetchPopulares = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&ordering=-added&page_size=880`);
      const data = await response.json();
      
      if (data.results) {
        setPopularGames(data.results);
      }
    } catch (error) {
      console.log('Error fetching popular games:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`);
      const data = await response.json();

      if (data.results) {
        setSearchResults(data.results);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    if (searchTerm === '' && popularGames.length === 0) {
      fetchPopulares();
    }
  }, [searchTerm, popularGames.length]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSerchtTerm,
        searchResults,
        handleSearch,
        popularGames,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
