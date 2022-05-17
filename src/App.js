import React, { useState } from 'react';

import './App.css';
import Back from './components/rspBack';
import Com from './components/rspCom';
import User from './components/rspUser';

function App() {
  const [comValue, setComValue] = useState("가위"); 
  const [userValue, setUserValue] = useState("바위");

  return (
    <>
    <Back 
    comValue={comValue}
    userValue={userValue}
    setComValue={setComValue}
    setUserValue={setUserValue}
    >
      <Com comValue={comValue} />
      <User userValue={userValue}/>
    </Back>
    </>
  );
}

export default App;
