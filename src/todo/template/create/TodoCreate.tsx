import React from 'react';
import styled from 'styled-components/native';

const TodoCreate = () => {
  return (
    <CreateBlock>
      <CreateBtn>
        <BtnText>Add a new task</BtnText>
      </CreateBtn>
    </CreateBlock>
  );
};

export default TodoCreate;

const CreateBlock = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #3c4858;
`;

const CreateBtn = styled.TouchableOpacity`
  background: #33bb77;
  width: 50%;
  border-radius: 10px;
`;

const BtnText = styled.Text`
  text-align: center;
  font-size: 20px;
`;
