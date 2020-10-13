import React from 'react';
import logo from '../assets/img/brand/project.png';
import logo_II from '../assets/img/brand/project_II.png';
import '../Css/App.css';

function App() {
  return (
    <div>
    <div>
      <img src={logo} className="App-logo-large" alt="logo" />
      <img src={logo_II} className="App-logo-large-right" alt="logo" />
    </div>
    </div>
  );
}

export default App;
