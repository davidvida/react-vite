
import React from "react";
import { useDispatch } from "react-redux";
import { Types } from "@/reducer/actions";
import { ItemProps, ItemStatus } from "@/types/todo-item";
import { DoneStatus, InProgressStatus, StatusContainer } from "./todo-item.status.styles";

type Props = {
  item: ItemProps;
}

const TodoItemStatus = ({ item }: Props) => {
  const dispatch =  useDispatch();

  const handleUpdateStatus = () => {
    dispatch({
      type: Types.Update,
      payload: {
        id: item.id,
        dataUpdated: {
          status: item.status === ItemStatus.IN_PROGRESS ? ItemStatus.DONE : ItemStatus.IN_PROGRESS
        }
      }
    });
  }

  return (
    <StatusContainer onClick={handleUpdateStatus} title="Update Status">
      { item.status === ItemStatus.IN_PROGRESS ? <InProgressStatus /> : <DoneStatus /> }
    </StatusContainer>
  );
}

export default TodoItemStatus;
