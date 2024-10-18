import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContextProvider from './contexts/ContextProvider';
import Main from './router/Main';

function App() {
  return (
    <ContextProvider>
   <Main />
    </ContextProvider>
 
  );
}

export default App;
