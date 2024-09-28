import { useCallback, useState } from "react";
import styles from "./addTodo.module.scss";
import { useTodosStore } from "../../store/useTodosStore";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodosStore();

  const handleSubmit = useCallback(
    (text: string) => {
      if (text.trim().length > 0) {
        addTodo({ id: uuidv4(), title: text.trim(), status: "pending" });
        setTodo("");
      }
    },
    [addTodo]
  );
  return (
    <form
      className={styles.add_todo}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(todo);
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new ToDo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
