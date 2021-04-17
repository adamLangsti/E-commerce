import React, { useState, useEffect } from 'react';

const Products = () => {
    const [product, setProducts] = useState('');

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:5000/products');
        const responseText = await response.text();
        setProducts(responseText);
        console.log(responseText);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div>
            <h1>{product}</h1>
        </div>
    );
};

export default Products;
