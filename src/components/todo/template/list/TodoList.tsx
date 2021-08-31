import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../../common/Button';
import { useTodoService } from '../../TodoService';

const TodoList: React.FC = () => {
  const { todoState } = useTodoService();
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

  console.log('todoState', todoState.todos);

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
        <ScrollView>
          {todoState.todos.map((todo, idx) => (
            <TexT key={idx}>{todo.username}</TexT>
          ))}
          <TexT>1</TexT>
          <TexT>2</TexT>
          <TexT>3</TexT>
          <TexT>4</TexT>
          <TexT>5</TexT>
          <TexT>6</TexT>
          <TexT>7</TexT>
          <TexT>8</TexT>
          <TexT>9</TexT>
          <TexT>10</TexT>
          <TexT>11</TexT>
          <TexT>12</TexT>
          <TexT>13</TexT>
          <TexT>14</TexT>
          <TexT>15</TexT>
          <TexT>16</TexT>
          <TexT>17</TexT>
          <TexT>18</TexT>
          <TexT>19</TexT>
          <TexT>20</TexT>
          <TexT>21</TexT>
          <TexT>22</TexT>
          <TexT>23</TexT>
          <TexT>24</TexT>
          <TexT>25</TexT>
          <TexT>26</TexT>
          <TexT>27</TexT>
          <TexT>28</TexT>
        </ScrollView>
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

const ScrollView = styled.ScrollView`
  background-color: pink;
`;

const TexT = styled.Text`
  font-size: 15px;
`;
