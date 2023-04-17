import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";
import { ItemProps } from "../../types/todo-item";
import TodoItemEdit from "../todo-item-edit/todo-item-edit.component";
import TodoItem from "../todo-item/todo.item.component";

type Props = {
  activeItem: ItemProps | null;
}

const TodoList = ({ activeItem }: Props) => {
  const { state, dispatch } = useContext(AppContext);

  const onRemoveItem = (event: React.MouseEvent) => {
    const button = event.target;

    if (button instanceof SVGElement) {
      const { action, index: id } = button.dataset;
      if (action === 'delete' && id) {
        dispatch({
          type: Types.Delete,
          payload: {
            id: parseInt(id)
          }
        });
      } 
    }
  }

  useEffect(() => {
    dispatch({ type: Types.Load })
  }, []);

  return (
    <div onClick={onRemoveItem}>
      {state?.data.map((item: ItemProps) => (
        <React.Fragment key={item.id}>
          { state.activeItem?.id === item.id ? 
            <TodoItemEdit item={item} /> :
              <TodoItem item={item} />
          }
        </React.Fragment>
      ))}
    </div>
  );
};

export default TodoList;
