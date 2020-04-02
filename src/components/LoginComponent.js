import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = e => {
    e.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
  };

  const addEmail = e => {
    setEmail(e.target.value);
  };
  const addPassword = e => {
    setPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col sm={4} md={6} lg={4}>
          <h4 style={{ textAlign: "center", padding: "20px" }}>Sign In</h4>
          <Form style={{ padding: "20px" }} validated={true} onSubmit={login}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={addEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={addPassword}
              />
            </Form.Group>
            <Button variant="warning" type="submit" className={"filled"}>
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={4} md={6} lg={4}>
          <p style={{ padding: "20px" }}>
            <FacebookLoginButton onClick={() => alert("Hello")} />
            <GoogleLoginButton onClick={() => alert("Hello")} />
          </p>
          <p style={{ padding: "20px", textAlign: "right" }}>
            <Form.Text className="text-muted">
              Don't have an account yet? <Link to={"/signup"}>Sign Up</Link>
            </Form.Text>
          </p>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Login;
