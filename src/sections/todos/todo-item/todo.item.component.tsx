import React from "react";
import TodoItemStatus from "../todo-item-status/todo-item-status.component";
import { ButtonContainer, IconRemove, TodoDescription, Wrapper } from "./todo-item.styles";
import { useDispatch } from "react-redux";
import { ItemProps, ItemStatus } from "@/types/todo-item";
import { todoActions } from "@/slices/todos/todoSlice";
import { Types } from "@/reducer/actions";

type Props = {
  item: ItemProps;
}

const TodoItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const { id, description, status } = item;


  const handleRemoveItem = () => {
    dispatch(todoActions.remove(item.id));
  }

  const handleSelectItem = () => {
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

