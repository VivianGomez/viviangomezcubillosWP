import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#homeR">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#aboutR">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experienceR">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#skillsR">SKills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#skillsR">Projects</a>
            </li>
            <li className="nav-item">
                  <a className="nav-link disabled" href="#skillsR">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
      <img width="80%" src={require('./images/fondo.png')} className="responsive"/>         
      </div>
    </div>
  );
}

export default App;
