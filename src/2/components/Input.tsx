import { FunctionComponent } from "react";
import { IoCloseCircle } from "react-icons/io5";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  filterDisplayedItems: (searchText: string) => void;
}

const Input: FunctionComponent<InputProps> = ({
  searchText,
  setSearchText,
  filterDisplayedItems,
}) => {
  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        className="search-input"
        data-testid="search-input"
        value={searchText}
        onChange={(e) => {
          const text = e.currentTarget.value;
          setSearchText(text);
          filterDisplayedItems(text);
        }}
        placeholder="Search Items"
      />
      {searchText.length > 0 && (
        <button
          className="remove-search-btn"
          onClick={() => {
            setSearchText("");
            filterDisplayedItems("");
          }}
          data-testid="x-btn"
        >
          <IoCloseCircle size={20} />
        </button>
      )}
    </div>
  );
};

export default Input;
