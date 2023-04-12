import React, { useContext } from "react";
import { DeleteIcon, Wrapper } from "./todo-item-delete.styles";

type Props = {
  id: number;
}

const TodoItemDelete = ({ id }: Props) => {
  return (
    <Wrapper>
      <DeleteIcon data-action='delete' data-index={id} />
    </Wrapper>
  );
}

export default TodoItemDelete;

