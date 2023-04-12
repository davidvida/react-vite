
import React, { useContext } from "react";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { DoneStatus, InProgressStatus } from "./todo-item.status.styles";

type Props = {
  status: ItemProps['status'];
  id: number;
}

const TodoItemStatus = ({ status, id }: Props) => {
  const { dispatch } = useContext(AppContext);
  
  return (<span onClick={() => dispatch({ type: Types.Update, payload: { id, itemData: {status: status === ItemStatus.IN_PROGRESS ? ItemStatus.DONE : ItemStatus.IN_PROGRESS } }  })}>
    { status === ItemStatus.IN_PROGRESS ? <InProgressStatus /> : <DoneStatus /> }
  </span>
);
};

export default TodoItemStatus;
