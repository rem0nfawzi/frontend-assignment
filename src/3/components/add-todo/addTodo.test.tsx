import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodo from "./AddTodo";

describe("<AddTodo", () => {
  it("Updates the input value", () => {
    render(<AddTodo />);
    const inputElement = screen.getByTestId("add-input");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement as HTMLInputElement).toHaveValue("Hello");
  });

  it("Clears input value after submission", () => {
    render(<AddTodo />);
    const inputElement = screen.getByTestId("add-input");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement as HTMLInputElement).toHaveValue("Hello");

    const submitBtn = screen.getByTestId("submit-btn");
    fireEvent.submit(submitBtn);
    expect(inputElement as HTMLInputElement).toHaveValue("");
  });
});
