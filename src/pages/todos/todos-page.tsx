import React from "react";
import { Provider } from "react-redux";
import TodoContainer from "@/sections/todos/todo-container/todo-container.component";
import { store } from "@/store/store";

const TodosPage = () => {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
}

export default TodosPage;
