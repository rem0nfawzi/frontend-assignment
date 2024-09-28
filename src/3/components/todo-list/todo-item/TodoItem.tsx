import { useTodosStore } from "../../../store/useTodosStore";
import { todoType } from "../../../types";
import styles from "./todo.module.scss";

const TodoItem = ({ todo }: { todo: todoType }) => {
  const { updateTodoStatus, deleteTodo } = useTodosStore();
  return (
    <li className={styles.todo}>
      <p>{todo.title}</p>
      <div className={styles.actions}>
        <p className={styles.status}>{todo.status}</p>
        <button
          onClick={() =>
            updateTodoStatus(
              todo.id,
              todo.status === "pending" ? "done" : "pending"
            )
          }
        >
          {todo.status === "pending" ? "Mark as done" : "Mark as pending"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
