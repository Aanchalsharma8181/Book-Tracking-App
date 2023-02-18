import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
