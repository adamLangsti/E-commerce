import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MacbookAir = () => {
    const [macbook, setMacbook] = useState([]);

    const fetchMacbook = async () => {
        const response = await axios.get('http://localhost:5000/macbook');
        const responseJson = await response.data;
        setMacbook(responseJson);
        console.log(responseJson);
    };

    useEffect(() => {
        fetchMacbook();
    }, []);
    return (
        <div>
            <h1>
                {macbook.map((macbook) => (
                    <li>{macbook.name}</li>
                ))}
            </h1>
        </div>
    );
};

export default MacbookAir;
