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
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, delTodo }) => {
  const { id, content, isCheck } = todo;
  const [modalVisible, setModalVisible] = useState(false);

  const hanlderRemove = () => {
    delTodo(id);
  };

  return (
    <>
      <Items>
        <TaskName>{content}</TaskName>
        <Icon icon={faCheck} check={isCheck} />
        <Button
          onPress={() => setModalVisible(!modalVisible)}
          bgColor="#eee"
          btnWidth="15%"
          btnIcon={faTrashAlt}
        />
      </Items>
      <ModalComponent
        modalVisible={modalVisible}
        modalHeader="check delete"
        modalBody="정말 삭제하시겠습니까?"
        onTouchEnd={() => setModalVisible(false)}
        onPress={hanlderRemove}
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
  border-top-width: 1px;
`;

const TaskName = styled.Text`
  font-size: 15px;
  flex: 6;
`;

const Icon = styled(FontAwesomeIcon)<{ check: boolean }>`
  flex: 2;
  color: ${(props) => (props.check ? '#06AF4A' : '#FF622A')};
`;
