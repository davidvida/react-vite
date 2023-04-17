import React, { useEffect } from "react";
import { ItemProps } from "../../types/todo-item";
import TodoItemEdit from "../todo-item-edit/todo-item-edit.component";
import TodoItem from "../todo-item/todo.item.component";
import { useSelector, useDispatch } from 'react-redux';
import { todoActions } from "../../slices/todos/todoSlice";
import { RootState } from "../../store/store";

type Props = {}

const TodoList = ({}: Props) => {
  const { data, activeItem } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoActions.load());
  }, []);

  return (
    <React.Fragment>
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
