import {all} from '@redux-saga/core/effects';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  watchCreateTodoList,
  watchDeleteTodoList,
  watchGetTodoList,
  watchToggleTodoList,
  watchUpdateTodoList,
} from './todo/saga';
import todoSlice from './todo/slice';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    watchGetTodoList(),
    watchDeleteTodoList(),
    watchCreateTodoList(),
    watchUpdateTodoList(),
    watchToggleTodoList(),
  ]);
}

const store = configureStore({
  reducer: todoSlice,
  devTools: true,
  middleware: [sagaMiddleware],
});

const createStore = () => {
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore;

export type RootState = ReturnType<typeof store.getState>;
