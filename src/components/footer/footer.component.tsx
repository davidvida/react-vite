import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAddTodoMutation } from "../../api/todos-api";
import { Types } from "../../reducer/actions";
import { todoActions } from "../../slices/todos/todoSlice";
import { ItemPropsMongo, ItemStatus } from "../../types/todo-item";
import { normalizeTodoData } from "../../utils/normailize-todo";
import { AddIcon, AddText, Wrapper } from "./footer.styles";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

const Footer = () => {
  const dispatch = useDispatch();
  const [addTodoMutation, { isLoading, data }] = useAddTodoMutation();

  const handleClick = async () => {
    if (!isLoading) {
      try {
        addTodoMutation({
          description: "new Item",
          status: ItemStatus.IN_PROGRESS,
        });
      } catch (error: any) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(todoActions.add(normalizeTodoData([data as ItemPropsMongo])[0]));
    }
  }, [data]);

  return (
    <Wrapper onClick={handleClick}>
      <AddIcon />
      {isLoading ? (
        <Box textAlign="center">
          <CircularProgress size={10} />
        </Box>
      ) : (
        <AddText>Add new Item</AddText>
      )}
    </Wrapper>
  );
};

export default Footer;
