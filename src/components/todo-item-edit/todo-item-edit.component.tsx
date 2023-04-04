import React, { useState } from "react";
import { ItemProps } from "../../types/todo-item";
import TodoItemStatus from "../todo-item-status/todo-item-status.component";
import { CustomTextField, Wrapper } from "./todo-item-edit.styles";

type Props = {
  item: ItemProps;
  onUpdateItem: (id: number, itemData: Partial<ItemProps>) => void;
}

const TodoItemEdit = ({ item, onUpdateItem }: Props) => {

  const [value, setValue] = useState(item.description);

  const handleUpdateItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onUpdateItem(item.id, { description: value });
  }

  const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <Wrapper>
      <TodoItemStatus status={item.status}/>
      <form style={{ display: 'inline' }} onSubmit={handleUpdateItem}>
        {/* <input type="text" name="description" value={value} onChange={handleChangeDescription} /> */}
        <CustomTextField
          id={`todo-item-${item.id}`}
          variant="outlined"
          size="small"
          autoFocus
          value={value}
          onChange={handleChangeDescription}
        />
      </form>
    </Wrapper>
);
}

export default TodoItemEdit;

