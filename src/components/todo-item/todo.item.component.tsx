import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  item: ItemProps;
  onDeleteItem: (id: number) => void;
}

function TodoItem({ item, onDeleteItem }: Props) {
  const { id, description, status } = item;

  const handleRemoveItem = () => {
    console.log(`dispatch the remove item action ${id}`);
    onDeleteItem(id);
  };

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
