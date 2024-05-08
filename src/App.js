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
      case 'Applicants':
        return <Applicants />;
      case 'ApplicantInfo':
        return <ApplicantInfo />;
      case 'Hearing':
        return <Hearing />;
      default:
        return <Dashboard />; 
    }
  };

  return (
    <>
      <div className='flex gap-7 p-3 bg-[#7BAFE2] text-white'>
        <button onClick={() => setCurrentScreen('Dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentScreen('Applicants')}>Applicants</button>
        <button onClick={() => setCurrentScreen('ApplicantInfo')}>ApplicantInfo</button>
        <button onClick={() => setCurrentScreen('Hearing')}>Hearing</button>
      </div>
      {renderScreen()}
    </>
  );
}

export default App;
