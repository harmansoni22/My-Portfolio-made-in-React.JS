import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Home = () => {
    const Links = [
        { name: "Learn More", path: "/learn-more" }
    ]

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="container-fluid pt-5 pb-3">
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
                        <div className="col-md-4 text-center justify-content-center">
                            <img src={logo} alt='Portfolio Logo' className="img-fluid profile-image logo" />
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="pe-4 ps-4">
                            <h2 className="text-center h2">About Me</h2>
                        <p className="paragraph ps-4 pe-4" style={{
                            fontSize: "20px"
                        }}>
                            I'm Harman Soni, a 16-year-old self-taght developer, and JEE 
                            aspirant based in Madhya Pradesh, India. I focus on front-end 
                            development using HTML, CSS, JavaScript, Bootstrap, and React.JS, 
                            and I'm currently expanding into Vue.JS and TezJS to strengthen my 
                            UI engineering skills. I approach development with a builder's mindset -- writing clean, 
                            scalable code and continously improving through hands-on learning. 
                            Alongside my technical journey, I'm preparing for a competitive 
                            exam, JEE and managing academic goals with self-discipline and 
                            structured planning. I value clarity, execution, and growth. Whether it's coding, 
                            studying, or problem-solving, I believe in showing up with intent 
                            and learning through action.                        
                        </p>
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default Home;