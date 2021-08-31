import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import todos, { getTodosSaga } from './todos';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  todos,
});

export function* rootSaga() {
  yield all([counterSaga(), getTodosSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
