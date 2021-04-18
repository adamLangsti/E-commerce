import React, { useState, useEffect } from 'react';

const Home = () => {
    const [home, setHome] = useState([]);

    const fetchHome = async () => {
        const response = await fetch('http://localhost:5000');
        const responseText = await response.text();
        console.log(responseText);
        setHome(responseText);
    };

    useEffect(() => {
        fetchHome();
    }, []);
    return (
        <div>
            <p>{home}</p>
        </div>
    );
};
export default Home;
