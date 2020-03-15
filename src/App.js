import React from "react";
import "./App.css";
import logo from "./logo.svg";
import routes from "./routes";
import brand from "./utils/bangerbeats";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>404 - Not Found</h1>
    </React.Fragment>
  );
};

function App() {
  return (
    <Router>
      <React.Fragment>
        <Row>
          <Col>
            <header className="App-header">
              <nav>
                <div className={"companyBrand"}>
                  <Image
                    className="App-logo"
                    src={logo}
                    alt={"Banger Beat logo"}
                    fluid
                  />
                  <h3>{brand.brandname}</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/genres">Genres</Link>
                  </li>
                  <li>
                    <Link to="/beats">Beats</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/login" className="login-btn">
                      LOG IN
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
          </Col>
        </Row>
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
  );
}

export default App;
