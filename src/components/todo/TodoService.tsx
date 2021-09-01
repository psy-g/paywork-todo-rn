import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { Itodo } from '../../types';
// import { RootReducerType } from '../../modules';
// import { increaseAsync } from '../../modules/counter';
// import { getTodosStart } from '../../modules/todos';
import { getStorage, setStorage } from '../../utils/storage';

import TODOS from '../../constant/dummy.json';

interface TodoServiceReturn {
  todoState: Itodo[];
  addTodo: (newTodo: Itodo) => void;
  delTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const useTodoService = (): TodoServiceReturn => {
  const [todoState, setTodoState] = useState<Itodo[]>([]);
  // const todoState = useSelector((state: RootReducerType) => state.todos);
  // const dispatch = useDispatch();

  useEffect(() => {
    initTodo();
  }, []);

  useEffect(() => {
    // console.log('state 변경', todoState);
    saveTodo();
  }, [todoState]);

  const initTodo = async () => {
    const getData = ((await getStorage('todos')) || TODOS) as Itodo[];

    setTodoState(getData);
  };

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
    addTodo,
    delTodo,
    toggleTodo,
  };
};
