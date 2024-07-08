// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TransitionRoutes from './TransitionRoutes';
import Header from "./components/Header";

const App: React.FC = () => (
    <Router>
        <Header />
        <TransitionRoutes />
    </Router>
);

export default App;
