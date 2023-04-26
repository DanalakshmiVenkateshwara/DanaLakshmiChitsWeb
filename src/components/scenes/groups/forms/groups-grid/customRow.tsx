import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import GridCell from '../../../../shared/grid/GridCell'
import CreateGroup from '../create-group';
import putApiData from '../../../../app-services/put-api';
import postApiData from '../../../../app-services/post-api';

export default function CustomRow(data: any) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      const handleEdit =()=>{
        debugger
        postApiData(`Admin/AddChitPlan`, '', data)
        .then((response: any) => {
         if (response) {
          debugger
          }
          })
         }
  
       
      return (
          <>
          {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Group Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body><CreateGroup data={data}
          /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>   */}
            <GridCell targetField='groupName'><>{data.groupName}</></GridCell>
            <GridCell targetField='amount'><>{data.amount}</></GridCell>
            <GridCell  targetField="duration">{data.duration}</GridCell>
            <GridCell  targetField="noOfMembers">{data.noOfMembers}</GridCell>
            <GridCell  targetField="installmentAmount">{data.installmentAmount}</GridCell>
            <GridCell  targetField="startDate" >{data.startDate}</GridCell>
            <GridCell targetField="existed"><>{data.existed?"Active":"InActive"}</></GridCell> 
            <GridCell targetField=""><Button variant="primary" onClick={handleEdit}>Edit</Button></GridCell>
        </>
    )
}