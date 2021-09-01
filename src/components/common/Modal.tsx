import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

import Button from './Button';

interface StyledModalProps {
  modalVisible: boolean;
  onTouchEnd: any;
  modalHeader?: string;
  modalBody?: any;
  onPress?: any;
  setState?: any;
  // setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalComponent: React.FC<StyledModalProps> = ({
  modalVisible,
  onTouchEnd,
  modalHeader,
  onPress,
  setState,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <Container>
        <Space>
          <ContentWrapper>
            <ContentHeader>
              <ModalText>{modalHeader}</ModalText>
            </ContentHeader>
            <ContentBody>
              <InputForm
                placeholder="할 일을 입력해주세요"
                onChangeText={(input) => setState(input)}></InputForm>
            </ContentBody>
          </ContentWrapper>
          <BtnWrapper onTouchEnd={onTouchEnd}>
            <Button onPress={onPress} title="확인" bgColor="#bba733" btnWidth="30%" />
            <Button title="취소" bgColor="#33bb77" btnWidth="30%" />
          </BtnWrapper>
        </Space>
      </Container>
    </Modal>
  );
};

export default ModalComponent;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Space = styled.View`
  position: absolute;
  background-color: #fafafa;
  width: 100%;
  height: 50%;
  justify-content: flex-end;
  align-items: center;
`;

const ContentWrapper = styled.View`
  flex: 8.5;
  width: 80%;
  justify-content: center;
`;

const ContentHeader = styled.View`
  flex: 3;
  justify-content: center;
`;

const ContentBody = styled.View`
  flex: 7;
  justify-content: center;
`;

const BtnWrapper = styled.View`
  flex: 1.5;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  margin-bottom: 20px;
`;

const ModalText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const InputForm = styled.TextInput`
  background-color: skyblue;
  color: black;
`;
