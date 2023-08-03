import { fireEvent, render, screen } from "@testing-library/react";
import CounterView from "./index"; // Correct the import path

describe("Counter", () => {
  it("component renders initial value provided in props", () => {
    render(<CounterView />);
    const countValueElement = screen.getByTestId("count");
    const countValueText = countValueElement.textContent; // Get the text content
    const countValue = Number(countValueText.replace("Count: ", "")); // Remove "Count: " prefix and convert to number
    expect(countValue).toEqual(0);
  });

  it("click event on increment button increments the displayed value", () => {
    render(<CounterView />);
    const incrementBttn = screen.getByRole("button", { name: "Increment" });
    const countValueElement = screen.getByTestId("count");
    const countValueText = countValueElement.textContent; // Get the initial text content
    const countValue1 = Number(countValueText.replace("Count: ", "")); // Remove "Count: " prefix and convert to number
    expect(countValue1).toEqual(0);

    fireEvent.click(incrementBttn);

    const updatedCountValueText = screen.getByTestId("count").textContent; // Get the updated text content
    const countValue2 = Number(updatedCountValueText.replace("Count: ", ""));
    expect(countValue2).toEqual(1);
  });
  it("click event on decrement button decrements the displayed value", () => {
    render(<CounterView />);
    const decrementBttn = screen.getByRole("button", { name: "Decrement" });
    const countValueElement = screen.getByTestId("count");
    const countValueText = countValueElement.textContent; // Get the initial text content
    const countValue1 = Number(countValueText.replace("Count: ", "")); // Remove "Count: " prefix and convert to number
    expect(countValue1).toEqual(0);

    fireEvent.click(decrementBttn);

    const updatedCountValueText = screen.getByTestId("count").textContent; // Get the updated text content
    const countValue2 = Number(updatedCountValueText.replace("Count: ", ""));
    expect(countValue2).toEqual(-1);
  });
});
