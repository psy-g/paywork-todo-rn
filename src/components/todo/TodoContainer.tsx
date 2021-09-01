import React from 'react';
import styled from 'styled-components/native';

import TodoHead from 'components/todo/template/head/TodoHead';
import TodoCreate from 'components/todo/template/create/TodoCreate';
import TodoList from 'components/todo/template/list/TodoList';

// 투두 컨테이너 컴포넌트입니다.
// 투두 상단(제목), 중단(투두 리스트), 하단(투두 추가) 컴포넌트를 가지고 있습니다.
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
`;
