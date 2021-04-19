import React from 'react';

const getYear = () => {
    return new Date().getFullYear();
};

const Footer = () => {
    return (
        <div className='footer'>
            <footer>
                <ul>
                    <li>Info</li>
                    <li>Support</li>
                    <li>Marketing</li>
                </ul>
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </footer>
            <small>&copy; Copyright. All rights reserved. {getYear()}</small>
        </div>
    );
};

export default Footer;
