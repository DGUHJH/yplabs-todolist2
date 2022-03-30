import {call, put, takeLatest} from 'redux-saga/effects';
import {
  createTodoItem,
  deleteTodoItem,
  getTodoList,
  GetTodoListResponseType,
  updateTodoItem,
} from '../../api/fetch';
import {
  createTodoItemFail,
  createTodoItemLoad,
  createTodoItemSuccess,
  deleteTodoItemFail,
  deleteTodoItemLoad,
  deleteTodoItemSuccess,
  refreshTodoListFail,
  refreshTodoListLoad,
  refreshTodoListSuccess,
  toggleTodoItemFail,
  toggleTodoItemLoad,
  toggleTodoItemSuccess,
  updateTodoItemFail,
  updateTodoItemLoad,
  updateTodoItemSuccess,
} from './slice';

export function* handleGetTodoListLoad() {
  try {
    const todoList: GetTodoListResponseType = yield call(getTodoList);
    yield put(refreshTodoListSuccess(todoList.data));
  } catch (err) {
    yield put(refreshTodoListFail());
  }
}

export function* watchGetTodoList() {
  yield takeLatest(refreshTodoListLoad, handleGetTodoListLoad);
}

export function* handleDeleteTodoListLoad(action: any) {
  try {
    yield call(() => deleteTodoItem({id: action.payload.id}));
    yield put(deleteTodoItemSuccess());
  } catch (err) {
    yield put(deleteTodoItemFail());
  }
}

export function* watchDeleteTodoList() {
  yield takeLatest(deleteTodoItemLoad, handleDeleteTodoListLoad);
}

export function* handleCreateTodoListLoad(action: any) {
  try {
    yield call(() => createTodoItem({content: action.payload.content}));
    yield put(createTodoItemSuccess());
  } catch (err) {
    yield put(createTodoItemFail());
  }
}

export function* watchCreateTodoList() {
  yield takeLatest(createTodoItemLoad, handleCreateTodoListLoad);
}

export function* handleUpdateTodoListLoad(action: any) {
  try {
    yield call(() =>
      updateTodoItem({id: action.payload.id, content: action.payload.content}),
    );
    yield put(updateTodoItemSuccess());
  } catch (err) {
    yield put(updateTodoItemFail());
  }
}

export function* watchUpdateTodoList() {
  yield takeLatest(updateTodoItemLoad, handleUpdateTodoListLoad);
}

export function* handleToggleTodoListLoad(action: any) {
  try {
    yield call(() => {
      const newContent =
        action.payload.content.indexOf(' wogud') !== -1
          ? action.payload.content.replace(' wogud', '')
          : `${action.payload.content} wogud`;

      updateTodoItem({
        id: action.payload.id,
        content: newContent,
      });
    });
    yield put(toggleTodoItemSuccess());
  } catch (err) {
    yield put(toggleTodoItemFail());
  }
}

export function* watchToggleTodoList() {
  yield takeLatest(toggleTodoItemLoad, handleToggleTodoListLoad);
}
