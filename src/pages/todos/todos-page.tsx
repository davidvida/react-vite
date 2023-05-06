import React from "react";
import { Provider } from "react-redux";
import TodoContainer from "@/sections/todos/todo-container/todo-container.component";
import { setupStore} from "@/store/store";

const TodosPage = () => {
  return (
    <Provider store={setupStore({})}>
      <TodoContainer />
    </Provider>
  );
}

export default TodosPage;
