// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Typography variant="h4">Home Page</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/about')}>
                Go to About
            </Button>
            <Button variant="contained" color="secondary" onClick={() => navigate('/contact')}>
                Go to Contact
            </Button>
        </div>
    );
};

export default Home;
