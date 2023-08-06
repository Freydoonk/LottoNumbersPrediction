import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <div>
            <h1>Choose an option:</h1>
            <ul>
                <li>
                    <Link to="/show-history">Show History</Link>
                </li>
                <li>
                    <Link to="/show-suggestion">Show Suggestion</Link>
                </li>
                <li>
                    <Link to="/show-analyze">Show Analyze</Link>
                </li>
            </ul>
        </div>
    );
};

const BackMenu: React.FC = () => {
    return (
        <div>
            <Link to="/">Back</Link>
        </div>
    );
};

const ShowHistory: React.FC = () => {
    return (
        <div>
            <h1>Show History</h1>
            <BackMenu />
        </div>
    );
};

const ShowSuggestion: React.FC = () => {
    return (
        <div>
            <h1>Show Suggestion</h1>
            <BackMenu />
        </div>
    );
};

const ShowAnalyze: React.FC = () => {
    return (
        <div>
            <h1>Show Analyze</h1>
            <BackMenu />
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Menu />} />
                    <Route path="/show-history" element={<ShowHistory />} />
                    <Route path="/show-suggestion" element={<ShowSuggestion />} />
                    <Route path="/show-analyze" element={<ShowAnalyze />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Home;
