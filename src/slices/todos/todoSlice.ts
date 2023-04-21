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

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (data: Partial<ItemProps>, thunkApi) => {
    const response = await fetch(`${API_BASE_URL}${TODO_PREFIX}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const newData = await response.json();
    thunkApi.dispatch(todoActions.add(newData));
});

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
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(normalizeTodos.pending, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createTodo.pending, (state, action) => {
      state.creating = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.creating = false;
    });
  }
});

// export reducer
export default todoSlice.reducer;

// export actions
export const todoActions = todoSlice.actions
