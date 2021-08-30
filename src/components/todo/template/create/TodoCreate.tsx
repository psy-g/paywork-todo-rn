import React from 'react';
import styled from 'styled-components/native';

import Button from '../../../common/Button';

const TodoCreate = () => {
  return (
    <CreateBlock>
      <Button title="Add a new task" bgColor="#33bb77" btnWidth="50%" />
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
