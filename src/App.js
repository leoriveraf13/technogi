import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import User from "./components/users";
import UserList from "./components/users_list";
import UsersListSelect from "./components/users_list_select";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/users" className="navbar-brand">
              TECHNOGI
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Lista sencilla
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/userAPI"} className="nav-link">
                  Lista API
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/userSelect"} className="nav-link">
                  Lista seleccionable
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/user"]} component={User} />
              <Route exact path={["/", "/userAPI"]} component={UserList} />
              <Route exact path={["/", "/userSelect"]} component={UsersListSelect} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
