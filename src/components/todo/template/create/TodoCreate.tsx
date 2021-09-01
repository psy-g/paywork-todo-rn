import React, { useState } from 'react';
import styled from 'styled-components/native';

import Button from '../../../common/Button';
import ModalComponent from '../../../common/Modal';
import { Itodo } from '../../../../types';

interface TodoCreateProps {
  addTodo: (newTodo: Itodo) => void;
}

const TodoCreate: React.FC<TodoCreateProps> = ({ addTodo }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handlerSubmit = () => {
    addTodo({
      id: 105,
      content: inputValue,
      isCheck: false,
    });
  };

  return (
    <>
      <CreateBlock>
        <Button
          title="Add a new task"
          bgColor="#33bb77"
          btnWidth="50%"
          onPress={() => setModalVisible(!modalVisible)}
        />
      </CreateBlock>
      <ModalComponent
        modalVisible={modalVisible}
        modalHeader="Add a new task"
        modalBody="컨텐츠"
        onTouchEnd={() => setModalVisible(false)}
        onPress={handlerSubmit}
        setState={setInputValue}
      />
    </>
  );
};

export default TodoCreate;

const CreateBlock = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #3c4858;
`;
