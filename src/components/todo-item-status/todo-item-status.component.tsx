
import React, { useContext, useState, useEffect } from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { DoneStatus, InProgressStatus } from "./todo-item.status.styles";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";

type Props = {
  id: number;
  status: ItemProps['status'];
}

const TodoItemStatus = ({ id, status }: Props) => {
  const { dispatch } = useContext(AppContext);

  return (
    <span onClick={() => dispatch({ type: Types.Update, payload: {
        id: id,
        itemData: { status: ItemStatus.DONE == status ? ItemStatus.IN_PROGRESS : ItemStatus.DONE }
      }
    })}>
      { status === 'inProgress' ? <InProgressStatus /> : <DoneStatus /> }
    </span>
  );
}

export default TodoItemStatus;
