import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/logo.png';

const Home = () => {
    const Links = [
        { name: "Learn More", path: "/learn-more" }
    ]

    return (
        <>
            <div className="container mt-5">
                <div className="row gap-2 justify-content-center align-items-center">
                    <div className="col-md-8 col-lg-7 justify-content-center align-self-center text-center">
                        <h1 className="display-4 face-space-grotesk font-weight-500">Welcome to My Portfolio</h1>
                        <p className="lead">I am a passionate developer with a love for creating amazing web applications.</p>

                        {Links.map(link => (
                            <Link className="btn rounded button mt-3 text-decoration-none border-1 border-dark" to={link.path} key={link.name}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="col-md-4 text-center justufy-content-center">
                        <img src={logo} alt='Portfolio Logo' className="img-fluid profile-image" />
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="text-center">About Me</h2>
                <p className="text-center">I am a web developer with experience in building responsive and user-friendly applications. I love to learn new technologies and improve my skills.</p>
            </div>
        </>
    )
}

export default Home;