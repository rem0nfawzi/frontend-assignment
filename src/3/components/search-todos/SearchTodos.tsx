import { useTodosStore } from "../../store/useTodosStore";
import { IoCloseCircle } from "react-icons/io5";
import styles from "./searchTodos.module.scss";

const SearchTodos = () => {
  const { searchText, setSearchText } = useTodosStore();
  return (
    <div className={styles.input_wrapper}>
      <input
        type="text"
        className={styles.input}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a ToDo"
      />
      {searchText.length > 0 && (
        <button
          className={styles.clear_btn}
          onClick={() => {
            setSearchText("");
          }}
          data-testid="x-btn"
        >
          <IoCloseCircle size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchTodos;
