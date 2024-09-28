import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  it("Shows the empty message initially", () => {
    render(<TodoList />);
    const emptyElement = screen.getByTestId("empty-msg");
    expect(emptyElement).toHaveTextContent(
      /No ToDos found, start adding new ToDos!/i
    );
  });

  // Other scenarios are covered in the TodoListApp integration tests
});
