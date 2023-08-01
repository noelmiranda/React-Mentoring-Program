import React from "react";
import SearchForm from "./SearchForm";

const SearchFormView = () => {
  const handleSearch = (searchQuery) => {
    alert("Performing search with query: " + searchQuery);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
};

export default SearchFormView;
