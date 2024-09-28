import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoListApp from "./index";
import { useTodosStore } from "./store/useTodosStore";

const zustandInitialState = useTodosStore.getState();

describe("<TodoListApp />", () => {
  beforeEach(() => {
    cleanup();
    useTodosStore.setState(zustandInitialState, true);
  });

  it("Adds a new ToDo", () => {
    const { rerender, unmount } = render(<TodoListApp />);
    const addToDoInput = screen.getByTestId("add-input");
    const addFormElement = screen.getByTestId("add-form");

    fireEvent.change(addToDoInput as HTMLInputElement, {
      target: { value: "Item 1" },
    });
    fireEvent.submit(addFormElement);

    rerender(<TodoListApp />);
    const listItems = screen.queryAllByTestId("list-item");
    expect(listItems).toHaveLength(1);

    fireEvent.change(addToDoInput as HTMLInputElement, {
      target: { value: "Item 2" },
    });
    fireEvent.submit(addFormElement);
    rerender(<TodoListApp />);
    const newListItems = screen.queryAllByTestId("list-item");
    expect(newListItems).toHaveLength(2);
  });

  it("Deletes a specific ToDo", () => {
    const { rerender } = render(<TodoListApp />);
    const addToDoInput = screen.getByTestId("add-input");
    const addFormElement = screen.getByTestId("add-form");
    fireEvent.change(addToDoInput as HTMLInputElement, {
      target: { value: "Item 1" },
    });
    fireEvent.submit(addFormElement);
    rerender(<TodoListApp />);

    const todoItem = screen.getByTestId("list-item");
    expect(todoItem).toBeInTheDocument();

    const deleteBtn = screen.getByTestId("delete-todo");
    fireEvent.click(deleteBtn);
    rerender(<TodoListApp />);

    expect(todoItem).not.toBeInTheDocument();
  });

  it("Filters Todos based on search", () => {
    const { rerender } = render(<TodoListApp />);
    const addToDoInput = screen.getByTestId("add-input");
    const addFormElement = screen.getByTestId("add-form");
    // Add 2 Todos
    fireEvent.change(addToDoInput as HTMLInputElement, {
      target: { value: "Item 1" },
    });
    fireEvent.submit(addFormElement);
    fireEvent.change(addToDoInput as HTMLInputElement, {
      target: { value: "Item 2" },
    });
    fireEvent.submit(addFormElement);
    rerender(<TodoListApp />);

    const todoItems = screen.queryAllByTestId("list-item");
    expect(todoItems).toHaveLength(2);

    // Search for one todo
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput as HTMLInputElement, {
      target: { value: "Item 1" },
    });
    rerender(<TodoListApp />);

    // Now the only one todo we're searching for is being displayed
    const updatedTodoItems = screen.queryAllByTestId("list-item");
    expect(updatedTodoItems).toHaveLength(1);
  });
});
