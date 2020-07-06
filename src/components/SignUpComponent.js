import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpForm from "../forms/signup";

const SignUp = () => {
  const [userType, setUserType] = React.useState("");
  const [goNext, setGoNext] = React.useState(false);

  const toSignupForm = () => {
    "" === userType
      ? toast.error("Who you are !", {
          position: toast.POSITION.TOP_RIGHT
        })
      : setGoNext(true);
  };

  return (
    <React.Fragment>
      {goNext === false && (
        <Row className="justify-content-md-center">
          <Col sm={4} md={6} lg={4}>
            <div className="signup-steps">
              <h2 style={{ textAlign: "center" }}>I am a</h2>
              <button
                id="a_producer"
                className={
                  userType === "producer"
                    ? "btn btn-warning"
                    : "btn btn-outline-warning"
                }
                onClick={() => {
                  setUserType("producer");
                }}
              >
                Music Producer
              </button>
              <button
                id="a_musician"
                className={
                  userType === "musican"
                    ? "btn btn-warning"
                    : "btn btn-outline-warning"
                }
                onClick={() => {
                  setUserType("musican");
                }}
              >
                Musician
              </button>
              <button
                id="signup"
                className="btn btn-warning"
                onClick={toSignupForm}
              >
                CONTINUE >>
              </button>
              <ToastContainer autoClose={8000} />
            </div>
          </Col>
        </Row>
      )}
      {goNext === true && (
        <Row className="justify-content-md-center">
          <Col sm={4} md={6} lg={4}>
            <h1 style={{ textAlign: "center", padding: "20px" }}>Sign Up</h1>
            <SignUpForm />
            <div className="signup-steps">
              <p style={{ padding: "20px" }}>
                <FacebookLoginButton onClick={() => alert("Hello")} />
                <GoogleLoginButton onClick={() => alert("Hello")} />
              </p>
              <p style={{ padding: "20px", textAlign: "right" }}>
                <Form.Text className="text-muted">
                  Already have an account yet? <Link to={"/login"}>Log In</Link>
                </Form.Text>
              </p>
            </div>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};
export default SignUp;
