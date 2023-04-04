import React from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TodoItemStatus from "../todo-item-status/todo-item-status.component";
import { TodoDescription, Wrapper } from "./todo-item.styles";

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
    <Wrapper>
      <TodoItemStatus status={status}/>
      <TodoDescription
        style={{ textDecoration: status === ItemStatus.DONE ? 'line-through' : '' }}
        onClick={() => onSelectItem(item)}
      >
        {description}
      </TodoDescription>
      {/* <span>
        <button onClick={handleRemoveItem}>x</button>
      </span> */}
    </Wrapper>
);
}

export default TodoItem;

