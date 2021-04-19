import React, { useState, useEffect } from 'react';

const SubCategories = () => {
    const [subCategory, setSubCategory] = useState([]);

    const fetchSub = async () => {
        const response = await fetch('http://localhost:5000/sub-categories');
        const responseText = await response.json();
        console.log(responseText);
        setSubCategory(responseText);
    };

    useEffect(() => {
        fetchSub();
    }, []);
    return (
        <div className='sub-category'>
            {subCategory.map((subCat, index) => (
                <li key={index} className='sub-category-items'>
                    <a href='/'>
                        <img src={subCat.image} alt='alt' />
                    </a>
                    <h1>{subCat.name}</h1>
                    <h2>{subCat.desc}</h2>
                    <h3>{subCat.price}</h3>
                </li>
            ))}
        </div>
    );
};

export default SubCategories;
