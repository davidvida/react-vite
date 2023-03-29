import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  item: ItemProps;
  handleRemoveItem: (id:number) => void;
}

const TodoItem = ({item, handleRemoveItem}: Props) => {
  const { id, description, status } = item;

  return (
    <div>
      <span>
        o
      </span>&nbsp;
      <span style={{ textDecoration: status === 'done' ? 'line-through' : '' }}>
        {description}
      </span>&nbsp;
      <span>
        <button onClick={() => handleRemoveItem(id)}>x</button>
      </span>
    </div>
);
}

export default TodoItem;

