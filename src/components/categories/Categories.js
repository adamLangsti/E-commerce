import React, { useState, useEffect } from 'react';

const Categories = () => {
    const [category, setCategory] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:5000/categories');
        const responseJson = await response.json();
        setCategory(responseJson);
        console.log(responseJson);
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <div className='category'>
            {category.map((category, index) => (
                <li key={index}>
                    <a href={category.link}>
                        <img
                            className='images'
                            src={category.image}
                            alt='media'
                        />
                    </a>
                    <h1>{category.name}</h1>
                </li>
            ))}
        </div>
    );
};

export default Categories;
