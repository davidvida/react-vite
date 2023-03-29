import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  item: ItemProps;
}

const TodoItem = ({ item }: Props) => {
  const { id, description, status } = item;

  return (
    <div>
      <span>
        o
      </span>&nbsp;
      <span style={{ textDecoration: status === 'done' ? 'line-through' : '' }}>
        {description + " " + id}
      </span>&nbsp;
      <span>
        <button id={item.id}>x</button>
      </span>
    </div>
  );
}

export default TodoItem;

