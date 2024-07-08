// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Typography variant="h4">Home Page</Typography>
           Hello, welcome to the home page. This is a simple example of how to use the react-router-dom library with Material-UI.
            Here you can navigate to the About and Contact pages.
        </div>
    );
};

export default Home;
