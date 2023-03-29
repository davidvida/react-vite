import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  item: ItemProps
  onRemoveItem: (id: number) => void
}

const TodoItem = ({item, onRemoveItem}: Props) => {
  const { id, description, status } = item;

  const handleRemoveItem = () => {
    onRemoveItem(id);
  }

  return (
    <div>
      <span>
        o
      </span>&nbsp;
      <span style={{ textDecoration: status === 'done' ? 'line-through' : '' }}>
        {description}
      </span>&nbsp;
      <span>
        <button onClick={handleRemoveItem}>x</button>
      </span>
    </div>
);
}

export default TodoItem;

