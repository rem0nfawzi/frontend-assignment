import { useTodosStore } from "../../store/useTodosStore";
import TodoItem from "./todo-item/TodoItem";
import styles from "./todoList.module.scss";

const TodoList = () => {
  const { todos } = useTodosStore();

  const pendingTodos = todos.filter((todo) => todo.status === "pending");
  const doneTodos = todos.filter((todo) => todo.status === "done");
  return (
    <>
      <h2>My ToDo list</h2>
      <ul className={styles.todo_list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
