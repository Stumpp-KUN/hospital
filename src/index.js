import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/mainPage';
import Operator from './components/operator';
import AdminAuth from './components/adminAuth';
import AdminPage from './components/adminPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/adminauth" element={<AdminAuth />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
