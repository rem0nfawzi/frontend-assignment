import "./input.scss";

type inputProps = {
  id: string;
  name: string;
  type?: "text" | "password";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: null | string;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  validateInput: (value: string) => boolean;
  icon?: React.ReactNode;
  handleIconClick?: () => void;
  placeholder?: string;
};

const Input = ({
  id,
  name,
  type = "text",
  value,
  setValue,
  error,
  setError,
  validateInput,
  icon,
  handleIconClick,
  placeholder,
}: inputProps) => {
  return (
    <div className={`input-wrapper${error ? " has-error" : ""}`}>
      <label htmlFor={id}>{name}</label>
      <div className="field-wrapper">
        <input
          id={id}
          name={name}
          onChange={(e) => {
            setError(null);
            setValue(e.target.value);
          }}
          onBlur={(e) => validateInput(e.target.value)}
          value={value}
          type={type}
          placeholder={placeholder}
          data-testid="input-field"
        />
        <button className="icon-btn" onClick={handleIconClick} type="button">
          {icon}
        </button>
      </div>
      {error && (
        <p className="error" data-testid="error">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
