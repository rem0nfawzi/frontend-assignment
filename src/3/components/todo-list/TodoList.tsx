import { useTodosStore } from "../../store/useTodosStore";
import SearchTodos from "../search-todos/SearchTodos";
import TodoItem from "./todo-item/TodoItem";
import styles from "./todoList.module.scss";

const TodoList = () => {
  const { todos, searchText, filteredItems } = useTodosStore();

  const pendingTodos = todos.filter((todo) => todo.status === "pending");
  const doneTodos = todos.filter((todo) => todo.status === "done");

  const displayedTodos =
    searchText !== "" ? filteredItems : [...pendingTodos, ...doneTodos];
  return (
    <>
      <div className={styles.title_wrapper}>
        <h2>ToDos</h2>
        {todos.length > 0 && <SearchTodos />}
      </div>
      {displayedTodos.length > 0 ? (
        <ul className={styles.todo_list}>
          {displayedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p data-testid="empty-msg">
          {searchText
            ? "No ToDos matches your search"
            : "No ToDos found, start adding new ToDos!"}
        </p>
      )}
    </>
  );
};

export default TodoList;
