import React, { useEffect } from "react";
import { ItemProps } from "../../types/todo-item";
import TodoItemEdit from "../todo-item-edit/todo-item-edit.component";
import TodoItem from "../todo-item/todo.item.component";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, todoActions } from "../../slices/todos/todoSlice";
import { RootState } from "../../store/store";
import { useGetAllTodosQuery } from "../../api/todos-api";
import { normalizeTodoData } from "../../utils/normailize-todo";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";

type Props = {}

const TodoList = ({}: Props) => {
  const { data, activeItem, loading } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTodos({}));
  }, []);

  return (
    <React.Fragment>
      {loading &&
      <Box textAlign="center">
        <CircularProgress size={10} />
      </Box>
      }
      {data.map((item: ItemProps) => (
        <React.Fragment key={item.id}>
          { activeItem?.id === item.id ? 
            <TodoItemEdit item={item} /> :
              <TodoItem item={item} />
          }
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default TodoList;
