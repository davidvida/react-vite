import React from "react";
import { ItemProps } from "../../types/todo-item";
import TodoItemEdit from "../todo-item-edit/todo-item-edit.component";
import TodoItem from "../todo-item/todo.item.component";

type Props = {
  data: Array<ItemProps>;
  activeItem: ItemProps | null;
  onSelectItem: (item: ItemProps) => void;
  onUpdateItem: (id: number, itemData: Partial<ItemProps>) => void;
}

const TodoList = ({ data, activeItem, onSelectItem, onUpdateItem }: Props) =>

  <React.Fragment>
    {data.map((item) => (
      <React.Fragment key={item.id}>
        { activeItem?.id === item.id ? 
          <TodoItemEdit item={item} onUpdateItem={onUpdateItem}  /> :
            <TodoItem item={item} onSelectItem={onSelectItem} />
        }
      <br/>
      </React.Fragment>
    ))}
  </React.Fragment>
;

export default TodoList;

