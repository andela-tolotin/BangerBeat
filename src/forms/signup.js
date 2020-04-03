import { Button, Form } from "react-bootstrap";
import { useFormik, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      stageName: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Enter a valid email address"),
      stageName: Yup.string()
        .required("Required")
        .max(20, "Only 20 characters allowed as stage name"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Formik>
      <Form style={{ padding: "20px" }} onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          {formik.touched.email && formik.errors.email ? (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formBasicStageName">
          <Form.Label>Stage Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter stage name"
            value={formik.values.stageName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="stageName"
          />
          {formik.touched.stageName && formik.errors.stageName ? (
            <Form.Text className="text-danger">
              {formik.errors.stageName}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="confirmPassword"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <Form.Text className="text-danger">
              {formik.errors.confirmPassword}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Button variant="warning" type="submit" className={"filled"}>
          SIGN UP
        </Button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
