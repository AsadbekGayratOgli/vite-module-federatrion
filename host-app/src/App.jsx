// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import RemotePage from './Remote';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <button style={{ marginRight: '10px' }}>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/remote">Remote App</Link>
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/remote" element={<RemotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
