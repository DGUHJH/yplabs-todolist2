import {createSlice} from '@reduxjs/toolkit';

export type TodoType = {
  id: number;
  content: string;
};

export type TodoSliceState = {
  isLoading: boolean;
  todoList: TodoType[];
  error: boolean;
  modal: {
    id?: number;
    type?: 'create' | 'update';
    initialValue?: string;
    open: boolean;
  };
};

const initialState: TodoSliceState = {
  isLoading: false,
  todoList: [],
  error: false,
  modal: {
    open: false,
  },
};

type DeleteTodoItemLoadProps = {
  payload: {
    id: number;
  };
};

type CreateTodoItemLoadProps = {
  payload: {
    content: string;
  };
};

type UpdateTodoItemLoadProps = {
  payload: {
    id: number;
    content: string;
  };
};

type ToggleModalProps = {
  payload: {
    id?: number;
    type?: 'create' | 'update';
    initialValue?: string;
    open: boolean;
  };
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    refreshTodoListLoad: state => {
      state.isLoading = true;
    },
    refreshTodoListSuccess: (state, action) => {
      state.isLoading = false;
      state.todoList = action.payload;
    },
    refreshTodoListFail: state => {
      state.isLoading = false;
      state.todoList = [];
      state.error = true;
    },
    deleteTodoItemLoad: (state, action: DeleteTodoItemLoadProps) => {
      state.isLoading = true;
    },
    deleteTodoItemSuccess: state => {
      state.isLoading = false;
    },
    deleteTodoItemFail: state => {
      state.isLoading = false;
      state.error = true;
    },
    createTodoItemLoad: (state, action: CreateTodoItemLoadProps) => {
      state.isLoading = true;
    },
    createTodoItemSuccess: state => {
      state.isLoading = false;
    },
    createTodoItemFail: state => {
      state.isLoading = false;
      state.error = true;
    },
    updateTodoItemLoad: (state, action: UpdateTodoItemLoadProps) => {
      state.isLoading = true;
    },
    updateTodoItemSuccess: state => {
      state.isLoading = false;
    },
    updateTodoItemFail: state => {
      state.isLoading = false;
      state.error = true;
    },
    toggleModal: (state, action: ToggleModalProps) => {
      state.modal.open = action.payload.open;
      state.modal.type = action.payload.type;
      state.modal.id = action.payload.id;
      state.modal.initialValue = action.payload.initialValue;
    },
  },
  extraReducers: {},
});
export const todoAction = todoSlice.actions;

export default todoSlice.reducer;
