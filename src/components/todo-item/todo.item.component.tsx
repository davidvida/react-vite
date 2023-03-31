import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  item: ItemProps;
  onSelectItem: (item: ItemProps) => void;
}

const TodoItem = ({ item, onSelectItem }: Props) => {
  const { id, description, status } = item;

  const handleRemoveItem = () => {
    console.log('dispatch the remove item action');
  }

  return (
    <div>
      <span>
        o
      </span>&nbsp;
      <span
        style={{ textDecoration: status === 'done' ? 'line-through' : '' }}
        onClick={() => onSelectItem(item)}
      >
        {description}
      </span>&nbsp;
      <span>
        <button onClick={handleRemoveItem}>x</button>
      </span>
    </div>
);
}

export default TodoItem;

