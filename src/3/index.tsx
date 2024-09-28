import * as React from "react";

// Style
import "./index.scss";
import AddTodo from "./components/add-todo/AddTodo";
import TodoList from "./components/todo-list/TodoList";

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
