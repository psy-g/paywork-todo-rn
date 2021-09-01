import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

import Button from 'components/common/Button';

interface StyledModalProps {
  modalVisible: boolean;
  onTouchEnd: any;
  modalHeader?: string;
  modalBody?: any;
  onPress?: any;
  setState?: any;
}

// 공통 모달 컴포넌트입니다.
// 투두 추가, 투두 삭제 시에 넘겨 받는 값에 따라 다른 모달이 나타납니다.
const ModalComponent: React.FC<StyledModalProps> = ({
  modalVisible,
  onTouchEnd,
  modalHeader,
  modalBody,
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
              {setState ? (
                <InputForm
                  placeholder="할 일을 입력해주세요"
                  onChangeText={(input) => setState(input)}
                />
              ) : (
                <ModalText>{modalBody}</ModalText>
              )}
            </ContentBody>
          </ContentWrapper>
          <BtnWrapper onTouchEnd={onTouchEnd}>
            <Button onPress={onPress} title="확인" bgColor="#33bb77" btnWidth="30%" />
            <Button title="취소" bgColor="#f44336" btnWidth="30%" />
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
  flex: 2;
  justify-content: center;
`;

const ContentBody = styled.View`
  flex: 7.5;
  justify-content: center;
`;

const BtnWrapper = styled.View`
  flex: 1.5;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  margin-bottom: 30px;
`;

const ModalText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const InputForm = styled.TextInput`
  background-color: #3c4858;
  color: #fafafa;
  font-weight: bold;
`;
