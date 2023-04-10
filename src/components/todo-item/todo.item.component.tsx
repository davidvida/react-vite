import React, { useContext, useState } from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TodoItemStatus from "../todo-item-status/todo-item-status.component";
import { TodoDescription, Wrapper } from "./todo-item.styles";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";

type Props = {
  item: ItemProps;
}

const TodoItem = ({ item }: Props) => {
  const { dispatch } = useContext(AppContext);
  const { id, description, status } = item;

  const handleRemoveItem = () => {
    console.log('dispatch the remove item action');
  }

  return (
    <Wrapper>
      <TodoItemStatus status={status}/>
      <TodoDescription
        style={{ textDecoration: status === ItemStatus.DONE ? 'line-through' : '' }}
        onClick={() => dispatch({ type: Types.Select, payload: {
          id: item.id
        } 
      })}
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

