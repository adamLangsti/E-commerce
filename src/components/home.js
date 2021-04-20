import React, { useState, useEffect } from 'react';

const Home = () => {
    const [home, setHome] = useState([]);

    const fetchHome = async () => {
        const response = await fetch('http://localhost:5000');
        const responseJson = await response.json();
        console.log(responseJson);
        setHome(responseJson);
    };

    useEffect(() => {
        fetchHome();
    }, []);
    return (
        <div className='home-container'>
            {home.map((text, index) => (
                <h1 key={index}>{text.header}</h1>
            ))}
        </div>
    );
};
export default Home;
