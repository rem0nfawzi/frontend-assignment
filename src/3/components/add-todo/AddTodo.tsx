import { useCallback, useState } from "react";
import { useTodosStore } from "../../store/useTodosStore";
import { v4 as uuidv4 } from "uuid";
import Input from "../shared/input/Input";
import styles from "./addTodo.module.scss";

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
      <Input value={todo} setValue={setTodo} placeholder="Add a new ToDo" />
      <button type="submit" className={styles.submit_btn}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
