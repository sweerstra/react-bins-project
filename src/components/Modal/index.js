import React from 'react';
import styled from 'styled-components';
import { SmallTitle } from '../../ui';
import { boxShadow } from '../../ui/mixins';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s;
  z-index: 10;
  
  ${props => props.show && `
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s;
  `}
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: ${props => props.width};
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.color.white};
  padding: 2rem;
  background-color: white;
  border-radius: .4rem;
  ${boxShadow};
`;

Content.defaultProps = {
  width: '40rem'
};

const Close = styled.span`
  width: 1.5rem;
  font-size: 3rem;
  line-height: 1.5rem;
  color: ${props => props.theme.color.quaternary};
  text-align: center;
  cursor: pointer;
  float: right;
  
  &:hover {
    color: ${props => props.theme.color.primary};
  }
`;

const Modal = ({ isOpen = false, title, closable = true, onModalClose, children }) => (
  <Container show={isOpen}>
    <Content>
      {closable && <Close onClick={onModalClose}>&times;</Close>}
      <SmallTitle color="primary" marginBottom>{title}</SmallTitle>
      {children}
    </Content>
  </Container>
);

export default Modal;
