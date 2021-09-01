import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface StyledButtonProps {
  bgColor?: string;
  title?: string | null;
  btnWidth?: string;
  btnColor?: boolean;
  btnIcon?: any;
  onPress?: any;
}

// 공통 버튼 컴포넌트입니다.
// onPress로 핸들러를 넘겨 받아 클릭 이벤트를 실행합니다.
const Button: React.FC<StyledButtonProps> = ({
  onPress,
  bgColor,
  title,
  btnWidth,
  btnIcon,
  btnColor,
}) => {
  return (
    <ButtonContainer onPress={onPress} bgColor={bgColor} btnWidth={btnWidth}>
      {title ? <ButtonText>{title}</ButtonText> : <Icon icon={btnIcon} btnColor={btnColor}></Icon>}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.TouchableOpacity<StyledButtonProps>`
  padding: 15px;
  border-radius: 10px;
  width: ${(props) => props.btnWidth};
  background-color: ${(props) => props.bgColor};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fafafa;
`;

const Icon = styled(FontAwesomeIcon)<{ btnColor: boolean }>`
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.btnColor ? '#33bb77' : 'black')};
`;
