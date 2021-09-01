import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCH_TODOS_REQUEST, FETCH_TODOS_FAIL } from './types';
import TODOS from '../../constant/dummy.json';

const initialState = TODOS;

// 1. 투두를 추가하여 기존 상태에 추가합니다.
// 2. 선택 된 투두를 삭제하여 기존 상태에서 제거합니다.
// 3. 선택 된 투두의 isCheck를 변경하여 새로운 상태로 변경합니다.
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newState = [...state];
      newState.push(action.payload);

      return newState;
    }

    case DELETE_TODO: {
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    }

    case TOGGLE_TODO: {
      const newState = state.map((todo) => {
        todo.id === action.payload && (todo.isCheck = !todo.isCheck);
        return todo;
      });

      return newState;
    }

    default:
      return state;
  }
};
