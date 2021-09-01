import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_TODOS_REQUEST } from '@/store/todos/types';
import { addTodo, fetchTodosFail } from '@/store/todos/actions';
import { Server } from 'server';

// call 헬퍼함수를 이용해 함수가 반환될 때까지 기다리고 처리합니다(비동기처리)
export function* fetchTodos(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(Server.get, `todo/${id}`);
    const addTodoAction = addTodo(data);
    yield put(addTodoAction);
  } catch (e) {
    yield put(fetchTodosFail());
  }
}

export function* watchFetchTodos() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
}
