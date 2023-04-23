import react from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
export default function OutStandings(){

    const payAmount =()=>{
        
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
                 OutStanding Users Payment List By Group
                 <button className="btn btn-warning" onClick={payAmount}>PayChitAmount</button>
                 </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>UserName</th>  
                    <th>Phone</th>  
                    <th>PendingAmount</th>
                  </tr>  
                </thead>  
                <tbody>  
                     <tr>  
                        <td>{"Test"}</td>  
                        <td>{8888888888}</td>  
                        <td>{10000}</td> 
                      </tr> 
                      <tr>  
                      <td>{"Test11"}</td>  
                        <td>{8888888888}</td>  
                        <td>{20000}</td>
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