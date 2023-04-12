import React, { useContext, useState } from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import TodoItemStatus from "../todo-item-status/todo-item-status.component";
import { RemoveIcon, TodoDescription, Wrapper } from "./todo-item.styles";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";
import { Stack } from "@mui/material";

type Props = {
  item: ItemProps;
}

const TodoItem = ({ item }: Props) => {
  const { dispatch } = useContext(AppContext);
  const { id, description, status } = item;

  const handleRemoveItem = (id: number) => {
    dispatch({ 
      type: Types.Remove,
      payload: id
    })
  }

  return (
    <Wrapper>
      <Stack direction='row'>
        <TodoItemStatus status={status} id={id}/>
        <TodoDescription
          style={{ textDecoration: status === ItemStatus.DONE ? 'line-through' : '' }}
          onClick={() => dispatch({ 
            type: Types.Select,
            payload: {
                id: id
              } 
            })
          }
        >
          {description}
        </TodoDescription>
      </Stack>
      <RemoveIcon onClick={() => handleRemoveItem(item.id)}>x</RemoveIcon>
    </Wrapper>
);
}

export default TodoItem;

