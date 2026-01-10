import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import {
    Link,
    NavLink,
    useLocation
} from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {

    const Links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
    ];

    const location = useLocation();

    const linkRefs = useRef([]);
    const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeIndex = Links.findIndex(link => link.path === location.pathname);
        const activeRef = linkRefs.current[activeIndex];

        if (activeRef) {
            const rect = activeRef.getBoundingClientRect();
            const parentRect = activeRef.parentNode.parentNode.getBoundingClientRect();
            setBarStyle({
                left: rect.left - parentRect.left,
                width: rect.width
            });
        }
    }, [location.pathname, Links]);

    const activeLink = Links.find(link => link.name === "Home" && link.path === "/");
    activeLink.className = "nav-link active";

    return (
        <>
            <header id='header' className='sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-dark-subtle bg-gradient bg-dark-subtle mb-4 sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt='Logo' title='Go to Home Page' className='ms-4' width='50' height='55' />
                        </Link>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span 
                                className="navbar-toggler-icon"
                            >
                            </span>
                        </button>
                        <div 
                            className="collapse navbar-collapse" 
                            id="navbarNav"
                        >
                            <ul 
                                className="navbar-nav ms-auto gap-4 me-lg-4" 
                                style={{ 
                                    position: "relative" 
                                    }}>
                                <div
                                    className='nav-active-bar'
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: barStyle.left,
                                        width: barStyle.width,
                                        height: "100%",
                                        background: "#ffffffc4",
                                        borderRadius: "5px",
                                        transition: "left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1)",
                                        zIndex: 0
                                    }}
                                />
                                {Links.map((link, idx) => (
                                    <li className='nav-item' key={link.name}>
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to={link.path}
                                            end={link.path === "/"}
                                            ref={el => linkRefs.current[idx] = el}
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