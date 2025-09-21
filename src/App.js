import React from 'react';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <DashboardProvider>
      <div className="App">
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;