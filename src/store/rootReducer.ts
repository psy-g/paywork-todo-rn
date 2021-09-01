import { combineReducers } from 'redux';
import { Todos } from './todos';

const rootReducer = combineReducers({
  Todos,
});

export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>;
