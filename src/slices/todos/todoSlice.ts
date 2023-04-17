import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { staticData } from "../../data/items";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { initialState } from "./initial-state";

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    load: (state) => {
      return {
        ...state,
        data: staticData
      };
    },
    add: (state) => {
      const newItem: ItemProps = {
        id: state.data.length + 1,
        description: 'New Item',
        status: ItemStatus.IN_PROGRESS
      };
      return {
        ...state,
        data: [...state.data, newItem],
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const selectItemIndex = state.data.findIndex(item => item.id === action.payload);
      return {
        ...state,
        data: [
          ...state.data.slice(0, selectItemIndex),
          ...state.data.slice(selectItemIndex + 1),
        ],
      };
    }
  }
});

// export reducer
export default todoSlice.reducer;

// export actions
export const todoActions = todoSlice.actions
