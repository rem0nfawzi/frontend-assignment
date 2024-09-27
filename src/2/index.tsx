import { FunctionComponent, useCallback, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { listItems } from "./data/items";

// Style
import "./index.scss";

const Task2: FunctionComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [displayedListItems, setDisplayedListItems] = useState(listItems);

  const filterDisplayedItems = useCallback(
    // searchText is passed a parameter, and not used directly from the state not to re create the function each time text changes
    (searchText: string) => {
      const lowerCaseText = searchText.toLocaleLowerCase().trim();
      setDisplayedListItems(
        listItems.filter((item) =>
          item.title.toLowerCase().includes(lowerCaseText)
        )
      );
    },
    [setDisplayedListItems]
  );
  return (
    <div>
      <Input
        searchText={searchText}
        setSearchText={setSearchText}
        filterDisplayedItems={filterDisplayedItems}
      />
      <br />
      <List listItems={displayedListItems} />
    </div>
  );
};

export default Task2;
