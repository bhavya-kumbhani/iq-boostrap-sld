import React from "react";
import { Container, Row, Col, Card, CardBody, Button, Form } from "reactstrap";
import withForm from "../../../components/HOC/CommonForm";
import FormFieldsComponent from "../../../components/HOC/CommonForm/FormFieldsComponent";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const SignupFormFields = [
    "firstName",
    "lastName",
    "email",
    "password",
    "phone",
  ];

  let storedUserData = localStorage.getItem("signUpUserData") || [];
  let storedData = storedUserData.length > 0 ? JSON.parse(storedUserData) : []

  const onSignupSubmit = async (formData) => {
    // Perform your signup API call here
    // Replace the following line with your actual API call implementation
    console.log("Simulating signup API call:", formData);
    if (storedData) {
      storedData.push(formData);
      localStorage.setItem("signUpUserData", JSON.stringify(storedData));
      navigate("/");
    }
    // Example using fetch:
    // const response = await fetch("your_signup_api_url", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await response.json();
    // return data;
  };

  const SignupForm = withForm(
    FormFieldsComponent,
    SignupFormFields,
    onSignupSubmit
  );
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="mt-5">
              <CardBody>
                <h2>Signup</h2>
                <SignupForm submitButtonText="Create Account" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
