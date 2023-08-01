import React, { useState } from "react";
import GenreSelect from "./GenreSelect";
import "./genreselect.css";

const GenreSelectView = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="genre-select-container">
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />
      <div className="line"></div>
      <p className="genre-selected"> {selectedGenre} movies found</p>

    </div>

  );
};

export default GenreSelectView;
