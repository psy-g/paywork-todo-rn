import axios, { AxiosResponse } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

import { getTodosSuccess, getTodosError, GET_TODOS_START } from './action';

function* getTodos() {
  const todos: AxiosResponse = yield call(() =>
    axios.get('http://jsonplaceholder.typicode.com/users'),
  );
  // const todos: AxiosResponse = axios.get('http://localhost:3000/todoList');

  try {
    yield put(getTodosSuccess(todos.data));
  } catch (e) {
    yield put(getTodosError(e));
  }
}

export function* getTodosSaga() {
  yield takeEvery(GET_TODOS_START, getTodos);
}
