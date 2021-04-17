import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Contact = () => {
    const [contact, setContact] = useState('');

    const fetchContact = async () => {
        const response = await axios.get('http://localhost:5000/contact');
        const responseText = await response.data;
        setContact(responseText);
    };

    useEffect(() => {
        fetchContact();
    }, []);
    return (
        <div>
            <p>{contact}</p>
        </div>
    );
};

export default Contact;
