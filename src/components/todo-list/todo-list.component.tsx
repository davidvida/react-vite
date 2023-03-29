import React from "react";
import { staticData } from "../../data/items";
import { ItemProps } from "../../types/todo-item";
import TodoItem from "../todo-item/todo.item.component";

type Props = {
  data: Array<ItemProps>;
  handleDeleteItem: (id: number) => void;
}

const TodoList = ({ data, handleDeleteItem }: Props) => {
  const handleDeleteButton = (e: any) =>
  {
    if (e.target.localName == 'button') handleDeleteItem(e.target.id);
  }

  return <div onClick={handleDeleteButton}>
    {data.map((item) => (
      <div key={item.id}>
        <TodoItem item={item} />
        <br />
      </div>
    ))}
  </div>;
}

export default TodoList;

