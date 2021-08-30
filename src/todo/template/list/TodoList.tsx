import React from 'react';
import styled from 'styled-components/native';

const TodoList: React.FC = () => {
  return (
    <ListBlock>
      <TodoText>List</TodoText>
    </ListBlock>
  );
};

export default TodoList;

const ListBlock = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: skyblue;
`;

const TodoText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;
