import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_TODOS_REQUEST } from './types';
import { addTodo } from './actions';
import { Server } from '../../server';

export function* fetchTodos(action) {
  try {
    const { id } = action.payload;
    // const { data } = yield call(Server.get, `todo/${id}`);
    const { data } = yield call(Server.get, `todo/${id}`);

    const addTodoAction = addTodo(data);
    yield put(addTodoAction);
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchTodos() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
}
