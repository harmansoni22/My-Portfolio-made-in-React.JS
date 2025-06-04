import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const Links = [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" }
    ];

    return (
        <footer className="text-center mt-4 bg-dark-subtle text-black py-4">
            <p>
                Made with 
                <span role="img" aria-label="love">❤️</span> 
                by Harman
            </p>
            <ul className="list-inline">
                {Links.map(link => (
                    <li className='list-inline-item' key={link.name}>
                        <Link className='text-decoration-none' to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer;