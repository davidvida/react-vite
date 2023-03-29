import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  item: ItemProps;
}

const TodoItem = ({item}: Props) => {
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
        <button data-action='delete' data-index={id}>x</button>
      </span>
    </div>
  );
}

export default TodoItem;

