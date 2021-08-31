import { GetTodosActionsType, GET_TODOS_START, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from './action';
import { Itodo } from '../../types';
import { AxiosError } from 'axios';

type State = {
  todos: Itodo[] | null;
  error: AxiosError | null;
};

const initialState: State = {
  todos: null,
  error: null,
};

export default function todos(state: State = initialState, action: GetTodosActionsType): State {
  switch (action.type) {
    case GET_TODOS_START:
      return {
        ...state,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
