import { Itodo } from '../../types';
import { AxiosError } from 'axios';

export const GET_TODOS_START = 'todos/GET_TODOS_START' as const;
export const GET_TODOS_SUCCESS = 'todos/GET_TODOS_SUCCESS' as const;
export const GET_TODOS_ERROR = 'todos/GET_TODOS_ERROR' as const;

export const getTodosStart = () => ({ type: GET_TODOS_START });
export const getTodosSuccess = (todos: Itodo[]) => ({
  type: GET_TODOS_SUCCESS,
  payload: todos,
});
export const getTodosError = (error: AxiosError) => ({
  type: GET_TODOS_ERROR,
  payload: error,
});

export type GetTodosActionsType =
  | ReturnType<typeof getTodosStart>
  | ReturnType<typeof getTodosSuccess>
  | ReturnType<typeof getTodosError>;
