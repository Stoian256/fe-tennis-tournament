import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerProfile from './components/PlayerProfile';
import TournamentList from './components/TournamentList';
import TournamentDetails from './components/TournamentDetails';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/player/:id' element={<PlayerProfile/>} />
          <Route path='/tournament/:id' element={<TournamentDetails/>} />
          <Route path='/' element={<TournamentList/>} />
        </Routes>
      </Router>
  );
}

export default App;
