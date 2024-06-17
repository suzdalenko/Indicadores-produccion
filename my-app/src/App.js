import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Grafico from './pages/Grafico';
import Home from './pages/Index';
import About from './pages/About';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Grafico" element={<Grafico />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/Grafico">Grafico</Link>
          </li>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default App;

