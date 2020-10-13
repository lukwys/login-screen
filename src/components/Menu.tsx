import React from 'react';
import { Typography, Link } from '@material-ui/core';
import styled from 'styled-components';

const Navigation = styled(Typography)`
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  padding: 5px 0;
`

const NavigationLink = styled(Link)`
  margin: 0 5px;
`

export const Menu = ({setLogged}: {setLogged: (isLogged: boolean) => void}): JSX.Element => {
  const logOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    localStorage.removeItem('authToken');
    setLogged(false);
  };

  return (
    <Navigation>
      <NavigationLink href="#">Item1</NavigationLink>
      <NavigationLink href="#">Item2</NavigationLink>
      <NavigationLink href="#" onClick={logOut}>Logout</NavigationLink>
    </Navigation>
  );
}