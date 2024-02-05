import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const EnhancedInput = ({
  onChange,
  label,
  type,
  name,
  id,
  placeholder,
  errors,
  value
}) => {
  return (
    <>
      <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">
          {label}
        </Label>
        <Input
          invalid={errors}
          type={type || "text"}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <FormFeedback >{errors}</FormFeedback>
      </FormGroup>
    </>
  );
};

export default EnhancedInput;
