import { ItemProps } from "../../types/todo-item";

export type StateProps = {
  data: ItemProps[];
  activeItem: ItemProps | null;
  loading: boolean;
  itemLoading: boolean;
}

export const initialState: StateProps = {
  data: [],
  activeItem: null,
  loading: false,
  itemLoading: false
};
