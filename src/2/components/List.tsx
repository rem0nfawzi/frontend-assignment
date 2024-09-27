import { FunctionComponent } from "react";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

export interface ItemProps {
  id: number;
  title: string;
}
interface ListProps {
  listItems: ItemProps[];
}

const List: FunctionComponent<ListProps> = ({ listItems }) => {
  return (
    <div>
      <ul>
        {listItems.map((item) => (
          <Item key={item.id} id={item.id} title={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default List;
