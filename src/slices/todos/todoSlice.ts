import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_BASE_URL, TODO_PREFIX } from "../../api/todos-api";
import { ItemProps, ItemPropsMongo, ItemStatus } from "../../types/todo-item";
import { normalizeTodoData } from "../../utils/normailize-todo";
import { initialState } from "./initial-state";

// action types
// Document actions => procesada en los reducers, ejecutadas desde cualquier parte de la aplicacion
// Initial actions => iniciar un flujo de acciones, se lanzan desde los componentes, nunca son procesados en los reducers, debe iniciar otras acciones
// Event actions => son ejecutadas por otras acciones y se encargan de ejecutar otras funcione(s).

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (params: undefined, thunkApi) => {
    const response = await fetch(`${API_BASE_URL}${TODO_PREFIX}`);
    const data = await response.json();
    thunkApi.dispatch(normalizeTodos(data));
    return data;
});

export const normalizeTodos = createAsyncThunk(
  'todos/normalizeTodos',
  async (data: ItemPropsMongo[], thunkApi) => {
    const dataNormalized = normalizeTodoData(data);
    thunkApi.dispatch(todoActions.load(dataNormalized));
});

// export const addTodos = createAsyncThunk(
//   'todos/add',
//   async (todo: ItemProps, thunkApi)=>{
//     const response = await fetch(`${API_BASE_URL}${TODO_PREFIX}`, {method: "POST", body: JSON.stringify(todo)});
//     const data = await response.json();
//     const dataNormalized = normalizeTodoData([data])[0];
//     thunkApi.dispatch(todoActions.add(dataNormalized));
// });

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    fetching: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    load: (state, action: PayloadAction<ItemProps[]>) => {
      state.data = action.payload
    },
    add: (state, action: PayloadAction<ItemProps>) => {
      state.data.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const selectItemIndex = state.data.findIndex(item => item.id === action.payload);
      state.data.splice(selectItemIndex, 1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      debugger;
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      debugger;
      state.loading = false;
    });
    builder.addCase(normalizeTodos.pending, (state, action) => {
      state.loading = false;
    });
    // builder.addCase(addTodos.pending, (state, action) => {
    //   debugger;
    //   state.loading = true;
    // });
    // builder.addCase(addTodos.fulfilled, (state, action) => {
    //   debugger;
    //   state.loading = false;
    // });
    // builder.addCase(addTodos.rejected, (state, action) => {
    //   debugger;
    //   state.loading = false;
    // });
  }
});

// export reducer
export default todoSlice.reducer;

// export actions
export const todoActions = todoSlice.actions
