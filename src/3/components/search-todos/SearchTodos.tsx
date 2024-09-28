import { useTodosStore } from "../../store/useTodosStore";
import Input from "../shared/input/Input";

const SearchTodos = () => {
  const { searchText, setSearchText } = useTodosStore();
  return (
    <Input
      size="small"
      value={searchText}
      setValue={setSearchText}
      placeholder="Search ToDos"
    />
  );
};

export default SearchTodos;
