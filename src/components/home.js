import React, { useState, useEffect } from 'react';

const Home = () => {
    const [apiResponse, setApiResponse] = useState('');

    const callAPI = async () => {
        const response = await fetch('http://localhost:5000');
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
            <p>{apiResponse}</p>
        </div>
    );
};
export default Home;
