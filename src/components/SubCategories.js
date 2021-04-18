import React, { useState, useEffect } from 'react';

const SubCategories = () => {
    const [sub, setSub] = useState([]);

    const fetchSub = async () => {
        const response = await fetch('http://localhost:5000/sub-categories');
        const responseText = await response.json();
        console.log(responseText);
        setSub(responseText);
    };

    useEffect(() => {
        fetchSub();
    }, []);
    return (
        <div>
            {sub.map((sub, index) => (
                <li key={index}>
                    {sub.name}
                    <img src={sub.image} alt="alt" />
                </li>
            ))}
        </div>
    );
};

export default SubCategories;
