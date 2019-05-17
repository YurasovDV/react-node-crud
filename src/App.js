import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Create from './components/create.component';
import Index from './components/index.component';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
          <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse show" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link" >Index</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                  </li>
              </ul>
            </div>
          </nav>
          <h2>React CRUD tutorial</h2>
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
