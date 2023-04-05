import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";
import { ItemProps } from "../../types/todo-item";
import TodoItemEdit from "../todo-item-edit/todo-item-edit.component";
import TodoItem from "../todo-item/todo.item.component";

type Props = {
  activeItem: ItemProps | null;
  onSelectItem: (item: ItemProps) => void;
  onUpdateItem: (id: number, itemData: Partial<ItemProps>) => void;
}

const TodoList = ({ activeItem, onSelectItem, onUpdateItem }: Props) => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: Types.Load })
  }, []);

  return (
    <React.Fragment>
      {state?.data.map((item: ItemProps) => (
        <React.Fragment key={item.id}>
          { activeItem?.id === item.id ? 
            <TodoItemEdit item={item} onUpdateItem={onUpdateItem}  /> :
              <TodoItem item={item} onSelectItem={onSelectItem} />
          }
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default TodoList;
