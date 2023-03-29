import React from 'react';
import { ItemProps } from '../../types/todo-item';

type Props = {
  item: ItemProps;
  removeItemOnClick: any;
};

const TodoItem = ({ item, removeItemOnClick }: Props) => {
  const { id, description, status } = item;

  const handleRemoveItem = () => {
    console.log('dispatch the remove item action');
    removeItemOnClick();
  };

  return (
    <div>
      <span>o</span>&nbsp;
      <span style={{ textDecoration: status === 'done' ? 'line-through' : '' }}>
        {description}
      </span>
      &nbsp;
      <span>
        <button onClick={handleRemoveItem}>x</button>
      </span>
    </div>
  );
};

export default TodoItem;
