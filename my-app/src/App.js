import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ajustes from './pages/Ajustes';
import Index from './pages/Index';
import About from './pages/About';
import Users from './pages/Users';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Ajustes" element={<Ajustes />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      
      <div className="bottomLinkWrappper">
          <a href="/" className="bottomLink">Gráfico</a>
          <Link to="/Informe" className="bottomLink">Informe</Link>
          <Link to="/Ajustes" className="bottomLink">Ajustes</Link>
      </div>
    </Router>
  );
};

export default App;

