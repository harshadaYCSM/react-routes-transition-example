// src/pages/About.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Home
            </Button>
            <Button variant="contained" color="primary" onClick={() => navigate('/contact')}>
                Contact
            </Button>
            <Button variant="contained" color="primary" onClick={() => navigate('/about')}>
                About
            </Button>
        </div>
    );
};

export default Header;
