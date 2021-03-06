import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/Auth';
import { Button, Link, SubTitle } from '../../ui';
import { flexBetween, flexCenter, flexStart } from '../../ui/mixins';

const Wrapper = styled.nav`
  grid-area: navbar;
  box-shadow: 0 0 .6rem 0 ${props => props.theme.color.quaternary};
  z-index: 2;
`;

const MainBar = styled.div`
  padding: 0 4rem;
  ${flexBetween};
  background-color: ${props => props.theme.color.white};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: ${p => p.theme.padding.small};
  ${flexCenter};
  position: relative;

  > ${Link} {
    color: ${props => props.theme.color.secondary};
  }
`;

const SubBar = styled.div`
  height: 4rem;
  padding: 0 ${p => p.theme.padding.large};
  ${flexStart};
  background-color: ${p => p.theme.color.tertiary};
`;

const Alert = styled.span`
  color: ${p => p.theme.color[p.color]};
  font-weight: bold;
`;

const Navbar = ({ alert, onViewLibraries, onViewSettings }) => {
  const { isAuthenticated, logout } = useAuth();

  function onLogout() {
    if (isAuthenticated) logout();
  }

  return (
    <Wrapper>
      <MainBar>
        <SubTitle color="primary">
          Bins <span role="img" aria-label="bin">🗑️</span>
        </SubTitle>

        <List horizontal>
          <ListItem>
            <Button onClick={onViewLibraries} clear>Libraries</Button>
          </ListItem>
          <ListItem>
            <Button onClick={onViewSettings} clear>Settings</Button>
          </ListItem>
          <ListItem>
            <Button onClick={onLogout} clear data-testid="navbar-status-button">
              Login status: {isAuthenticated ? '✔️' : '❌'}
            </Button>
          </ListItem>
        </List>
      </MainBar>

      <SubBar>
        {alert && <Alert color={alert.type}>{alert.text}</Alert>}
      </SubBar>
    </Wrapper>
  );
};

export default Navbar;
