import React from 'react';
import styled from 'styled-components';

/* Components */
import { Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const ConfirmModal = ({ children, onActionClick, isModalOpen }) => (
  <StyledModal
    visible={isModalOpen}
    animationType='slide'
    onRequestClose={() => console.log('Closing')}
    transparent
  >
    <Container>
      <CardSection>
        <Content>{children}</Content>
      </CardSection>
      <CardSection>
        <Button 
          label='Yes'
          onPress={() => onActionClick('yes')}
        />
        <Button 
          label='No'
          onPress={() => onActionClick('no')}
        />
      </CardSection>
    </Container>
  </StyledModal>
);

const StyledModal = styled.Modal`
  justify-content: center;
`;

const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.75);
  position: relative;
  flex: 1;
  justify-content: center;
`;

const Content = styled.Text`
  flex: 1;
  font-size: 18;
  text-align: center;
  line-height: 40;
`;

export default ConfirmModal;