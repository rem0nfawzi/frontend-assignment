import { IoCloseCircle } from "react-icons/io5";
import styles from "./input.module.scss";

type inputProps = {
  size?: "medium" | "small";
  value: string;
  setValue: (
    text: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
};

const Input = ({
  size = "medium",
  value,
  setValue,
  placeholder,
}: inputProps) => {
  return (
    <div className={styles.input_wrapper}>
      <input
        type="text"
        className={`${styles.input} ${styles[size]}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {value.length > 0 && (
        <button
          type="button"
          className={styles.clear_btn}
          onClick={() => {
            setValue("");
          }}
          data-testid="x-btn"
        >
          <IoCloseCircle size={16} />
        </button>
      )}
    </div>
  );
};

export default Input;
