import React, { useState, useEffect } from 'react';

const Products = () => {
    const [product, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:5000/products');
        const responseText = await response.json();
        setProducts(responseText);
        console.log(responseText);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="products">
            {product.map((product, index) => (
                <li key={index}>
                    <a href={product.image}>
                        <img src={product.image} alt='media' />
                    </a>
                    <h2>{product.name}</h2>
                </li>
            ))}
        </div>
    );
};

export default Products;
