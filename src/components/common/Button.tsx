import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

interface StyledButtonProps {
  onPress?: any;
  bgColor?: any;
  title?: string | null;
  btnWidth?: any;
  btnIcon?: any;
}

const Button: React.FC<StyledButtonProps> = ({ onPress, bgColor, title, btnWidth, btnIcon }) => {
  return (
    <ButtonContainer onPress={onPress} bgColor={bgColor} btnWidth={btnWidth}>
      {title ? <ButtonText>{title}</ButtonText> : <Icon icon={btnIcon}></Icon>}
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
`;

const Icon = styled(FontAwesomeIcon)`
  justify-content: center;
  align-items: center;
`;
