import { staticData } from "../data/items";
import { ItemProps, ItemStatus } from "../types/todo-item";
import { Types } from "./actions";
import { StateProps } from "./initial-state";

const reducer = (state: StateProps, action: any) => {
  // handle logic of the application here
  debugger;
  switch(action.type) {
    case Types.Load: {
      return {
        ...state,
        data: staticData
      };
    }
    case Types.Add: {
      const newItem: ItemProps = {
        id: state.data.length + 1,
        description: 'New Item',
        status: ItemStatus.IN_PROGRESS
      };
      return {
        ...state,
        data: [...state.data, newItem],
      }
    }
    default: return state;
  }
}

export default reducer;
