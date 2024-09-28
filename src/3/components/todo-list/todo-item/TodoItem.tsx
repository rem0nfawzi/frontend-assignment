import { todoType } from "../../../types";
import styles from "./todo.module.scss";

const TodoItem = ({ todo }: { todo: todoType }) => {
  return (
    <li className={styles.todo}>
      <p>{todo.title}</p>
      <div className={styles.actions}>
        <p className={styles.status}>{todo.status}</p>
        <button>Mark as done</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
