import React, { useState, useEffect } from 'react';

const Laptops = () => {
    const [laptop, setLaptop] = useState([]);

    const fetchLaptops = async () => {
        const response = await fetch('http://localhost:5000/laptops');
        const responseJson = await response.json();
        console.log(responseJson);
        setLaptop(responseJson);
    };

    useEffect(() => {
        fetchLaptops();
    }, []);
    return (
        <div className='laptop'>
            {laptop.map((laptop, index) => (
                <li key={index}>
                    <a href={laptop.link}>
                        <img src={laptop.image} alt='alt' />
                        <h1>{laptop.name}</h1>
                    </a>
                    <h2>{laptop.desc}</h2>
                </li>
            ))}
        </div>
    );
};

export default Laptops;
