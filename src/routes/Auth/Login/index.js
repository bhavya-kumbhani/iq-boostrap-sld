import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import withForm from "../../../components/HOC/CommonForm";
import FormFieldsComponent from "../../../components/HOC/CommonForm/FormFieldsComponent";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onLoginSubmit = (payload) => {
    console.log("🚀 ~ onLoginSubmit ~ payload:", payload);
    const storedData = JSON.parse(localStorage.getItem("signUpUserData") || [])
    console.log("🚀 ~ onLoginSubmit ~ storedData:", storedData)
    const user = storedData.find(
      (item) =>
        item.email === payload.email && item.password === payload.password
    );
    console.log("🚀 ~ onLoginSubmit ~ user:", user);

    if (!user) {
      return toast.error("User not found or incorrect password");
    }
    localStorage.setItem("authUser", JSON.stringify(payload));
    navigate("/dashboard");
    // axios
    //   .post("http://localhost:3001/api/auth/login", payload)
    //   .then((response) => {
    //     console.log("Login response : ", response);
    //     localStorage.setItem("token", response.data.token);
    //     window.location.href = "/dashboard";
    //   })
    //   .catch((err) => console.log(err));
  };
  const loginFormField = ["email", "password"];
  const LoginForm = withForm(FormFieldsComponent, loginFormField, onLoginSubmit);
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-5">
            <CardBody>
              <h2>Login</h2>
              <LoginForm submitButtonText="Sign In" />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
