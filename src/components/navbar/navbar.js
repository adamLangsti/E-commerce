import React from 'react';
import { NavbarItems } from './navbar-items';
import logo from '../../images/logo.jpg';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt='ecom' />
            <ul>
                {NavbarItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.class} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
