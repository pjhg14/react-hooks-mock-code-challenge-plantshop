import React from "react";

function Search({ filter, onSearchChange }) {
  function handleSearch(event) {
    onSearchChange(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={filter}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
