import React, { useEffect } from "react";
import { Types } from "../../reducer/actions";
import { ItemProps } from "../../types/todo-item";
import TodoItemEdit from "../todo-item-edit/todo-item-edit.component";
import TodoItem from "../todo-item/todo.item.component";
import { useSelector, useDispatch } from 'react-redux';

type Props = {}

const TodoList = ({}: Props) => {
  const data = useSelector((state: any) => state.data);
  const activeItem = useSelector((state: any) => state.activeItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Types.Load });
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
