import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [type, setType] = React.useState("musican");
  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Col sm={4} md={6} lg={4}>
          <div className="signup-steps">
            <h2 style={{ textAlign: "center" }}>I am a</h2>
            <button id="a_producer" className="btn btn-outline-warning">
              Music Producer
            </button>
            <button id="a_musician" className="btn btn-outline-warning">
              Musician
            </button>
            <button id="signup" className="btn btn-warning">
              SIGN UP
            </button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default SignUp;
