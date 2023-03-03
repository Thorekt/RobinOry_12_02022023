import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Dashboard from './pages/Dashboard';
import TopNavbar from './components/TopNavbar';
import LeftNavbar from './components/LeftNavbar';

/*
 * Entry point for the application. Should not be used elsewhere than in src/index.js.
 * @returns {JSX.Element}
 *
 * @example
 * <App />
 */
function App() {
  return (
    <Router>
      <div className='App'>
        <TopNavbar />
        <LeftNavbar />
        <Routes>
          <Route index element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
