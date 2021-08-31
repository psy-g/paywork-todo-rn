import { put, delay, takeEvery, takeLatest } from 'redux-saga/effects';
import { increase, decrease, INCREASE_ASYNC, DECREASE_ASYNC } from './action';

export function* increaseSaga() {
  yield put(increase());
}

export function* decreaseSaga() {
  yield put(decrease());
}

export function* increaseAsyncSaga() {
  yield delay(1000);
  yield put(increase());
}

export function* decreaseAsyncSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseAsyncSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseAsyncSaga);
}
