import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
