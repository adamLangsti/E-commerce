import React, { useState, useEffect } from 'react';

const Categories = () => {
    const [category, setCategory] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:5000/categories');
        const responseText = await response.json();
        setCategory(responseText);
        console.log(responseText);
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <div className='category'>
            {category.map((category, index) => (
                <li key={index}>
                    <a href={category.subCategory.link}>
                        <img
                            className='images'
                            src={category.image}
                            alt='media'
                        />
                    </a>
                    <h2>{category.name}</h2>
                </li>
            ))}
        </div>
    );
};

export default Categories;
