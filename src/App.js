import './App.css';
import NoContext from './components/noContext';
import React from 'react';
import Toolbar from './components/Toolbar';
import { ThemeContext } from './components/Context';
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="light">
        <Toolbar/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
