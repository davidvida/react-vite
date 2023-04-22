import React, { useEffect } from "react";
import { ItemProps } from "../../types/todo-item";
import TodoItemEdit from "../todo-item-edit/todo-item-edit.component";
import TodoItem from "../todo-item/todo.item.component";
import { useSelector, useDispatch, useStore } from 'react-redux';
import { fetchTodos, todoActions } from "../../slices/todos/todoSlice";
import { AppDispatch, RootState } from "../../store/store";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";

type Props = {}

const TodoList = ({}: Props) => {
  const { data, loading, activeItem } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchTodos(''));
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
