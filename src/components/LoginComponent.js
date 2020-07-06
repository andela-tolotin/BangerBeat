import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { Link } from "react-router-dom";
import LoginInForm from "../forms/login";

const Login = () => {
  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col sm={4} md={6} lg={4}>
          <h4 style={{ textAlign: "center", padding: "20px" }}>Sign In</h4>
          <LoginInForm />
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
