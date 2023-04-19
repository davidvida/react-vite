import React from "react";
import { useDispatch } from "react-redux";
import { useAddTodoMutation } from "../../api/todos-api";
import { Types } from "../../reducer/actions";
import { todoActions } from "../../slices/todos/todoSlice";
import { ItemPropsMongo, ItemStatus } from "../../types/todo-item";
import { normalizeTodoData } from "../../utils/normailize-todo";
import { AddIcon, AddText, Wrapper } from "./footer.styles";

const Footer = () => {
  const dispatch = useDispatch();
  const [addTodoMutation] = useAddTodoMutation();

  const handleClick = async () => {
    try {
      const response = await addTodoMutation({ description: 'new Item', status: ItemStatus.IN_PROGRESS });
      dispatch(todoActions.add(normalizeTodoData([response.data as ItemPropsMongo])[0]));
    } catch(error: any) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return (
    <Wrapper onClick={handleClick}>
      <AddIcon/>
      <AddText>Add new Item</AddText>
    </Wrapper>
  )
};

export default Footer;
