import React, { useContext } from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import TodoItemStatus from "../todo-item-status/todo-item-status.component";
import { ButtonContainer, IconRemove, TodoDescription, Wrapper } from "./todo-item.styles";
import { Types } from "../../reducer/actions";
import { useDispatch } from "react-redux";
import { RemoveCircle } from '@mui/icons-material';
import { IconButton } from "@mui/material";

type Props = {
  item: ItemProps;
}

const TodoItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const { id, description, status } = item;


  const handleRemoveItem = () => {
    console.log('dispatch the remove item action');
    dispatch({ type: Types.Delete, payload: item.id });
  }

  const handleSelectItem = () => {
    console.log('dispatch the select item action');
    dispatch({ type: Types.Select, payload: item.id });
  }

  return (
    <Wrapper>
      <TodoItemStatus item={item}/>
      <TodoDescription
        style={{ textDecoration: status === ItemStatus.DONE ? 'line-through' : '' }}
        onClick={handleSelectItem}
      >
        {description}
      </TodoDescription>
      <ButtonContainer onClick={handleRemoveItem} size="small" data-action='remove' title="Remove Todo">
        <IconRemove />
      </ButtonContainer>
    </Wrapper>
);
}

export default TodoItem;

