import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <MainContent />
    </Router>
  );
};

export default App;
