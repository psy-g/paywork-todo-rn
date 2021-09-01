import React from 'react';
import styled from 'styled-components/native';

// 투두 제목 컴포넌트입니다.(화면 상단)
const TodoHead: React.FC = () => {
  return (
    <HeadBlock>
      <TodoText>Todo List</TodoText>
    </HeadBlock>
  );
};

export default TodoHead;

const HeadBlock = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #3c4858;
`;

const TodoText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;
