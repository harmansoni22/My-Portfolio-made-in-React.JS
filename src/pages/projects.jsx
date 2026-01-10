import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Projects = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">My Projects</h1>
                <p className="text-center">Here are some of the projects I've worked on:</p>
                <ul className="list-group">
                    <li className='list-group-item'>My Portfolio based on HtML, CSS and vanilla JS</li>
                    <li className='list-group-item'>My Portfolio based on React.JS</li>
                    <li className='list-group-item'>Next.JS basic dashboard</li>
                    <li className='list-group-item'>Basic react application built around create-react-app</li>
                    <li className='list-group-item'>Basic react application built around vite</li>
                    <li className='list-group-item'>Basic react application built around Next.JS</li>
                    <li className='list-group-item'>Basic vue application built around TezJS</li>
                </ul>
            </div>
        </>
    );
}

export default Projects;