import React from 'react';
import { NavbarItems } from './navbar-items';

const Navbar = () => {
    return (
        <nav>
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
