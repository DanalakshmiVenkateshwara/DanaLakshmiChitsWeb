import React, { useState } from "react";
import UsersGrid from "./forms/users-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import {  Button, Modal } from "react-bootstrap";
import Card from "../../shared/card/Card";
import CreateUser from "./forms/create-user";

export default function Users() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  const createGroup =()=>{
    setShow(true)
  }
return (
  <>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body><CreateUser data={{}}
        /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  
 
      <Card noPadding title="Users List"
        headerAction={<Button onClick={createGroup} size="sm">Create</Button>}>
        <UsersGrid/>
        </Card>
        </>
      );

}