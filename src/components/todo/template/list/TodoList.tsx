import React, { useState } from 'react';
import styled from 'styled-components/native';

import Button from '../../../common/Button';
import { Itodo } from '../../../../types';
import TodoItem from './item/TodoItem';

interface TodoListProps {
  todos: Itodo[];
  delTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, delTodo, toggleTodo }) => {
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
            {todos.map(
              (todo) =>
                !todo.isCheck && (
                  <TodoItem delTodo={delTodo} todo={todo} toggleTodo={toggleTodo} key={todo.id} />
                ),
            )}
          </ScrollView>
        </InProgressStatus>
        <DoneStatus btnSelect={btnSelect.done}>
          <Button onPress={() => btnClick('done')} title="Done" bgColor="#33bb77" btnWidth="80%" />
          <ScrollView>
            {todos.map(
              (todo) =>
                todo.isCheck && (
                  <TodoItem delTodo={delTodo} toggleTodo={toggleTodo} todo={todo} key={todo.id} />
                ),
            )}
          </ScrollView>
        </DoneStatus>
      </ListBlock>
    </>
  );
};

export default TodoList;

const ListBlock = styled.View`
  flex: 6;
  background-color: skyblue;
  /* background-color: #3c4858; */
`;

const InProgressStatus = styled.View<{ btnSelect: boolean }>`
  /* flex: ${(props) => (props.btnSelect ? 6 : 0.15)}; */
  align-items: center;
  height: ${(props) => (props.btnSelect ? '88%' : '12%')};
  /* height: ${(props) => (props.btnSelect ? '76%' : '12%')}; */
`;

const DoneStatus = styled.View<{ btnSelect: boolean }>`
  /* flex: 3; */
  align-items: center;
  height: ${(props) => (props.btnSelect ? '88%' : '12%')};
  /* height: ${(props) => (props.btnSelect ? '76%' : '12%')}; */
`;

const ScrollView = styled.ScrollView`
  width: 70%;
`;
