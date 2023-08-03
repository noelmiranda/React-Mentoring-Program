import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // Import the extended expect matchers
import GenreSelect from "./GenreSelect";

describe("GenreSelect", () => {
  const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const selectedGenre = "COMEDY";
  const mockOnSelect = jest.fn();

  it("renders all genres passed in props", () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={mockOnSelect} />);

    genres.forEach((genre) => {
      const genreButton = screen.getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });
  });

  it("highlights a selected genre passed in props", () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={mockOnSelect} />);

    const selectedGenreButton = screen.getByText(selectedGenre);
    expect(selectedGenreButton).toHaveStyle("color: #F65261");
  });

  it("calls onChange callback with correct genre after button click", () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={mockOnSelect} />);

    const genreButton = screen.getByText("HORROR");
    fireEvent.click(genreButton);

    expect(mockOnSelect).toHaveBeenCalledWith("HORROR");
  });
});
