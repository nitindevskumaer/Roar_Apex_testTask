import React, { useState } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard';
import ApplicantInfo from './Component/ApplicantInfo';
import Hearing from './Component/Hearing';
import Applicants from './Component/Applicants';

function App() {
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Screen2':
        return <Applicants />;
      case 'Screen3':
        return <ApplicantInfo />;
      case 'Screen4':
        return <Hearing />;
      default:
        return <Dashboard />; 
    }
  };

  return (
    <>
      <div className='flex gap-7 p-3 bg-[#7BAFE2] text-white'>
        <button onClick={() => setCurrentScreen('Dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentScreen('Screen2')}>Applicants</button>
        <button onClick={() => setCurrentScreen('Screen3')}>ApplicantInfo</button>
        <button onClick={() => setCurrentScreen('Screen4')}>Hearing</button>
      </div>
      {renderScreen()}
    </>
  );
}

export default App;
