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
    type?: 'create' | 'update' | 'complete' | 'error';
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

type ActionPropsType<T> = {
  payload: T;
};

type DeleteTodoItemLoadProps = ActionPropsType<{
  id: number;
}>;

type ToggleTodoItemLoadProps = ActionPropsType<{
  id: number;
  content: string;
}>;

type CreateTodoItemLoadProps = ActionPropsType<{
  content: string;
}>;

type UpdateTodoItemLoadProps = ActionPropsType<{
  id: number;
  content: string;
}>;

type ToggleModalProps = {
  payload: {
    id?: number;
    type?: 'create' | 'update' | 'complete' | 'error';
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
      state.modal.open = true;
      state.modal.type = 'complete';
      state.isLoading = false;
      state.todoList = action.payload;
    },
    refreshTodoListFail: state => {
      state.modal.open = true;
      state.modal.type = 'error';
      state.isLoading = false;
      state.todoList = [];
      state.error = true;
    },
    deleteTodoItemLoad: (state, action: DeleteTodoItemLoadProps) => {
      state.isLoading = true;
    },
    deleteTodoItemSuccess: state => {
      state.modal.open = true;
      state.modal.type = 'complete';
      state.isLoading = false;
      state.modal.open = true;
      state.modal.type = 'complete';
    },
    deleteTodoItemFail: state => {
      state.modal.open = true;
      state.modal.type = 'error';
      state.isLoading = false;
      state.error = true;
    },
    toggleTodoItemLoad: (state, action: ToggleTodoItemLoadProps) => {
      state.isLoading = true;
    },
    toggleTodoItemSuccess: state => {
      state.modal.open = true;
      state.modal.type = 'complete';
      state.isLoading = false;
      state.modal.open = true;
      state.modal.type = 'complete';
    },
    toggleTodoItemFail: state => {
      state.modal.open = true;
      state.modal.type = 'error';
      state.isLoading = false;
      state.error = true;
    },
    createTodoItemLoad: (state, action: CreateTodoItemLoadProps) => {
      state.isLoading = true;
    },
    createTodoItemSuccess: state => {
      state.modal.open = true;
      state.modal.type = 'complete';
      state.isLoading = false;
      state.modal.open = true;
      state.modal.type = 'complete';
    },
    createTodoItemFail: state => {
      state.modal.open = true;
      state.modal.type = 'error';
      state.isLoading = false;
      state.error = true;
    },
    updateTodoItemLoad: (state, action: UpdateTodoItemLoadProps) => {
      state.isLoading = true;
    },
    updateTodoItemSuccess: state => {
      state.modal.open = true;
      state.modal.type = 'complete';
      state.isLoading = false;
      state.modal.open = true;
      state.modal.type = 'complete';
    },
    updateTodoItemFail: state => {
      state.modal.open = true;
      state.modal.type = 'error';
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
export const {
  refreshTodoListLoad,
  refreshTodoListSuccess,
  refreshTodoListFail,
  createTodoItemLoad,
  createTodoItemSuccess,
  createTodoItemFail,
  deleteTodoItemLoad,
  deleteTodoItemSuccess,
  deleteTodoItemFail,
  toggleTodoItemSuccess,
  toggleTodoItemLoad,
  toggleTodoItemFail,
  updateTodoItemSuccess,
  updateTodoItemLoad,
  updateTodoItemFail,
  toggleModal,
} = todoSlice.actions;

export default todoSlice.reducer;
