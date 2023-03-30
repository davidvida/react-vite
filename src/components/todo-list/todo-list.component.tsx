import React from "react";
import { staticData } from "../../data/items";
import { ItemProps } from "../../types/todo-item";
import TodoItem from "../todo-item/todo.item.component";

type Props = {
  data: Array<ItemProps>;
  onRemoveItem: Function;
};

const TodoList = ({ data, onRemoveItem }: Props) => (
  <React.Fragment>
    {data.map((item) => (
      <React.Fragment key={item.id}>
        <TodoItem item={item} onRemoveItem={onRemoveItem} />
        <br />
      </React.Fragment>
    ))}
  </React.Fragment>
);
export default TodoList;
