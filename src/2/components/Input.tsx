import { FunctionComponent } from "react";

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
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          const text = e.currentTarget.value;
          setSearchText(text);
          filterDisplayedItems(text);
        }}
        placeholder="Search Items"
      />
    </div>
  );
};

export default Input;
