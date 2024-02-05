import React from "react";
import EnhancedInput from "../EnhancedInput";

const FormFieldsComponent = ({
  fields,
  inputValue,
  errors,
  handleOnChange,
}) => (
  <>
    {fields?.map((field) => (
      <EnhancedInput
        key={field}
        type={
          field === "email"
            ? "email"
            : field === "password"
            ? "password"
            : field === "dob"
            ? "date"
            : "text"
        }
        label={field.charAt(0).toUpperCase() + field.slice(1)}
        name={field}
        id={`example${field}`}
        placeholder={`Enter ${field}`}
        value={inputValue[field]}
        onChange={handleOnChange}
        errors={errors[field]}
      />
    ))}
  </>
);

export default FormFieldsComponent;
