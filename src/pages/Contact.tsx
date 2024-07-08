// src/pages/Contact.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Contact: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Typography variant="h4">Contact Page</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Go to Home
            </Button>
            <Button variant="contained" color="secondary" onClick={() => navigate('/about')}>
                Go to About
            </Button>
        </div>
    );
};

export default Contact;
