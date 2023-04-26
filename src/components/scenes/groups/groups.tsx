import React, { useState } from "react";
import CreateGroup from "./forms/create-group";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import GroupsGrid from "./forms/groups-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";

export default function Groups() {
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
            <Modal.Title>Group Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body><CreateGroup data={{}}
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
   
    <Card noPadding title="Groupwise List"
      headerAction={<Button onClick={createGroup} size="sm">Create</Button>}
    // actionButtons={<><Button size="sm">Save</Button> </>}
    >
      <GroupsGrid />
    </Card>
    </>
  );
}