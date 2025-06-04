import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Projects = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">My Projects</h1>
                <p className="text-center">Here are some of the projects I've worked on:</p>
                <ul className="list-group">
                    <li className="list-group-item">Project 1: A React App</li>
                    <li className="list-group-item">Project 2: A Node.js API</li>
                    <li className="list-group-item">Project 3: A Full-Stack Application</li>
                </ul>
            </div>
        </>
    );
}

export default Projects;