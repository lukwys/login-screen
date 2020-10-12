import React, { useEffect, useState } from 'react';
import { LoginForm } from './components/LoginForm'

function App() {
  const [isLogged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    if(localStorage.getItem('authToken')) setLogged(true);
  }, []);

  if(isLogged) return <p>you are logged in</p>

  return (
    <div className="App">
      <LoginForm setLogged={setLogged}/>
    </div>
  );
}

export default App;
