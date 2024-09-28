import { create } from "zustand";
import { todoType } from "../types";

type Store = {
  todos: todoType[];
  addTodo: (todo: todoType) => void;
};

export const useTodosStore = create<Store>()((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
}));
