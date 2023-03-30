import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  item: ItemProps;
  onDelete: Function;
}

const TodoItem = ({item, onDelete}: Props) => {
  const { id, description, status } = item;

  const handleRemoveItem = (id: any) => {    
    console.log('dispatch the remove item action');
    onDelete(id);
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
        <button onClick={() => handleRemoveItem(id)}>x</button>
      </span>
    </div>
);
}

export default TodoItem;

