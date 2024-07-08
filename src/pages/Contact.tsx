import React from 'react';
import { Typography } from '@mui/material';

const Contact: React.FC = () => {

    return (
        <div>
            <Typography variant="h4">Contact Page</Typography>
           Contact us at:
            <ul>
                <li>Phone: 123-456-7890</li>
                <li>Email:
                    <a href="mailto:abc@abc.com">abc@abc.com
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
