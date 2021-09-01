import { all } from 'redux-saga/effects';
import { watchFetchTodos } from './todos';

export default function* rootSaga() {
  yield all([watchFetchTodos()]);
}
