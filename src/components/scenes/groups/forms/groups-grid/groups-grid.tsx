import React from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import CreateGroup from "../create-group";

export default function GroupsGrid() {

  const createGroup = (e:any) => { 
    debugger
    <Modal>
      <CreateGroup/>
    </Modal>
    
};  
  return (
    <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader align="center">
                 Group List 
                 <button className="btn btn-warning" onClick={createGroup}>Create</button>
                 </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>GroupName</th>  
                    <th>Amount</th>  
                    <th>Duration</th>  
                    <th>No of Members</th>  
                    <th>InstallmentAmount</th>  
                    <th>StartDate</th> 
                  </tr>  
                </thead>  
                <tbody>  
                     <tr>  
                        <td>{"Test"}</td>  
                        <td>{100000}</td>  
                        <td>{10}</td>  
                        <td>{10}</td>  
                        <td>{10000}</td>  
                        <td>{"01/05/2023"}</td>
                      </tr> 
                      <tr>  
                        <td>{"Test1"}</td>  
                        <td>{200000}</td>  
                        <td>{20}</td>  
                        <td>{10}</td>  
                        <td>{20000}</td>  
                        <td>{"10/05/2023"}</td>
                      </tr>
                </tbody> 
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>
  );
}