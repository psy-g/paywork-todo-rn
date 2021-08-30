import React from 'react';
import styled from 'styled-components/native';

const TodoHead: React.FC = () => {
  return (
    <HeadBlock>
      <TodoText>Todo List</TodoText>
    </HeadBlock>
  );
};

export default TodoHead;

const HeadBlock = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #3c4858;
`;

const TodoText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;
