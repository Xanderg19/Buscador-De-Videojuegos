import React from 'react';
import SearchResults from './SearchResults';
import { useSearch } from '../context/searchContext';

const HomeGames = () => {
    const {
        searchTerm,
        searchResults,
        popularGames,
      } = useSearch();
    
      return (
        <SearchResults results={searchResults.length > 0 ? searchResults : popularGames} />
      );
}

export default HomeGames
