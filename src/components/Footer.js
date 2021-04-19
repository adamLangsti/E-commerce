import React from 'react';

const getYear = () => {
    return new Date().getFullYear();
};

const Footer = () => {
    return (
        <div className='footer'>
            <footer>
                <ul>
                    <a href='/'>
                        <li>Info</li>
                    </a>
                    <a href='/'>
                        <li>Support</li>
                    </a>
                    <a href='/'>
                        <li>Marketing</li>
                    </a>
                </ul>
                <ul>
                    <a href='/'>
                        <li>Terms of Use</li>
                    </a>
                    <a href='/'>
                        <li>Privacy Policy</li>
                    </a>
                </ul>
            </footer>
            <small>&copy; Copyright. All rights reserved. {getYear()}</small>
        </div>
    );
};

export default Footer;
