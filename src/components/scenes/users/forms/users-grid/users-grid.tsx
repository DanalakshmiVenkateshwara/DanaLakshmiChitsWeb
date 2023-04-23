import React from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import CreateUser from "../create-user";
export default function UsersGrid() {
    const createUser = (e:any) => { 
        debugger;
        <Modal>
        <CreateUser/>
        </Modal>
    }; 
    return (
        <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card>  
            {/* <tr>
                <td>Groups</td>
                <td>
                <select name="Groups" className="form-control">
                          <option>...Please Select...</option>
                          <option>Sample1</option>
                          <option>Sample2</option>
                          <option> Sample3</option>
                        </select>
                </td>
            </tr> */}
                        
            <CardHeader align="center">
                 Users List By Group
                 <button className="btn btn-warning" onClick={createUser}>Create</button>
                 </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>Name</th>  
                    <th>Phone</th>  
                    <th>Email</th>  
                    <th>Password</th>  
                    <th>Address</th> 
                  </tr>  
                </thead>  
                <tbody>  
                     <tr>  
                        <td>{"Test"}</td>  
                        <td>{8888888888}</td>  
                        <td>{"test@gmail.com"}</td>  
                        <td>{8888888888}</td>  
                        <td>{"Miyapur"}</td> 
                      </tr> 
                      <tr>  
                      <td>{"Test11"}</td>  
                        <td>{8888888888}</td>  
                        <td>{"test11@gmail.com"}</td>  
                        <td>{8888888888}</td>  
                        <td>{"Miyapur11"}</td>
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