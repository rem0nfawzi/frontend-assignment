import { FunctionComponent } from "react";
import { ItemProps } from "./List";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

const Item: FunctionComponent<ItemProps> = ({ title }) => {
  return <li data-testid="list-item">{title}</li>;
};

export default Item;
