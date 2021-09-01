import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../../common/Button';
import ModalComponent from '../../../../common/Modal';
import { Itodo } from '../../../../../types';

interface TodoItemProps {
  todo: Itodo;
  delTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, delTodo, toggleTodo }) => {
  const { id, content, isCheck } = todo;
  const [modalVisible, setModalVisible] = useState(false);

  const handlerRemove = () => {
    delTodo(id);
  };

  const handlerToggle = () => {
    toggleTodo(id);
  };

  return (
    <>
      <Items>
        <TaskName>{content}</TaskName>
        <Button
          bgColor="#eee"
          btnWidth="15%"
          btnIcon={faCheck}
          onPress={handlerToggle}
          btnColor={isCheck}
        />
        <Button
          onPress={() => setModalVisible(!modalVisible)}
          bgColor="#eee"
          btnWidth="15%"
          btnIcon={faTrashAlt}
        />
      </Items>
      <ModalComponent
        modalVisible={modalVisible}
        modalHeader="삭제 확인"
        modalBody="정말 삭제하시겠습니까?"
        onTouchEnd={() => setModalVisible(false)}
        onPress={handlerRemove}
      />
    </>
  );
};

export default TodoItem;

const Items = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom-width: 1px;
`;

const TaskName = styled.Text`
  font-size: 15px;
  flex: 6;
`;
