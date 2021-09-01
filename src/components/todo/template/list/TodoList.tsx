import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import styled from 'styled-components/native';

import Button from '../../../common/Button';
import TodoItem from './item/TodoItem';

// 투두 목록 컴포넌트입니다.(화면 중단)
// 리덕스 스토어에서 상태를 가져와 바로 아래 아이템 컴포넌트로 map을 돌려 내려줍니다.
const TodoList: React.FC = () => {
  const todoState = useSelector((state: RootStateOrAny) => state.Todos);
  const [btnSelect, setBtnSelect] = useState({
    progress: false,
    done: false,
  });

  const btnClick = (target: string): void => {
    switch (target) {
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
            bgColor="#f44336"
            btnWidth="80%"
          />
          <ScrollView>
            {todoState.map((todo) => !todo.isCheck && <TodoItem todo={todo} key={todo.id} />)}
          </ScrollView>
        </InProgressStatus>
        <DoneStatus btnSelect={btnSelect.done}>
          <Button onPress={() => btnClick('done')} title="Done" bgColor="#33bb77" btnWidth="80%" />
          <ScrollView>
            {todoState.map((todo) => todo.isCheck && <TodoItem todo={todo} key={todo.id} />)}
          </ScrollView>
        </DoneStatus>
      </ListBlock>
    </>
  );
};

export default TodoList;

const ListBlock = styled.View`
  flex: 6;
  background-color: #3c4858;
`;

const InProgressStatus = styled.View<{ btnSelect: boolean }>`
  align-items: center;
  height: ${(props) => (props.btnSelect ? '88%' : '12%')};
`;

const DoneStatus = styled.View<{ btnSelect: boolean }>`
  align-items: center;
  height: ${(props) => (props.btnSelect ? '88%' : '12%')};
`;

const ScrollView = styled.ScrollView`
  width: 70%;
`;
