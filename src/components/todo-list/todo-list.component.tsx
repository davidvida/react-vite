import React from 'react';
import { staticData } from '../../data/items';
import { ItemProps } from '../../types/todo-item';
import TodoItem from '../todo-item/todo.item.component';

type Props = {
  data: Array<ItemProps>;
  handleRemoveItem: any;
};

const TodoList = ({ data, handleRemoveItem }: Props) => {
  return (
    <React.Fragment>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <TodoItem
            item={item}
            removeItemOnClick={() => handleRemoveItem(item.id)}
          />
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
export default TodoList;
