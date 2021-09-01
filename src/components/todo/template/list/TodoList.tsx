import React, { useState } from 'react';
// import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../common/Button';
import ModalComponent from '../../../common/Modal';
import { Itodo } from '../../../../types';

interface TodoListProps {
  todos: Itodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [btnSelect, setBtnSelect] = useState({
    progress: false,
    done: false,
  });
  const [modalVisible, setModalVisible] = useState(false);

  // const showAlert = (): void => {
  //   Alert.alert('Alert Title', 'My Alert Msg', [
  //     {
  //       text: '취소',
  //       onPress: () => Alert.alert('취소 선택'),
  //       style: 'cancel',
  //     },
  //   ]);
  // };

  const btnClick = (target: string): void => {
    switch (target) {
      // case 'todo':
      //   setBtnSelect({ progress: false, done: false, todo: !btnSelect.todo ? true : false });
      //   return;
      case 'progress':
        setBtnSelect({ done: false, progress: !btnSelect.progress ? true : false });
        return;
      case 'done':
        setBtnSelect({ progress: false, done: !btnSelect.done ? true : false });
        return;
    }
  };

  return (
    <>
      <ListBlock>
        <InProgressStatus btnSelect={btnSelect.progress}>
          <Button
            onPress={() => btnClick('progress')}
            title="InProgress"
            bgColor="red"
            btnWidth="80%"
          />
          <ScrollView>
            {todos.map(
              (todo, idx) =>
                !todo.isCheck && (
                  <Items>
                    <TaskName key={idx}>{todo.content}</TaskName>
                    <Icon icon={faCheck} check={todo.isCheck} />
                    <Button
                      onPress={() => setModalVisible(!modalVisible)}
                      bgColor="#eee"
                      btnWidth="15%"
                      btnIcon={faTrashAlt}
                    />
                  </Items>
                ),
            )}
          </ScrollView>
        </InProgressStatus>
        <DoneStatus btnSelect={btnSelect.done}>
          <Button onPress={() => btnClick('done')} title="Done" bgColor="yellow" btnWidth="80%" />
          <ScrollView>
            {todos.map(
              (todo, idx) =>
                todo.isCheck && (
                  <Items>
                    <TaskName key={idx}>{todo.content}</TaskName>
                    <Icon icon={faCheck} check={todo.isCheck} />
                    <Button
                      onPress={() => setModalVisible(!modalVisible)}
                      bgColor="#eee"
                      btnWidth="15%"
                      btnIcon={faTrashAlt}
                    />
                  </Items>
                ),
            )}
          </ScrollView>
        </DoneStatus>
      </ListBlock>
      <ModalComponent
        modalVisible={modalVisible}
        modalHeader="check delete"
        modalBody="정말 삭제하시겠습니까?"
        onTouchEnd={() => setModalVisible(false)}
      />
    </>
  );
};

export default TodoList;

const ListBlock = styled.View`
  flex: 6;
  background-color: skyblue;
`;

const InProgressStatus = styled.View<{ btnSelect: boolean }>`
  /* flex: ${(props) => (props.btnSelect ? 6 : 0.15)}; */
  align-items: center;
  height: ${(props) => (props.btnSelect ? '76%' : '12%')};
`;

const DoneStatus = styled.View<{ btnSelect: boolean }>`
  /* flex: 3; */
  align-items: center;
  height: ${(props) => (props.btnSelect ? '76%' : '12%')};
`;

const TodoStatus = styled.View<{ btnSelect: boolean }>`
  /* flex: 3; */
  align-items: center;
  height: ${(props) => (props.btnSelect ? '76%' : '12%')};
`;

const ScrollView = styled.ScrollView`
  width: 80%;
`;

const Items = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding-left: 10px;
  padding-right: 10px;
  /* border-top-width: 1; */
`;

const TaskName = styled.Text`
  font-size: 15px;
  flex: 6;
`;

const Icon = styled(FontAwesomeIcon)<{ check: boolean }>`
  flex: 2;
  color: ${(props) => (props.check ? '#06AF4A' : '#FF622A')};
`;

const TexT = styled.Text`
  font-size: 15px;
`;
