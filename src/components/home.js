import React, { useState, useEffect } from 'react';

const Home = () => {
    const [home, setHome] = useState([]);

    const fetchHome = async () => {
        const response = await fetch('http://localhost:5000');
        const responseText = await response.json();
        console.log(responseText);
        setHome(responseText);
    };

    useEffect(() => {
        fetchHome();
    }, []);
    return (
        <div>
            <p>{home.map((text) => <h1>{text.title}</h1>)}</p>
        </div>
    );
};
export default Home;
