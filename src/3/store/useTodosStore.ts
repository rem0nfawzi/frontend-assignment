import { create } from "zustand";
import { todoStatusType, todoType } from "../types";

type Store = {
  todos: todoType[];
  addTodo: (todo: todoType) => void;
  updateTodoStatus: (id: string, status: todoStatusType) => void;
  deleteTodo: (id: string) => void;
  searchText: string;
  setSearchText: (text: string) => void;
  filteredItems: todoType[];
};

const calculateFilteredItems = (text: string, todos: todoType[]) => {
  const trimmedText = text.trim();
  let newFilteredItems: todoType[] = [];
  if (trimmedText !== "") {
    const matchedItems = todos.filter((todo) =>
      todo.title.toLocaleLowerCase().includes(trimmedText.toLowerCase())
    );
    newFilteredItems = [
      ...matchedItems.filter((todo) => todo.status === "pending"),
      ...matchedItems.filter((todo) => todo.status === "done"),
    ];
  }
  return newFilteredItems;
};

export const useTodosStore = create<Store>()((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => {
      const newTodos = [todo, ...state.todos];
      // To add new todos to the filtered list if user is already searching for something
      const newFilteredItems = calculateFilteredItems(
        state.searchText,
        newTodos
      );
      return { todos: newTodos, filteredItems: newFilteredItems };
    }),
  updateTodoStatus: (id: string, status: todoStatusType) =>
    set((state) => {
      const newTodos = state.todos.map((todo) => ({
        ...todo,
        status: todo.id === id ? status : todo.status,
      }));

      // To update the filtered items too
      const newFilteredItems = calculateFilteredItems(
        state.searchText,
        newTodos
      );
      return {
        todos: newTodos,
        filteredItems: newFilteredItems,
      };
    }),
  deleteTodo: (id: string) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      // To update the filtered items too
      const newFilteredItems = calculateFilteredItems(
        state.searchText,
        newTodos
      );
      return { todos: newTodos, filteredItems: newFilteredItems };
    }),
  searchText: "",
  setSearchText: (text) =>
    set((state) => {
      const newFilteredItems = calculateFilteredItems(text, state.todos);
      return { searchText: text, filteredItems: newFilteredItems };
    }),
  filteredItems: [],
}));
