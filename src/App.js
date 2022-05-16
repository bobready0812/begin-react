import React from 'react';

import './App.css';
import Back from './components/rspBack';
import Com from './components/rspCom';
import User from './components/rspUser';

function App() {
  return (
    <>
    <Back>
      <Com />
      <User />
    </Back>
    </>
  );
}

export default App;
