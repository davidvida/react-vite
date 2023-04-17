import React, { useContext, useState } from "react";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";
import { ItemProps } from "../../types/todo-item";
import TodoItemStatus from "../todo-item-status/todo-item-status.component";
import { CustomTextField, Wrapper } from "./todo-item-edit.styles";
import { useDispatch } from 'react-redux';

type Props = {
  item: ItemProps;
}

const TodoItemEdit = ({ item }: Props) => {
  const [value, setValue] = useState(item.description);
  const dispatch = useDispatch();

  const handleUpdateItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onUpdateItem(item.id, { description: value });
    debugger;
    dispatch({
      type: Types.Update,
      payload: {
        id: item.id, dataUpdated: { description: value }
      }
    });
  }

  const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <Wrapper>
      <TodoItemStatus item={item}/>
      <form style={{ display: 'inline' }} onSubmit={handleUpdateItem}>
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

