import React, { useState } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import AddModel from "../../components/Common/AddModel";
import ShowTable from "../../components/Common/ShowTable";
import withForm from "../../components/HOC/CommonForm";
import FormFieldsComponent from "../../components/HOC/CommonForm/FormFieldsComponent";

const Home = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tableHeaders, setTableHeaders] = useState([
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Gender",
    "DOB",
  ]);
  const getTableData = localStorage.getItem("userAllData");

  const userFormFields = [
    "firstName",
    "lastName",
    "email",
    "password",
    "phone",
    "dob",
    "gender",
  ];
  let storedUserData = localStorage.getItem("userData") || [];
  let storedData = storedUserData.length > 0 ? JSON.parse(storedUserData) : []
  const onAddFromSubmit = (payload) => {
    console.log("🚀 ~ onAddFromSubmit ~ payload:", payload)
    if (storedData) {
      storedData.push(payload);
      localStorage.setItem("userData", JSON.stringify(storedData));
      handleClose()
    }
  };

  const UsersForm = withForm(FormFieldsComponent, userFormFields, onAddFromSubmit);

  return (
    <div>
      <div className="d-flex justify-content-end p-4">
        <Button variant="primary" onClick={handleShow}>
          + ADD
        </Button>
      </div>

      <ShowTable headers={tableHeaders} data={storedData} />

      <AddModel
        isOpen={show}
        handleShow={handleShow}
        handleClose={handleClose}
        AddForm={UsersForm}
      />
    </div>
  );
};

export default Home;
