import React from 'react';
import styled from 'styled-components/native';

import { useTodoService } from './TodoService';
import TodoHead from './template/head/TodoHead';
import TodoCreate from './template/create/TodoCreate';
import TodoList from './template/list/TodoList';

const TodoContainer: React.FC = () => {
  const { todoState, addTodo, delTodo, toggleTodo } = useTodoService();

  return (
    <Container>
      <TodoHead />
      <TodoList todos={todoState} delTodo={delTodo} toggleTodo={toggleTodo} />
      <TodoCreate addTodo={addTodo} />
    </Container>
  );
};

export default TodoContainer;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  /* background-color: #3c4858; */
`;
