import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";

const SignUp = () => {
  const [type, setType] = React.useState("");

  console.log("type", type);

  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col sm={4} md={6} lg={4}>
          <div className="signup-steps">
            <h2 style={{ textAlign: "center" }}>I am a</h2>
            <button
              id="a_producer"
              className="btn btn-outline-warning"
              onClick={() => {
                setType("producer");
              }}
            >
              Music Producer
            </button>
            <button
              id="a_musician"
              className="btn btn-outline-warning"
              onClick={() => {
                setType("musican");
              }}
            >
              Musician
            </button>
            <button id="signup" className="btn btn-warning">
              CONTINUE >>
            </button>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={4} md={6} lg={4}>
          <div className="signup-steps">
            <p>
              <FacebookLoginButton onClick={() => alert("Hello")} />
              <GoogleLoginButton onClick={() => alert("Hello")} />
            </p>
            <p style={{ padding: "20px", textAlign: "right" }}>
              <Form.Text className="text-muted">
                Already have an account yet?{" "}
                <Link to={"/login"} className="">
                  Log In
                </Link>
              </Form.Text>
            </p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default SignUp;
