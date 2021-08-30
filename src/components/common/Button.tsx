import React from 'react';
import styled from 'styled-components/native';

interface StyledButtonProps {
  onPress?: any;
  bgColor?: any;
  title?: any;
  btnWidth?: any;
}

const Button: React.FC<StyledButtonProps> = ({ onPress, bgColor, title, btnWidth }) => {
  return (
    <ButtonContainer onPress={onPress} bgColor={bgColor} btnWidth={btnWidth}>
      <ButtonText>{title}</ButtonText>
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
