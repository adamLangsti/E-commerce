import React from 'react';
import logo from '../images/logo.jpg';

const Navbar = () => {
    return (
        <nav>
            <a href='/'>
                <img src={logo} alt='ecom' className='logo' />
            </a>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/categories'>Categories</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
