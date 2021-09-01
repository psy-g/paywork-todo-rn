import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/common/Button';
import ModalComponent from '@/components/common/Modal';
import { Itodo } from '@/types';
import { deleteTodo, toggleTodo } from '@/store/todos/actions';

interface TodoItemProps {
  todo: Itodo;
}

// 투두 아이템 컴포넌트입니다.(화면 중단)
// 투두 목록 컴포넌트로부터 상태를 넘겨 받아 처리합니다.
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { id, content, isCheck } = todo;
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handlerRemove = () => {
    dispatch(deleteTodo(id));
  };

  const handlerToggle = () => {
    dispatch(toggleTodo(id));
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
