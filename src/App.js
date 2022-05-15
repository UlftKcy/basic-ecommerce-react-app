import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
