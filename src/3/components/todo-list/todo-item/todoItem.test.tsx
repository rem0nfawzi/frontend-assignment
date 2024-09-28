import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItem from "./TodoItem";

describe("<TodoItem />", () => {
  it("Displays the right status", () => {
    const { rerender } = render(
      <TodoItem todo={{ id: "1", title: "Item 1", status: "pending" }} />
    );
    const statusElement = screen.getByTestId("status");
    expect(statusElement).toHaveTextContent("pending");

    rerender(<TodoItem todo={{ id: "1", title: "Item 1", status: "done" }} />);
    expect(statusElement).toHaveTextContent("done");
  });

  it("Button displays mark as done | mark as pending depending on status", () => {
    const { rerender } = render(
      <TodoItem todo={{ id: "1", title: "Item 1", status: "pending" }} />
    );
    const markAsBtn = screen.getByTestId("mark-as");
    expect(markAsBtn).toHaveTextContent(/mark as done/i);

    rerender(<TodoItem todo={{ id: "1", title: "Item 1", status: "done" }} />);
    expect(markAsBtn).toHaveTextContent(/mark as pending/i);
  });
});
