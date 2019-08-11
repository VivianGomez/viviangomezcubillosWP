import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import VSLearnProcess from './components/VSLearnProcess';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
          <Navbar/>
          <Route exact path='/' component={App} />
          <Route path='/myPortFolio' component={Portfolio} />
          <Route path='/contact' component={Footer} />
          <Route path='/myProjects' component={Projects} />
          <Route path='/vclearnprocess' component={VSLearnProcess} />
        </div>
    </Router>,
    document.getElementById('root')
  );
  
  serviceWorker.unregister();
  
