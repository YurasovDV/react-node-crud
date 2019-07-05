import React from 'react';
import '../stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, NavLink, Router } from 'react-router-dom';
import history from '../history';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import ArticleInfo from './ArticleInfo';
import ArticleList from './ArticleList';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar bg-dark navbar-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles/new">New Article</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/articles/new" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
  </Switch>

);

export default App;
