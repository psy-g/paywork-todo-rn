import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCH_TODOS_REQUEST } from './types';

// 투두 추가 액션 생성함수입니다.
export const addTodo = (newTodo: string) => {
  const id = new Date().getTime();

  return {
    type: ADD_TODO,
    payload: {
      id,
      content: newTodo,
      isCheck: false,
    },
  };
};

// 투두 삭제 액션 생성함수입니다.
export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});

// 투두 토글(isCheck 변경) 생성함수입니다.
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const requestFetchTodos = (id: number) => ({
  type: FETCH_TODOS_REQUEST,
  payload: {
    id,
  },
});
