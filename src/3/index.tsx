import * as React from "react";

// Style
import "./index.scss";
import TodoList from "./components/todo-list/TodoList";
import AddTodo from "./components/add-todo/AddTodo";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  return (
    <div id="task-3">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Task3;
