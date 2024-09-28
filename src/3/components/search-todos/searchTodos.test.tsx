import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchTodos from "./SearchTodos";

describe("<SearchTodos", () => {
  it("Updates the input value", () => {
    render(<SearchTodos />);
    const inputElement = screen.getByTestId("search-input");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement as HTMLInputElement).toHaveValue("Hello");
  });
});
