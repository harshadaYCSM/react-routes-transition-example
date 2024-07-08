// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TransitionRoutes from './TransitionRoutes';

const App: React.FC = () => (
    <Router>
        <TransitionRoutes />
    </Router>
);

export default App;
