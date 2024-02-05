import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
const AddModel = ({ isOpen, handleShow, handleClose, AddForm, args }) => {
  return (
    <>
      <Modal isOpen={isOpen} toggle={handleClose} {...args}>
        <ModalHeader toggle={handleClose}>Add User</ModalHeader>
        <ModalBody>
          <AddForm submitButtonText="ADD" />
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddModel;
