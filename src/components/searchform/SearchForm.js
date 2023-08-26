import React, { useState } from "react";
import PropTypes from "prop-types";
import "./searchform.css";

const SearchForm = ({ initialSearchQuery, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || "");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
      resetSearchQuery();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      onSearch(searchQuery);
      resetSearchQuery();
    }
  };

  const resetSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <div className="search-form-container">
      <h2 className="title-search-header">FIND YOUR MOVIE</h2>
      <div className="input-search-button">
        <input
          className="input-search-form"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="What do you want to watch?"
        />
        <button className="search-film-button" onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  initialSearchQuery: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
