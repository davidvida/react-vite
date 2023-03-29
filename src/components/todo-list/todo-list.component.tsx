import React from "react";
import { staticData } from "../../data/items";
import { ItemProps } from "../../types/todo-item";
import TodoItem from "../todo-item/todo.item.component";

type Props = {
  data: Array<ItemProps>;
  onRemoveItem: (event: React.MouseEvent) => void;
}

const TodoList = ({ data, onRemoveItem }: Props) =>
  <div onClick={onRemoveItem}>
    {data.map((item) => (
      <React.Fragment key={item.id}>
        <TodoItem item={item} />
      <br/>
      </React.Fragment>
    ))}
  </div>;

export default TodoList;

