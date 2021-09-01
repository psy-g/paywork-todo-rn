import { useState, useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import { Itodo } from '../../types';
import { getStorage, setStorage } from '../../utils/storage';

import TODOS from '../../constant/dummy.json';

//
import { deleteTodo } from '../../store/todos/actions';

interface TodoServiceReturn {
  todoState: Itodo[];
  // addTodo: (newTodo: Itodo) => void;
  // delTodo: (id: number) => void;
  // toggleTodo: (id: number) => void;
  // todos: any;
}

// 투두 서비스에 필요한 기능 모음입니다.
export const useTodoService = (): TodoServiceReturn => {
  const [todoState, setTodoState] = useState<Itodo[]>([]);
  // const todos = useSelector((state: RootStateOrAny) => state.Todos);

  useEffect(() => {
    initTodo();
  }, []);

  // console.log('todos', todos);

  useEffect(() => {
    saveTodo();
  }, [todoState]);

  // 첫 실행 시에 투두 목록을 가져오기 위한 함수입니다.
  const initTodo = async () => {
    const getData = ((await getStorage('todos')) || TODOS) as Itodo[];

    setTodoState(getData);
  };

  // 스토리지에 투두를 저장합니다.
  const saveTodo = () => {
    setStorage('todos', todoState);
  };

  const addTodo = (newTodo: Itodo): void => {
    const nextId = todoState[todoState.length - 1]
      ? todoState[todoState.length - 1].id + 1
      : todoState.length + 1;

    setTodoState((prevState) =>
      prevState.concat({
        ...newTodo,
        id: nextId,
      }),
    );
  };

  const delTodo = (id: number): void => {
    setTodoState((prevState) => prevState.filter((todo: Itodo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    const changeTodo = todoState.map((todo: Itodo) => {
      todo.id === id && (todo.isCheck = !todo.isCheck);

      return todo;
    });

    setTodoState(changeTodo);
  };

  return {
    todoState,
    // addTodo,
    // delTodo,
    // toggleTodo,
    // todos,
  };
};
