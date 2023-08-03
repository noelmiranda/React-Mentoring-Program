import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the custom matchers
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  it("renders an input with the value equal to initial value passed in props", () => {
    const initialSearchQuery = "Initial Value";
    render(<SearchForm initialSearchQuery={initialSearchQuery} onSearch={() => {}} />);

    const inputElement = screen.getByPlaceholderText("What do you want to watch?");
    expect(inputElement).toHaveAttribute("value", initialSearchQuery);
  });

  it("calls onChange prop after typing and clicking the Submit button", () => {
    const mockOnChange = jest.fn();
    render(<SearchForm onSearch={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText("What do you want to watch?");
    const searchButton = screen.getByText("SEARCH");

    const searchQuery = "Test Query";
    fireEvent.change(inputElement, { target: { value: searchQuery } });
    fireEvent.click(searchButton);

    expect(mockOnChange).toHaveBeenCalledWith(searchQuery);
  });

  it("calls onChange prop after typing and pressing Enter key", () => {
    const mockOnChange = jest.fn();
    render(<SearchForm onSearch={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText("What do you want to watch?");
    const searchQuery = "Test Query";

    fireEvent.change(inputElement, { target: { value: searchQuery } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: 13, charCode: 13 });

    expect(mockOnChange).toHaveBeenCalledWith(searchQuery);
  });
});
