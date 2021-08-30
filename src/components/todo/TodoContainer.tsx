import React from 'react';
import styled from 'styled-components/native';

import TodoHead from './template/head/TodoHead';
import TodoCreate from './template/create/TodoCreate';
import TodoList from './template/list/TodoList';

const TodoContainer: React.FC = () => {
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
  /* background-color: #3c4858; */
`;
