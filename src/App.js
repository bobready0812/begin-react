import React, { useState } from 'react';

import './App.css';
import Back from './components/rspBack';
import Com from './components/rspCom';
import User from './components/rspUser';

function App() {
  const [comValue, setComValue] = useState(""); 
  const [userValue, setUserValue] = useState("");
  const [comWin, setComWin] = useState("");
  const [userWin, setUserWin] = useState("");

  return (
    <>
    <Back 
    comValue={comValue}
    userValue={userValue}
    setComValue={setComValue}
    setUserValue={setUserValue}
    comWin={comWin}
    userWin={userWin}
    setComWin={setComWin}
    setUserWin={setUserWin}
    >
      <Com comValue={comValue} comWin={comWin}/>
      <User userValue={userValue} userWin={userWin}/>
    </Back>
    </>
  );
}

export default App;
