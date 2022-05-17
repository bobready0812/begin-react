import React, { useState } from 'react';

import './App.css';
import Back from './components/rspBack';
import Com from './components/rspCom';
import User from './components/rspUser';

function App() {
  const [comValue, setComValue] = useState();
  const [userValue, setUserValue] = useState();

  return (
    <>
    <Back>
      <Com comValue={comValue} />
      <User userValue={userValue}/>
    </Back>
    </>
  );
}

export default App;
