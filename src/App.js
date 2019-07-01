import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id="contact">
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 parent">
        <img width="80%" src={require('./images/fondo.png')} className="responsive"/>  
      </div>  
        <div className="col-6 child-element-left">
        <Link to={`/myPortFolio`}> <i class="fas  fa-angle-double-left fa-2x text-dark"></i></Link>
        </div>
        <div className="col-6  child-element-right">
        <Link to={`/myProjects`}> <i class="fas fa-angle-double-right fa-2x text-dark"></i></Link>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
