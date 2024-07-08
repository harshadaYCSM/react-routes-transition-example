// src/pages/About.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const About: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Typography variant="h4">About Page</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Go to Home
            </Button>
            <Button variant="contained" color="secondary" onClick={() => navigate('/contact')}>
                Go to Contact
            </Button>
        </div>
    );
};

export default About;
