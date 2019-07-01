import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
          <Navbar/>
          <Route exact path='/' component={App} />
          <Route path='/myPortFolio' component={Portfolio} />
        </div>
    </Router>,
    document.getElementById('root')
  );
  
  serviceWorker.unregister();
  
