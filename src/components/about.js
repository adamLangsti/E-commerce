import React, { useState, useEffect } from 'react';

const About = () => {
    const [about, setAbout] = useState('');

    const fetchAbout = async () => {
        const response = await fetch('http://localhost:5000/about');
        const responseText = await response.text();
        setAbout(responseText);
    };

    useEffect(() => {
        fetchAbout();
    }, []);
    return (
        <div>
            <p>{about}</p>
        </div>
    );
};

export default About;
