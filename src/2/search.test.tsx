import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./index";

describe("<Search />", () => {
  it("Filter items based on the written text", () => {
    const { rerender } = render(<Search />);
    const inputElement = screen.getByTestId("search-input");
    const listItems1 = screen.queryAllByTestId("list-item");
    expect(listItems1.length).toBe(10);

    fireEvent.change(inputElement, {
      target: {
        value: "List item 4",
      },
    });

    rerender(<Search />);
    const listItems2 = screen.queryAllByTestId("list-item");
    expect(listItems2.length).toBe(1);
  });

  it("Shows the item that matches the written text", () => {
    const { rerender } = render(<Search />);
    const inputElement = screen.getByTestId("search-input");

    fireEvent.change(inputElement, {
      target: {
        value: "List item 5",
      },
    });

    rerender(<Search />);
    const listItem = screen.getByTestId("list-item");
    expect(listItem).toHaveTextContent("List item 5");
  });

  it("Shows all items when removing the input value", () => {
    const { rerender } = render(<Search />);
    const inputElement = screen.getByTestId("search-input");

    fireEvent.change(inputElement, {
      target: {
        value: "List item 5",
      },
    });

    rerender(<Search />);
    const listItems = screen.queryAllByTestId("list-item");
    expect(listItems.length).toBe(1);

    const clearBtn = screen.getByTestId("x-btn");
    fireEvent.click(clearBtn);
    rerender(<Search />);
    expect(clearBtn).not.toBeInTheDocument();

    const updatedListItems = screen.queryAllByTestId("list-item");
    expect(updatedListItems.length).toBe(10);
  });
});
