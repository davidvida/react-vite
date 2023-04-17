import { staticData } from "../data/items";
import { ItemProps, ItemStatus } from "../types/todo-item";
import { ItemActions, Types } from "./actions";
import { StateProps } from "./initial-state";

const reducer = (state: StateProps, action: ItemActions) => {
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
      const id = getId(state.data);
      const newItem: ItemProps = {
        id: id,
        description: `New Item ${id}`,
        status: ItemStatus.IN_PROGRESS
      };
      return {
        ...state,
        data: [...state.data, newItem],
      }
    }
    case Types.Update: {
      const { payload } = action;

      const dataUpdated = state.data.map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload.itemData
          };
        }

        return item;
      });

      return {
        ...state,
        data: dataUpdated,
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
    case Types.Delete: {
      const { payload } = action;
      const newData = state.data.filter(item => item.id != payload.id);

      return {
        ...state,
        data: newData
      }
    }
    default: return state;
  }
}

const getId = (data: ItemProps[]): number => {
  if (data && data.length > 0) {
    return data.slice(-1)[0].id + 1;
  }

  return 1;
}

export default reducer;
