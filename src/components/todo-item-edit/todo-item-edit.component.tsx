import React, { useState } from "react";
import { ItemProps } from "../../types/todo-item";

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
    <div>
      <span>
        o
      </span>&nbsp;
      <form style={{ display: 'inline' }} onSubmit={handleUpdateItem}>
        <input type="text" name="description" value={value} onChange={handleChangeDescription} />
      </form>
    </div>
);
}

export default TodoItemEdit;

