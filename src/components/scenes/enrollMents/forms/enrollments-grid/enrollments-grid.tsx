import react from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";

export default function EnrollMentsGrid(){
    const userEnrollMent =()=>{

    }
    return(
        <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card> 
          <tr>
                <td>Select Group</td>
                <td>
                <select name="Groups" className="form-control">
                          <option>...Please Select...</option>
                          <option>Sample1</option>
                          <option>Sample2</option>
                          <option> Sample3</option>
                        </select>
                </td>
            </tr> 
            <CardHeader align="center">
                Enrolled Members By Group
                 <button className="btn btn-warning" onClick={userEnrollMent}>EnrollMent</button>
                 </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>UserName</th>  
                    <th>UserStatus</th>  
                    <th>RaisedMonth</th> 
                  </tr>  
                </thead>  
                <tbody>  
                     <tr>  
                        <td>{"Test"}</td>  
                        <td>{"Active"}</td>  
                        <td>{2}</td>  
                      </tr> 
                      <tr>  
                        <td>{"Test1"}</td>  
                        <td>{""}</td>  
                        <td>{"N/A"}</td>
                      </tr>
                </tbody> 
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>
    );
};