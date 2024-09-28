import { useTodosStore } from "../../../store/useTodosStore";
import { todoType } from "../../../types";
import styles from "./todo.module.scss";

const TodoItem = ({ todo }: { todo: todoType }) => {
  const { updateTodoStatus, deleteTodo } = useTodosStore();
  return (
    <li className={styles.todo} data-testid="list-item">
      <div
        className={`${styles.title} ${
          todo.status === "done" ? styles.done : ""
        }`}
      >
        <p>{todo.title}</p>
        <span
          className={`${styles.status} ${
            todo.status === "done" ? styles.status_done : ""
          }`}
        >
          {todo.status}
        </span>
      </div>

      <div className={styles.actions}>
        <span
          className={`${styles.status} ${
            todo.status === "done" ? styles.status_done : ""
          }`}
          data-testid="status"
        >
          {todo.status}
        </span>
        <button
          onClick={() =>
            updateTodoStatus(
              todo.id,
              todo.status === "pending" ? "done" : "pending"
            )
          }
          data-testid="mark-as"
        >
          {todo.status === "pending" ? "Mark as done" : "Mark as pending"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className={styles.delete}
          data-testid="delete-todo"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
