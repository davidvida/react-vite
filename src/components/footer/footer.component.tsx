import React from "react";
import { useDispatch } from "react-redux";
import { useAddTodoMutation } from "../../api/todos-api";
import { Types } from "../../reducer/actions";
import { createTodo, fetchTodos, todoActions } from "../../slices/todos/todoSlice";
import { ItemPropsMongo, ItemStatus } from "../../types/todo-item";
import { normalizeTodoData } from "../../utils/normailize-todo";
import { AddIcon, AddText, Wrapper } from "./footer.styles";
import { AppDispatch } from "../../store/store";

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const [addTodoMutation] = useAddTodoMutation();

  const handleClick = async () => {
    dispatch(createTodo({ description: 'new Item', status: ItemStatus.IN_PROGRESS }));
  }

  return (
    <Wrapper onClick={handleClick}>
      <AddIcon/>
      <AddText>Add new Item</AddText>
    </Wrapper>
  )
};

export default Footer;
