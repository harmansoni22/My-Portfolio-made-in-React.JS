import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core'
import React from 'react';
import {
    Link,
    NavLink
} from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {

    const Links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
    ];

    const activeLink = Links.find(link => link.name === "Home" && link.path === "/");
    activeLink.className = "nav-link active";

    return (
        <>
            <header id='header' className='sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-dark-subtle bg-dark-subtle mb-4 sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt='Logo' className='ms-4' width='50' height='55' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-4 me-lg-4">
                                {Links.map(link => (
                                    <li className='nav-item' key={link.name}>
                                        <NavLink
                                            className={({ isActive }) => 
                                            'nav-link' +  (isActive ? ' active' : '')
                                            }
                                            to={link.path}
                                            end={link.path === "/"

                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;