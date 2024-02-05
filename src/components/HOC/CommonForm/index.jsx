import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "reactstrap";

const withForm = (WrappedComponent, fields, onFormSubmit) => {
  return (props) => {
    const navigate = useNavigate();
    const path = window.location.pathname;
    const [inputValue, setInputValue] = useState({});
    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value });
      setErrors({ ...errors, [name]: "" });
    };

    const validation = () => {
      const error = {};
      let formValid = true;

      const validations = {
        // password:
        //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        phone: /^\d{10}$/,
      };

      fields.forEach((field) => {
        if (!inputValue[field] || inputValue[field] === "") {
          formValid = false;
          error[field] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required.`;
        }
      });

      Object.entries(validations).forEach(([field, regex]) => {
        if (inputValue[field] && !regex.test(inputValue[field])) {
          formValid = false;
          error[field] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is invalid.`;
        }
      });

      setErrors(error);
      return formValid;
    };

    // const validation = () => {
    //   let error = {};
    //   let formValid = true;

    //   fields.forEach((field) => {
    //     if (!inputValue[field] || inputValue[field] === "") {
    //       formValid = false;
    //       error[field] = `${
    //         field.charAt(0).toUpperCase() + field.slice(1)
    //       } is required.`;
    //     }
    //   });

    //   setErrors(error);
    //   return formValid;
    // };

    const submitHandler = (e) => {
      e.preventDefault();
      if (validation()) {
        try {
          onFormSubmit(inputValue);
          console.log("API call successful!");

          // Clear form fields after a successful API call
          setInputValue({});
          setErrors({});

          if (typeof props.onSubmit === "function") {
            props.onSubmit(inputValue);
          }
        } catch (error) {
          console.error("API call failed:", error);
        }
        console.log("submitHandler ~ inputValue:", inputValue);
      }
    };

    return (
      <Form onSubmit={submitHandler}>
        <WrappedComponent
          fields={fields}
          inputValue={inputValue}
          errors={errors}
          handleOnChange={handleOnChange}
        />
        <div className="d-flex justify-content-center">
          {path === "/" ? (
            <p>
              Don't have an account?{" "}
              <b onClick={() => navigate("/signup")}>SIGN UP</b>
              Here
            </p>
          ) : path === "/signup" ? (
            <p>
              Already have an account?
              <b onClick={() => navigate("/")}> SIGN IN</b>
            </p>
          ) : null}
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit" color="primary">
            {props.submitButtonText || "Submit"}
          </Button>
        </div>
      </Form>
    );
  };
};

export default withForm;
