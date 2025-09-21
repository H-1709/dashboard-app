import React from 'react';
import { useDashboard } from '../context/DashboardContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useDashboard();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;