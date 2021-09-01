import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FAIL,
} from '@/store/todos/types';

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

// 투두 요청 생성함수입니다.
export const requestFetchTodos = (data) => ({
  type: FETCH_TODOS_REQUEST,
  payload: data,
});

// 투두 요청 실패 생성함수입니다.
export const fetchTodosFail = () => ({
  type: FETCH_TODOS_FAIL,
});
