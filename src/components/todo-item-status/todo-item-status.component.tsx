
import React from "react";
import { ItemProps } from "../../types/todo-item";
import { DoneStatus, InProgressStatus } from "./todo-item.status.styles";

type Props = {
  status: ItemProps['status'];
}

const TodoItemStatus = ({ status }: Props) => (
  <span>
    { status === 'inProgress' ? <InProgressStatus /> : <DoneStatus /> }
  </span>
);

export default TodoItemStatus;
