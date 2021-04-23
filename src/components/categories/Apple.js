import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Apple = () => {
    const [apple, setApple] = useState([]);

    const fetchAppleLaptop = async () => {
        const response = await axios.get('http://localhost:5000/apple');
        const responseJson = await response.data;
        setApple(responseJson);
        console.log(responseJson);
    };

    useEffect(() => {
        fetchAppleLaptop();
    }, []);

    return (
        <div className='apple'>
            {apple.map((apple, index) => (
                <li key={index}>
                    <a href={apple.link}>
                        <img src={apple.image} alt='apple' />
                    </a>
                    <h1>{apple.name}</h1>
                    <h2>{apple.heroHeadline}</h2>
                    <h3>{apple.price}</h3>
                </li>
            ))}
        </div>
    );
};
export default Apple;
