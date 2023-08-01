import React from "react";

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

export default GenreSelect;
