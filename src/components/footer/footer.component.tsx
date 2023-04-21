import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddTodoMutation } from "../../api/todos-api";
import { Types } from "../../reducer/actions";
import { postTodos, todoActions } from "../../slices/todos/todoSlice";
import { ItemPropsMongo, ItemStatus } from "../../types/todo-item";
import { normalizeTodoData } from "../../utils/normailize-todo";
import { AddIcon, AddText, Wrapper } from "./footer.styles";
import { AppDispatch, RootState } from "../../store/store";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";

const Footer = () => {
  const { itemLoading } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = async () => {
    dispatch(postTodos({ description: 'new Item 1', status: ItemStatus.IN_PROGRESS }));
  }

  return (
    <React.Fragment>
      {itemLoading ?
      <Box textAlign="center">
        <CircularProgress size={10} />
      </Box> :
      <Wrapper onClick={handleClick}>
        <AddIcon/>
        <AddText>Add new Item</AddText>
      </Wrapper>}
    </React.Fragment>
  )
};

export default Footer;
