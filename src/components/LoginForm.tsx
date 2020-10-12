import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, FormControl, TextField, Button, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { authorizeUser } from '../services/login.service';

const IconWrapper = styled(Avatar)`
  background-color: #FF0000;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin: 10px 0;
`;

const Input = styled(TextField)`
  margin-bottom: 10px;
`;

export const LoginForm = ({setLogged}: {setLogged: (isLogged: boolean) => void}): JSX.Element => {
  let [email, setEmail] = useState<string>('');
  let [password, setPassword] = useState<string>('');
  let [isCorrectPassword, setPasswordStatus] = useState<boolean>(false);

  const validatePassword = (): void => {
    const passPattern = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (passPattern.test(password)) logIn();
    else setPasswordStatus(isCorrectPassword = true);
  }

  const onSubmitClick = (): void => {
    validatePassword();
  }

  const logIn = async (): Promise<any> => {
    const { authToken } = await authorizeUser();
    localStorage.setItem('authToken', authToken);
    setLogged(true);
  }

  return (
    <Container maxWidth="xs">
      <IconWrapper>
        <LockOutlinedIcon />
      </IconWrapper>
      <Title>Sign In</Title>
      <FormControl fullWidth>
        <Input 
          required 
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          fullWidth
          variant="outlined"
          onChange = { (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value) } 
        />
        <Input
          required
          id="outlined-password-input"
          label="Password" 
          type="password"
          fullWidth
          variant="outlined"
          error= { isCorrectPassword }
          onChange = { (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value) }
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick = { () => onSubmitClick() }
        >
          Sign In
        </Button>
      </FormControl>
    </Container>
  )
}
