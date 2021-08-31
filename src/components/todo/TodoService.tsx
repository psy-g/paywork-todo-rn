import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Itodo } from '../../types';
import { RootReducerType } from '../../modules';
import { increaseAsync } from '../../modules/counter';
import { getTodosStart } from '../../modules/todos';

// interface TodoServiceReturn {
//   todoState: Itodo[];
// }

export const useTodoService = () => {
  // const [todoState, setTodoState] = useState<Itodo[]>([]);
  const todoState = useSelector((state: RootReducerType) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosStart());
  }, [dispatch]);

  return {
    todoState,
  };
};
