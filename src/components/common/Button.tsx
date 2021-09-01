import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface StyledButtonProps {
  onPress?: any;
  bgColor?: any;
  title?: string | null;
  btnWidth?: any;
  btnIcon?: any;
  btnColor?: any;
}

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
  /* color: ${(props) => (props.btnColor ? '#33bb77' : '#f44336')}; */
`;
