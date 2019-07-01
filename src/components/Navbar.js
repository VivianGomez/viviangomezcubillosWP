import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    state = {
        images: [],
    };

   render() {
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={`/`} className="navbar-brand"> Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
 }
}

export default Navbar;