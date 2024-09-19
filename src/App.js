import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PlayerProfileInitial from './components/PlayerProfile';
import TournamentList from './components/TournamentList';
import TournamentDetails from './components/TournamentDetails';
import NavigationBar from "./components/NavigationBar";
import Rankings from "./components/Rankings";
import Results from "./components/Results";
import News from "./components/News";
import {Settings} from "@mui/icons-material";
import Help from "./components/Help";
import Logout from "./components/Logout";
import PlayerProfile from "./components/PlayerProfile";
import TournamentPoster from "./components/TournamentPoster";

function App() {
    return (
        <Router>
            <div>
                <NavigationBar/>
                <Routes>
                    <Route path="/tournament-poster" element={<TournamentPoster/>} />
                    <Route path='/profile/:id' element={<PlayerProfile />} />
                    <Route path='/tournaments/:id' element={<TournamentDetails />} />
                    <Route path="/profile" element={<PlayerProfile />} />
                    <Route path="/tournaments" element={<TournamentList />} />
                    <Route path="/rankings" element={<Rankings />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/" element={<TournamentList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
