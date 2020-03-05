import React from "react";
import "./App.css";
import logo from "./logo.svg";
import routes from "./routes";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>404 - Not Found</h1>
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <header className="App-header">
            <div className={"companyBrand"}>
              <img className="App-logo" src={logo} alt={"App logo"} />
              <h3>BANGERBEATS</h3>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/genres">Genres</Link>
              </li>
              <li>
                <Link to="/beats">Beat</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </header>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
