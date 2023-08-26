import React from "react";
import PropTypes from "prop-types";

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  return (
    <div className="genre-select-items-container">
      {genres.map((genre) => (
        <button
          className="genre-item"
          key={genre}
          onClick={() => onSelect(genre)}
          style={{
            color: selectedGenre === genre ? "#F65261" : "white",
          }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

GenreSelect.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default GenreSelect;
