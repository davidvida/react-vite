import { staticData } from "../data/items";
import { ItemProps, ItemStatus } from "../types/todo-item";
import { Types } from "./actions";
import { StateProps } from "./initial-state";

const reducer = (state: StateProps, action: any) => {
  // handle logic of the application here
  //debugger;
  switch(action.type) {
    case Types.Load: {
      return {
        ...state,
        data: staticData
      };
    }
    case Types.Add: {
      const id = state.data.length > 0 
      ? state.data[state.data.length - 1].id + 1 : 1;
      const newItem: ItemProps = {
        id: id,
        description: 'New Item',
        status: ItemStatus.IN_PROGRESS
      };
      return {
        ...state,
        data: [...state.data, newItem],
      }
    }
    case Types.Update: {
      const { payload } = action;
      const currentItemIndex = state.data.findIndex(item => item.id === payload.id);
      return {
        ...state,
        data: [
          ...state.data.slice(0, currentItemIndex),
          { ...state.data[currentItemIndex], ...payload.itemData },
          ...state.data.slice(currentItemIndex + 1),
        ],
        activeItem: null
      };
    }
    case Types.Select: {
      const { payload } = action;
      const currentItemIndex = state.data.findIndex(item => item.id === payload.id);
      return {
        ...state,
        activeItem: state.data[currentItemIndex]
      }
    }
    case Types.Remove: {
      const {payload} = action;
      return {
        ...state,
        data: state.data.filter(item => item.id != payload)
      }
    }
    default: return state;
  }
}

export default reducer;
