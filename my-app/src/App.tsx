import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpotifyAuth from './components/SpotifyAuth';
import Callback from './components/Callback';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SpotifyAuth />} />
        <Route path="/callback" element={<Callback />} />
        {/* Add your other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
