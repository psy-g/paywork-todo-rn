import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import TodoHead from './template/head/TodoHead';
import TodoCreate from './template/create/TodoCreate';
import TodoList from './template/list/TodoList';

import { requestFetchTodos } from '../../store/todos/actions';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();

  const fetchTodos = requestFetchTodos(2);
  // console.log('dispatch', dispatch(fetchTodos));

  return (
    <Container>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </Container>
  );
};

export default TodoContainer;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;
