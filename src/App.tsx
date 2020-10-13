import React, { useEffect, useState } from 'react';
import { LoginForm } from './components/LoginForm'
import { Menu } from './components/Menu';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

function App() {
  const [isLogged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    if(localStorage.getItem('authToken')) setLogged(true);
  }, []);


  return (
    <div className="App">
      {!isLogged ? 
        <LoginForm setLogged={setLogged}/> :
        <React.Fragment>
          <Menu setLogged={setLogged}/>
          <Title>You are logged in</Title>
        </React.Fragment>
      }
    </div>
  );
}

export default App;
