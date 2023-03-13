import { render, fireEvent, getByText, screen } from "@testing-library/react";
import App from "../App";

test("Check if the Count is present in the application", () => {
  render(<App />);
  const countBox = screen.getByTestId("Count");
  expect(countBox).toBeInTheDocument();
});

test("Should increase count when increment button is clicked", () => {
  render(<App />);
  const incrementButton = screen.getByTestId("increment-button");
  fireEvent.click(incrementButton);
  const countBox = screen.getByTestId("Count");
  expect(countBox).toHaveTextContent("Count : 1");
});

test("Should decrease count when decrement button is clicked", () => {
  render(<App />);
  const decrementButton = screen.getByTestId("decrement-button");
  fireEvent.click(decrementButton);
  const countBox = screen.getByTestId("Count");
  expect(countBox).toHaveTextContent("Count : 0");
});

test("Should reset count when reset button is clicked", () => {
  render(<App />);
  const resetButton = screen.getByTestId("reset-button");
  fireEvent.click(resetButton);
  const countBox = screen.getByTestId("Count");
  expect(countBox).toHaveTextContent("Count : 0");
});