import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';

import Button from '@/components/common/Button';
import ModalComponent from '@/components/common/Modal';
import { addTodo } from '@/store/todos';

// 투두 추가 컴포넌트입니다.(화면 하단)
const TodoCreate: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handlerSubmit = () => {
    dispatch(addTodo(inputValue));
  };

  return (
    <>
      <CreateBlock>
        <Button
          title="Add a new task"
          bgColor="#FFBC42"
          btnWidth="50%"
          onPress={() => setModalVisible(!modalVisible)}
        />
      </CreateBlock>
      <ModalComponent
        modalVisible={modalVisible}
        modalHeader="할 일 추가"
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
