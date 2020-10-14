import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Button, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { authorizeUser } from '../services/login.service';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const IconWrapper = styled(Avatar)`
  background-color: #FF0000;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin: 10px 0;
`;

const Input = styled(TextValidator)`
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
  text-align: center;
`

export const LoginForm = ({ setLogged }: { setLogged: (isLogged: boolean) => void }): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    ValidatorForm.addValidationRule('validatePassword', () => {
      const passPattern = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      if (passPattern.test(password)) return true;
      return false;
    })
  });

  const logIn = async (): Promise<any> => {
    try {
      const { authToken } = await authorizeUser({ email, password });
      localStorage.setItem('authToken', authToken);
      setError(false);
      setLogged(true);
    } catch (error) {
      setError(true);
    }
  }
  
  return (
    <Container maxWidth="xs">
      <IconWrapper>
        <LockOutlinedIcon />
      </IconWrapper>
      <Title>Sign In</Title>
      <ValidatorForm onSubmit={logIn}>
        <Input
          label="Email Address"
          autoComplete="email"
          autoFocus
          fullWidth
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          name="email"
          value={email}
          variant="outlined"
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        />
        <Input
          label="Password"
          fullWidth
          variant="outlined"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
          name="password"
          type="password"
          validators={['validatePassword', 'required']}
          errorMessages={['this field is required']}
          value={password}
        />
        {error? <ErrorMessage>Wrong email or password</ErrorMessage> : ''}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
      </ValidatorForm>
    </Container>
  )
}
