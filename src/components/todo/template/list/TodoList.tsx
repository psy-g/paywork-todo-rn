import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../../common/Button';

const TodoList: React.FC = () => {
  const [btnSelect, setBtnSelect] = useState({
    todo: false,
    progress: false,
    done: false,
  });

  const showAlert = (): void => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: '취소',
        onPress: () => Alert.alert('취소 선택'),
        style: 'cancel',
      },
    ]);
  };

  const btnClick = (target: string): void => {
    switch (target) {
      case 'todo':
        setBtnSelect({ progress: false, done: false, todo: !btnSelect.todo ? true : false });
        return;
      case 'progress':
        setBtnSelect({ todo: false, done: false, progress: !btnSelect.progress ? true : false });
        return;
      case 'done':
        setBtnSelect({ todo: false, progress: false, done: !btnSelect.done ? true : false });
        return;
    }
  };

  return (
    <ListBlock>
      <TodoStatus btnSelect={btnSelect.todo}>
        <Button onPress={() => btnClick('todo')} title="Todo" bgColor="red" btnWidth="80%" />
      </TodoStatus>
      <InProgressStatus btnSelect={btnSelect.progress}>
        <Button
          onPress={() => btnClick('progress')}
          title="InProgress"
          bgColor="yellow"
          btnWidth="80%"
        />
      </InProgressStatus>
      <DoneStatus btnSelect={btnSelect.todo}>
        <Button onPress={() => btnClick('done')} title="Done" bgColor="pink" btnWidth="80%" />
      </DoneStatus>
    </ListBlock>
  );
};

export default TodoList;

const ListBlock = styled.View`
  flex: 6;
  background-color: skyblue;
`;

const TodoStatus = styled.View<{ btnSelect: boolean }>`
  /* flex: 6; */
  /* flex: ${(props) => (props.btnSelect ? 6 : 0.15)}; */
  align-items: center;
  height: ${(props) => (props.btnSelect ? '76%' : '12%')};
`;

const InProgressStatus = styled.View<{ btnSelect: boolean }>`
  /* flex: 3; */
  align-items: center;
  height: ${(props) => (props.btnSelect ? '76%' : '12%')};
`;

const DoneStatus = styled.View<{ btnSelect: boolean }>`
  /* flex: 3; */
  align-items: center;
  height: ${(props) => (props.btnSelect ? '76%' : '12%')};
`;
