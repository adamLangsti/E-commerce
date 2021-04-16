import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/navbar/navbar';
import './css/index.css';

const App = () => {
    const [apiResponse, setApiResponse] = useState('');

    const callAPI = async () => {
        const response = await fetch('http://localhost:5000/api');
        const responseText = await response.text();
        console.log(responseText);
        setApiResponse(responseText);
    };

    useEffect(() => {
        callAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Navbar />
            <p>{apiResponse}</p>
        </div>
    );
};

export default App;
