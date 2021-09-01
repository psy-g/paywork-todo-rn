import { all } from 'redux-saga/effects';

import { watchFetchTodos } from '@/store/todos';

export default function* rootSaga() {
  yield all([watchFetchTodos()]);
}
