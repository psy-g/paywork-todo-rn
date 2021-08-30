import React from 'react';
import styled from 'styled-components/native';

interface Props {}

const App: React.FC = ({}: Props) => {
  return (
    <Container>
      <MainText>Todo List</MainText>
    </Container>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #3c4858;
`;
const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: #ffffff;
`;
