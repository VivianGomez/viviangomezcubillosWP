import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    state = {
        images: [],
    };

   render() {
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" align="center">
                <Link to={`/`} className="navbar-brand" align="center"> Me <i class="fas fa-heart text-danger"></i><i class="fas fa-pencil-alt"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" to={`/myPortFolio`}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"to={`/myProjects`}>Projects</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={`/contact`}> Contact</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
 }
}

export default Navbar;