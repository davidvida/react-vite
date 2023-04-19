import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { initialState } from "./initial-state";

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    load: (state, action: PayloadAction<ItemProps[]>) => {
      return {
        ...state,
        data: action.payload
      };
    },
    add: (state, action: PayloadAction<ItemProps>) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      }
    },
    remove: (state, action: PayloadAction<string>) => {
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
